import React from 'react';
import StepDisplay from './StepDisplay';
import StepContent from './StepContentDisplay';
import '../css/main.scss';

// --------------------------- TODOs -------------------------------
// improve instructions
// why is it so slow on my smartphone? are 3 ~20MB pictures so hard to handle? :p
// Make it look ok on a smartphone
// [opt] add settings persistence: local storage, url?
//  -> maybe add an url parameter + chooser pattern so it can be saved
// make a error message component
// [opt] More / custom resolutions?
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
