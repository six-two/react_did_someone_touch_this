import { Action, SetImagePayload } from './actions';
import * as C from './constants';
import { ReduxState, ImageState, ImageData, Resolution, fallbackState } from './store';
import { getLastAccessibleStepIndex, assertStepInBounds, STEPS_CAM, STEPS_FILE } from '../steps/Steps';


export default function reducer(state: ReduxState | undefined, action: Action): ReduxState {
  if (!state) {
    console.warn("No state was supplied to reducer. Falling back to default values");
    state = fallbackState;
  }

  switch (action.type) {
    case C.SET_IMAGE:
      return setImage(state, action.payload as SetImagePayload);
    case C.COMPLETE_STEP:
      return completeStep(state);
    case C.GO_TO_STEP:
      return goToStep(state, action.payload as number);
    case C.SET_IMAGE_SOURCE:
      return setImageSource(state, action.payload as string);
    case C.SET_SCREEN:
      return setScreen(state, action.payload as string);
    case C.SET_COMPARE_TYPE:
      return setCompareType(state, action.payload as string);
    case C.SET_SCREENSHOT_FORMAT:
      return setScreenshotFormat(state, action.payload as string);
    case C.SET_PREFERRED_RES:
      return setPreferredResolution(state, action.payload as Resolution);
    case C.SET_ENABLE_BEFORE_OVERLAY:
      return setOverlay(state, action.payload as boolean);
    case "@@INIT":
      return state;
    default:
      console.warn(`Unknown action type: "${action.type}"`);
      return state;
  }
}

function parseCustomResolution(state: ReduxState): ReduxState {
  const searchParams = new URLSearchParams(window.location.search);
  const cRes = searchParams.get("res");
  if (cRes) {
    console.info(`URL contains custom resolution: "${cRes}"`)
    try {
      const split = cRes.split("x", 2);
      const res = {
        width: Number(split[0]),
        height: Number(split[1]),
      };
      return setPreferredResolution(state, res);
    } catch (e) {
      console.error("Error parsing custom resolution: ", e);
    }
  }
  return state;
}

function setCompareType(state: ReduxState, value: string): ReduxState {
  return {
    ...state,
    comparisonType: value,
  };
}

function setScreenshotFormat(state: ReduxState, value: string): ReduxState {
  return {
    ...state,
    settings: {
      ...state.settings,
      screenshotFormat: value as any,
    },
  };
}

function setOverlay(state: ReduxState, value: boolean): ReduxState {
  return {
    ...state,
    settings: {
      ...state.settings,
      overlayBeforeImage: value,
    },
  };
}

function setPreferredResolution(state: ReduxState, value: Resolution): ReduxState {
  return {
    ...state,
    settings: {
      ...state.settings,
      preferredResolution: value,
    },
  };
}

function setScreen(state: ReduxState, value: string): ReduxState {
  if (value === C.SCREEN_STEPS) {
    const useCam = state.settings.imageSource === C.SOURCE_WEBCAM;
    state = {
      ...state,
      steps: {
        ...state.steps,
        list: useCam ? STEPS_CAM : STEPS_FILE,
      },
    }
    state = parseCustomResolution(state);
  }
  return {
    ...state,
    screen: value,
  };
}

function completeStep(state: ReduxState): ReduxState {
  let next = state.steps.current + 1;
  if (assertStepInBounds(state.steps.list, next)) {
    let completed = getLastAccessibleStepIndex(state.steps.list, next);
    // handle cases where the user went back
    completed = Math.max(state.steps.completed, completed);
    return {
      ...state,
      steps: {
        ...state.steps,
        current: next,
        completed: completed,
      },
    };
  } else {
    return state;
  }
}

function setImageSource(state: ReduxState, value: string): ReduxState {
  return {
    ...state,
    settings: {
      ...state.settings,
      imageSource: value,
    },
  };
}

function goToStep(state: ReduxState, value: number): ReduxState {
  if (assertStepInBounds(state.steps.list, value) && value <= state.steps.completed) {
    return {
      ...state,
      steps: {
        ...state.steps,
        current: value,
      },
    };
  } else {
    console.warn(`Can not switch to step ${value}. ReduxState: ${state.steps}`);
    return state;
  }
}

function setImage(state: ReduxState, payload: SetImagePayload): ReduxState {
  let imageStateCopy = { ...state.images };
  switch (payload.imageName) {
    case C.AFTER_IMAGE:
      imageStateCopy.after = modifyImageState(imageStateCopy.after, payload.imageData);
      break;
    case C.BEFORE_IMAGE:
      imageStateCopy.before = modifyImageState(imageStateCopy.before, payload.imageData);
      break;
    default:
      console.warn(`Unknown image name: "${payload.imageName}"`);
      return state;
  }
  // set the image AND go to the next step
  return completeStep({
    ...state,
    images: imageStateCopy,
  });
}

function modifyImageState(oldSubState: ImageState, newData: ImageData) {
  return {
    data: newData,
    updateCount: oldSubState.updateCount + 1,
  };
}
