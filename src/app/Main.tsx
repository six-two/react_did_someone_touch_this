import React from 'react';
import StepDisplay from './StepDisplay';
import StepContent from './StepContentDisplay';
import '../css/main.scss';

// --------------------------- TODOs -------------------------------
// add screen inbetween before and after that turns the camera off
// let user choose webcam resolution
// improve instructions
// why is it so slow on my smartphone? are 3 ~20MB pictures so hard to handle? :p
// Make it look ok on a smartphone
// [opt] add settings persistence: local storage, url?
//  -> maybe add an url parameter + chooser pattern so it can be saved
// [opt] find out how to use key events?
// -----------------------------------------------------------------

class MainView extends React.Component {
  render() {
    return (
      <div>
        <div className="err-msg">
          This website is still in early development.
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
