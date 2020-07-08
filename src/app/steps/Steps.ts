
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

export const STEP_INTRO = addStep("Intro", true);
export const STEP_SETTINGS = addStep("Settings", true);
export const STEP_BEFORE_PHOTO = addStep("Before photo");
export const STEP_BETWEEN_PHOTOS = addStep("Do your thing", true);
export const STEP_AFTER_PHOTO = addStep("After photo");
export const STEP_COMPARE = addStep("Compare photos");

export const STEPS = steps;
// console.debug(steps);

export function assertStepInBounds(step: number, throwError: boolean = false): boolean {
  let isInBounds = step >= 0 && step < STEPS.length;
  if (throwError && !isInBounds) {
    throw new Error(`Step is not in bounds: ${step}`);
  }
  return isInBounds;
}

export function getLastAccessibleStepIndex(completedSteps: number) {
  assertStepInBounds(completedSteps, true);//throw error if not in bounds

  for (let i = completedSteps; i < STEPS.length; i++) {
    if (!STEPS[i].canSkip) {
      // Return the first following non-skippable step
      return i;
    }
  }
  return STEPS.length - 1;
}

export function canAccessStep(step: number, completedSteps: number): boolean {
  assertStepInBounds(step, true);
  assertStepInBounds(completedSteps, true);

  if (step <= completedSteps) {
    // save time calculating stuff
    return true;
  } else {
    return step <= getLastAccessibleStepIndex(completedSteps);
  }
}
