import React from 'react';
import * as C from '../redux/constants';
import GoToScreenButton from '../GoToScreenButton';

export default function MainMenu() {
  return <div className="screen-menu">
    <GoToScreenButton label="Start" screen={C.SCREEN_STEPS} />
    <GoToScreenButton label="Settings" screen={C.SCREEN_SETTINGS} />
    <GoToScreenButton label="How it works" screen={C.SCREEN_HOW_IT_WORKS} />
    <GoToScreenButton label="Privacy policy" screen={C.SCREEN_PRIVACY} />
  </div>
}
