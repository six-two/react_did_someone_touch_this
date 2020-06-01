import { createStore } from 'redux';
import reducer from './reducer';
import { SOURCE_WEBCAM } from './constants';
import { getLastAccessibleStepIndex } from '../steps/Steps';

export type ImageData = string;

export interface State {
  images: {
    before: ImageState,
    after: ImageState,
    diff: ImageState,
  },
  steps: {
    current: number,
    completed: number,
  },
  settings: {
    imageSource: string,
  },
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
    diff: DEFAULT_IMAGE_STATE,
  },
  steps: {
    current: 0,
    completed: getLastAccessibleStepIndex(0),
  },
  settings: {
    imageSource: SOURCE_WEBCAM,
  },
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
