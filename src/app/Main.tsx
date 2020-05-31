import React from 'react';
import StepDisplay from './StepDisplay';
import StepContent from './StepContentDisplay';
import '../css/main.scss';

//TODO figure out if i should use restaints
// add settings
// add manual comarison: fadein/out, slide left/right, side by side
// add settings persistence: local storage, url?
// add downloading of photos
// maybe add an url parameter + chooser pattern so it can be safed
// [opt] find out how to use key events?

class MainView extends React.Component {
  render() {
    return (
      <div>
        <div className="err-msg">
          This website is still in pre alpha state. It is likely instable, buggy, ugly and might get broken from time to time.
        </div>
        <div className="app-contents">
          <StepDisplay />
          <StepContent />
        </div>
      </div>
    );
  }
}

export default MainView;
