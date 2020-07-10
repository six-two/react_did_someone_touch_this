import React from 'react';
import { goToStep } from './redux/actions';
import * as S from './steps/Steps';

export default function InitialScreen() {
  return <div>
    <GoToStepButton label="Start" step={S.STEP_BEFORE_PHOTO} />
    <GoToStepButton label="Settings" step={S.STEP_SETTINGS} />
    <GoToStepButton label="How it works" step={S.STEP_INTRO} />
  </div>
}

function GoToStepButton(props: Props) {
  return <button
    className="button"
    onClick={(e: any) => goToStep(props.step)}>
    {props.label}
  </button>
}

interface Props {
  label: string,
  step: number,
}
