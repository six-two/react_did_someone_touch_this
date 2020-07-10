import React from 'react';
import { setScreen } from './redux/actions';

export default function GoToScreenButton(props: Props) {
  return <button
    className="button"
    onClick={(e: any) => setScreen(props.screen)}>
    {props.label}
  </button>
}

interface Props {
  label: string,
  screen: string,
}
