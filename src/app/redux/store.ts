import { createStore } from 'redux';
import reducer from './reducer';

export type ImageData = string;

export interface State {
  beforeImage: ImageState,
  afterImage: ImageState,
}

export interface ImageState {
  data: ImageData | null,
  updateCount: number,
}


export const fallbackState: State = {
  beforeImage: {
    data: null,
    updateCount: 0,
  },
  afterImage: {
    data: null,
    updateCount: 0,
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
