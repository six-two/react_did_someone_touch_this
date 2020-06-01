import { ImageData } from './store';
import { AFTER_IMAGE, BEFORE_IMAGE, DIFF_IMAGE } from './constants';


// action types
export const SET_IMAGE = "SET_IMAGE";
export const COMPLETE_STEP = "COMPLETE_STEP";
export const GO_TO_STEP = "GO_TO_STEP"
export const SET_IMAGE_SOURCE = "SET_IMAGE_SOURCE";

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

export function setImageSource(value: string): StringPayloadAction {
  return { type: SET_IMAGE_SOURCE, payload: value };
}
