import { createStore } from 'redux';
import reducer from './reducer';
import * as C from './constants';
import { StepData, STEPS_CAM, STEPS_FILE } from '../steps/Steps';

export type ImageData = string;

export interface ReduxState {
  images: {
    before: ImageState,
    after: ImageState,
  },
  steps: {
    current: number,
    completed: number,
    list: StepData[],
  },
  settings: {
    imageSource: string,
    screenshotFormat: "png" | "jpeg" | "webp",
    preferredResolution: Resolution,
    overlayBeforeImage: boolean,
  },
  comparisonType: string,
  screen: string,
}

export interface Resolution {
  width: number,
  height: number,
}

export interface ImageState {
  data: ImageData | null,
  updateCount: number,
}


const DEFAULT_IMAGE_STATE = {
  data: null,
  updateCount: 0,
};

export const fallbackState: ReduxState = {
  images: {
    before: DEFAULT_IMAGE_STATE,
    after: DEFAULT_IMAGE_STATE,
  },
  steps: {
    current: 0,
    completed: 0,
    list: [],
  },
  settings: {
    imageSource: C.SOURCE_WEBCAM,
    screenshotFormat: "png",
    preferredResolution: {
      width: 1920,
      height: 1080,
    },
    overlayBeforeImage: true,
  },
  comparisonType: C.COMPARE_SLIDER_RIGHT_LEFT,
  screen: C.SCREEN_MENU,
}

let devTools = undefined;
if ((window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  // Redux dev tools are available
  let devToolOptions = {
    trace: false,
    traceLimit: 25
  };
  devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__(devToolOptions);
}

const store = createStore(reducer, fallbackState, devTools);
export default store;
