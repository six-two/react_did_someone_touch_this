import { ImageData } from './store';

// action types
export const SET_IMAGE = "SET_IMAGE";
export const COMPLETE_STEP = "COMPLETE_STEP";
export const GO_TO_STEP = "GO_TO_STEP"
// other constants
export const AFTER_IMAGE = "AFTER_IMAGE";
export const BEFORE_IMAGE = "BEFORE_IMAGE";
export const DIFF_IMAGE = "DIFF_IMAGE";


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

export type Action = SetImageAction | ActionWithoutPayload;

// action creators
export function setBeforeImage(imageData: ImageData): SetImageAction {
  return setImage(BEFORE_IMAGE, imageData);
}

export function setAfterImage(imageData: ImageData): SetImageAction {
  return setImage(AFTER_IMAGE, imageData);
}

export function setDiffImage(imageData: ImageData): SetImageAction {
  return setImage(DIFF_IMAGE, imageData);
}

function setImage(imageName: string, imageData: ImageData): SetImageAction {
  return {
    type: SET_IMAGE,
    payload: {
      imageName: imageName,
      imageData: imageData,
    },
  };
}

export function completedCurrentStep(): ActionWithoutPayload {
  return { type: COMPLETE_STEP };
}

export function goToStep(step: number): GoToStepAction {
  return { type: GO_TO_STEP, payload: step };
}
