import { createStore } from 'redux';
import reducer from './reducer';
import * as C from './constants';
import { getLastAccessibleStepIndex } from '../steps/Steps';

export type ImageData = string;

export interface State {
  images: {
    before: ImageState,
    after: ImageState,
  },
  steps: {
    current: number,
    completed: number,
  },
  settings: {
    imageSource: string,
    screenshotFormat: "png" | "jpeg" | "webp",
    preferredResolution: {
      width: number,
      height: number,
    },
  },
  comparisonType: string,
}

export interface ImageState {
  data: ImageData | null,
  updateCount: number,
}


const DEFAULT_IMAGE_STATE = {
  data: null,
  updateCount: 0,
};

export const fallbackState: State = {
  images: {
    before: DEFAULT_IMAGE_STATE,
    after: DEFAULT_IMAGE_STATE,
  },
  steps: {
    current: 0,
    completed: getLastAccessibleStepIndex(0),
  },
  settings: {
    imageSource: C.SOURCE_WEBCAM,
    screenshotFormat: "png",
    preferredResolution: {
      width: 1920,
      height: 1080,
    },
  },
  comparisonType: C.COMPARE_AUTOMATIC,
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
