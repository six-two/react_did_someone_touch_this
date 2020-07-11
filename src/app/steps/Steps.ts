import * as C from '../redux/constants';

export interface StepData {
  number: number,
  name: string,
  canSkip: boolean,
}

let steps: StepData[] = [];

function addStep(name: string, canSkip: boolean = false): number {
  let number = steps.length;
  let data: StepData = { number: number, name: name, canSkip: canSkip };
  steps.push(data);
  return number;
}

addStep(C.STEP_BEFORE_PHOTO);
addStep(C.STEP_BETWEEN_PHOTOS, true);
addStep(C.STEP_AFTER_PHOTO);
addStep(C.STEP_COMPARE);

export const STEPS_CAM = steps;

steps = [];
addStep(C.STEP_BEFORE_PHOTO);
addStep(C.STEP_AFTER_PHOTO);
addStep(C.STEP_COMPARE);

export const STEPS_FILE = steps;
// console.debug(steps);

export function assertStepInBounds(steps: StepData[], step: number, throwError: boolean = false): boolean {
  let isInBounds = step >= 0 && step < steps.length;
  if (throwError && !isInBounds) {
    throw new Error(`Step is not in bounds: ${step}`);
  }
  return isInBounds;
}

export function getLastAccessibleStepIndex(steps: StepData[], completedSteps: number) {
  assertStepInBounds(steps, completedSteps, true);//throw error if not in bounds

  for (let i = completedSteps; i < steps.length; i++) {
    if (!steps[i].canSkip) {
      // Return the first following non-skippable step
      return i;
    }
  }
  return steps.length - 1;
}

export function canAccessStep(steps: StepData[], step: number, completedSteps: number): boolean {
  assertStepInBounds(steps, step, true);
  assertStepInBounds(steps, completedSteps, true);

  if (step <= completedSteps) {
    // save time calculating stuff
    return true;
  } else {
    return step <= getLastAccessibleStepIndex(steps, completedSteps);
  }
}
