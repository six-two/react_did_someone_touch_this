import { ImageData } from './store';

// action types
export const SET_IMAGE = "SET_IMAGE";
export const AFTER_IMAGE = "AFTER_IMAGE";
export const BEFORE_IMAGE = "BEFORE_IMAGE";
export const DIFF_IMAGE = "DIFF_IMAGE";


// actions
export interface SetImageAction {
  type: string,
  payload: {
    imageName: string,
    imageData: ImageData,
  },
}

export type Action = SetImageAction;

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
