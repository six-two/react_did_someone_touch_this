import store, { ImageData, Resolution } from './store';
import * as C from './constants';


// dispatch
const d = store.dispatch;

// actions
export interface Action {
  type: string,
  payload: string | number | boolean | null | SetImagePayload | Resolution,
}

export interface SetImagePayload {
  imageName: string,
  imageData: ImageData,
}

// action creators
export function setBeforeImage(imageData: ImageData) {
  setImage(C.BEFORE_IMAGE, imageData);
}

export function setAfterImage(imageData: ImageData) {
  setImage(C.AFTER_IMAGE, imageData);
}

export function setComparisonType(value: string) {
  d({
    type: C.SET_COMPARE_TYPE,
    payload: value,
  });
}

function setImage(imageName: string, imageData: ImageData) {
  d({
    type: C.SET_IMAGE,
    payload: {
      imageName: imageName,
      imageData: imageData,
    },
  });
}

export function completedCurrentStep() {
  d({ type: C.COMPLETE_STEP, payload: null });
}

export function goToStep(step: number) {
  d({ type: C.GO_TO_STEP, payload: step });
}

export function setImageSource(value: string) {
  d({ type: C.SET_IMAGE_SOURCE, payload: value });
}

export function setScreenshotFormat(value: string) {
  d({ type: C.SET_SCREENSHOT_FORMAT, payload: value });
}

export function setScreen(value: string) {
  d({ type: C.SET_SCREEN, payload: value });
}

export function setPreferredResolution(width: number, height: number) {
  d({
    type: C.SET_PREFERRED_RES,
    payload: {
      width: width,
      height: height,
    },
  });
}

export function setEnableBeforeImageOverlay(value: boolean) {
  d({ type: C.SET_ENABLE_BEFORE_OVERLAY, payload: value });
}
