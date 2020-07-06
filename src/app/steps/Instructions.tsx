import React from 'react';

class InstructionsView extends React.Component {
  render() {
    return (
      <div className="instructions">
        <h2>How it works</h2>
        <p>
          This web application lets you detect if someone messed with your stuff. It does this by comparing pictures taken before and after you left it unsupervised.
          Then it highlights any differences it has found.
          (You could also use it to mess with peoples stuff and make sure that you leave it exactly like they left it. But don't do that: it's evil)
        </p>
        <h2>Instructions</h2>
        <ol>
          <li>Read these instructions</li>
          <li>Select the settings you want to use</li>
          <li>Take a image before you leave</li>
          <li>Keep this website open (or download/save the image)</li>
          <li>Take an image after you return. By default the image from before will be superimposed over the camera view to help you find the same angle / distance again</li>
          <li>Check areas with detected changes (marked in pink)</li>
        </ol>
      </div>
    );
  }
}

export default InstructionsView;
