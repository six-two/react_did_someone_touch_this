import React from 'react';
import * as C from '../redux/constants';
import GoToScreenButton from '../GoToScreenButton';

export default function Instructions() {
  return <div className="screen-instructions">
    <h2>How it works</h2>
    <p>
      This web application lets you detect if someone messed with your stuff.
      It does this by comparing pictures taken before and after you left it unsupervised.
      Then it highlights any differences it has found.
      (You could also use it to mess with peoples stuff and make sure that you leave it exactly like they left it. But don't do that: it's evil)
        </p>
    <h2>Instructions</h2>
    <ol>
      <li>(Optional) Select the settings you want to use</li>
      <li>Take a image before you leave</li>
      <li>Keep this website open (or download/save the image)</li>
      <li>Take an image after you return. By default the image from before will be superimposed over the camera view to help you find the same angle / distance again</li>
      <li>Compare the two images using the different comparison tools</li>
    </ol>
    <GoToScreenButton label="Back" screen={C.SCREEN_MENU} />
  </div>
}
