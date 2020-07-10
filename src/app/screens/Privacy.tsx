import React from 'react';
import * as C from '../redux/constants';
import GoToScreenButton from '../GoToScreenButton';

export default function PrivacyPolicy() {
  return <div className="screen-privacy">
    <h1>Privacy policy</h1>
    <p>TODO ...</p>
    <div>
      <span>If you notice any errors in this document or
      any activity that is not in line with this policy
      please send me an email with your findings to </span>
      <a href="mailto:info@six-two.dev">info@six-two.dev</a>
    </div>
    <GoToScreenButton label="Back" screen={C.SCREEN_MENU} />
  </div>
}
