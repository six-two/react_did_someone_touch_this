import React from 'react';
import StepDisplay from './StepDisplay';
import StepContent from './StepContentDisplay';
import { ErrorMessage } from './ErrorMessage';
import '../css/main.scss';

// --------------------------- TODOs -------------------------------
// Check file upload to verify it is a valid image
// improve instructions
// why is it so slow on my smartphone? are 3 ~20MB pictures so hard to handle? :p
// Make it look ok on a smartphone (steps top to bottom)
// [opt] add settings persistence: local storage, url?
//  -> maybe add an url parameter + chooser pattern so it can be saved
// [opt] More / custom resolutions?
// -----------------------------------------------------------------

export default function MainView() {
  return <div>
    <ErrorMessage
      message="This website is still in development and may be buggy"
      log={false} />
    <div className="app-contents">
      <StepDisplay />
      <StepContent />
    </div>
  </div>
}
