import React from 'react';
import ScreenManager from './ScreenManager';
import '../css/main.scss';

// --------------------------- TODOs -------------------------------
// Remove between step when using local files
// Show preview of local image files
// Check file upload to verify it is a valid image
// improve instructions
// why is it so slow on my smartphone? are 3 ~20MB pictures so hard to handle? :p
// [WIP] Make it look ok on a smartphone
// [opt] add settings persistence: local storage, url?
//  -> maybe add an url parameter + chooser pattern so it can be saved
// [opt] More / custom resolutions?
// [opt] Better automatic comparison
// -----------------------------------------------------------------

export default function App() {
  return <div className="app">
    <ScreenManager />
  </div>
}
