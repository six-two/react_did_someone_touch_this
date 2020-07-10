import * as Actions from './actions';
import * as C from './constants';
import { ReduxState, ImageState, ImageData, Resolution, fallbackState } from './store';
import { getLastAccessibleStepIndex, assertStepInBounds } from '../steps/Steps';


function reducer(state: ReduxState | undefined, action: Actions.Action): ReduxState {
  if (!state) {
    console.warn("No state was supplied to reducer. Falling back to default values");
    state = fallbackState;
  }

  switch (action.type) {
    case C.SET_IMAGE: {
      return handle_setImage(state, action);
    }
    case C.COMPLETE_STEP: {
      return handle_completeStep(state);
    }
    case C.GO_TO_STEP: {
      return handle_goToStep(state, action);
    }
    case C.SET_IMAGE_SOURCE: {
      return handle_setImageSource(state, action);
    }
    case C.SET_SCREEN: {
      const value = action.payload as string;
      return {
        ...state,
        screen: value,
      }
    }
    case C.SET_COMPARE_TYPE: {
      const value = action.payload as string;
      return {
        ...state,
        comparisonType: value,
      }
    }
    case C.SET_SCREENSHOT_FORMAT: {
      const value = action.payload as any;
      return {
        ...state,
        settings: {
          ...state.settings,
          screenshotFormat: value,
        },
      }
    }
    case C.SET_PREFERRED_RES: {
      const value = action.payload as Resolution;
      return {
        ...state,
        settings: {
          ...state.settings,
          preferredResolution: value,
        },
      }
    }
    case C.SET_ENABLE_BEFORE_OVERLAY: {
      const value = action.payload as boolean;
      return {
        ...state,
        settings: {
          ...state.settings,
          overlayBeforeImage: value,
        },
      }
    }
    case "@@INIT":
      return state;
    default:
      console.warn(`Unknown action type: "${action.type}"`);
      return state;
  }
}

function handle_completeStep(state: ReduxState): ReduxState {
  let next = state.steps.current + 1;
  if (assertStepInBounds(next)) {
    let completed = getLastAccessibleStepIndex(next);
    // handle cases where the user went back
    completed = Math.max(state.steps.completed, completed);
    return {
      ...state,
      steps: {
        current: next,
        completed: completed,
      },
    }
  } else {
    return state;
  }
}

function handle_setImageSource(state: ReduxState, action: Actions.Action): ReduxState {
  let value = action.payload as string;
  return {
    ...state,
    settings: {
      ...state.settings,
      imageSource: value,
    },
  };
}

function handle_goToStep(state: ReduxState, action: Actions.Action): ReduxState {
  let step = action.payload as number;
  if (assertStepInBounds(step) && step <= state.steps.completed) {
    return {
      ...state,
      steps: {
        ...state.steps,
        current: step,
      },
    };
  } else {
    console.warn(`Can not switch to step ${step}. ReduxState: ${state.steps}`);
    return state;
  }
}

function handle_setImage(state: ReduxState, action: Actions.Action): ReduxState {
  let payload = action.payload as Actions.SetImagePayload;
  let imageStateCopy = { ...state.images };
  switch (payload.imageName) {
    case C.AFTER_IMAGE:
      imageStateCopy.after = modifyImageState(imageStateCopy.after, payload.imageData);
      break;
    case C.BEFORE_IMAGE:
      imageStateCopy.before = modifyImageState(imageStateCopy.before, payload.imageData);
      debug_print_image_size(payload.imageData);
      break;
    default:
      console.warn(`Unknown image name: "${payload.imageName}"`);
      return state;
  }
  // set the image AND go to the next step
  return handle_completeStep({
    ...state,
    images: imageStateCopy,
  });
}

function debug_print_image_size(src: string) {
  var img = document.createElement("img");
  img.onload = function(event) {
    console.log(`image dimendion: ${img.naturalWidth}x${img.naturalHeight}`);
  }
  img.src = src;
}

function modifyImageState(oldSubState: ImageState, newData: ImageData) {
  return {
    data: newData,
    updateCount: oldSubState.updateCount + 1,
  };
}

export default reducer
