import { createStore } from 'redux';
import reducer from './reducer';

export type ImageData = string;

export interface State {
  beforeImage: ImageState,
  afterImage: ImageState,
  diffImage: ImageState,
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
  beforeImage: DEFAULT_IMAGE_STATE,
  afterImage: DEFAULT_IMAGE_STATE,
  diffImage: DEFAULT_IMAGE_STATE,
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
