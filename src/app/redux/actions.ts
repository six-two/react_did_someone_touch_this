import store, { ImageData } from './store';
import * as C from './constants';


// dispatch
const d = store.dispatch;

// actions
export interface ActionWithoutPayload {
  type: string,
}

export interface SetImageAction {
  type: string,
  payload: {
    imageName: string,
    imageData: ImageData,
  },
}

export interface GoToStepAction {
  type: string,
  payload: number,
}

export interface StringPayloadAction {
  type: string,
  payload: string,
}

export type Action = SetImageAction | ActionWithoutPayload | StringPayloadAction;

// action creators
export function setBeforeImage(imageData: ImageData): SetImageAction {
  return setImage(C.BEFORE_IMAGE, imageData);
}

export function setAfterImage(imageData: ImageData): SetImageAction {
  return setImage(C.AFTER_IMAGE, imageData);
}

export function setComparisonType(value: string) {
  d({
    type: C.SET_COMPARE_TYPE,
    payload: value,
  });
}

function setImage(imageName: string, imageData: ImageData): SetImageAction {
  return {
    type: C.SET_IMAGE,
    payload: {
      imageName: imageName,
      imageData: imageData,
    },
  };
}

export function completedCurrentStep(): ActionWithoutPayload {
  return { type: C.COMPLETE_STEP };
}

export function goToStep(step: number): GoToStepAction {
  return { type: C.GO_TO_STEP, payload: step };
}

export function setImageSource(value: string): StringPayloadAction {
  return { type: C.SET_IMAGE_SOURCE, payload: value };
}
