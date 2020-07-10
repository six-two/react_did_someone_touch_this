import React from 'react';
import { connect } from 'react-redux';
import { ReduxState } from './redux/store';
import * as C from './redux/constants';
import MainMenu from './screens/MainMenu';
import Instructions from './screens/Instructions';
import Settings from './screens/Settings';
import Privacy from './screens/Privacy';
import StepDisplay from './StepDisplay';
import StepContent from './StepContentDisplay';
import { BugMessage } from './ErrorMessage';
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

function MainView(props: Props) {
  return <div className="app">
    <ScreenManager screen={props.screen} />
  </div>
}

function ScreenManager(props: Props) {
  switch (props.screen) {
    case C.SCREEN_MENU:
      return <MainMenu />
    case C.SCREEN_STEPS:
      return <div>
        <StepDisplay />
        <StepContent />
      </div>
    case C.SCREEN_SETTINGS:
      return <Settings />
    case C.SCREEN_HOW_IT_WORKS:
      return <Instructions />
    case C.SCREEN_PRIVACY:
      return <Privacy />
    default:
      return <BugMessage message={`Unknown screen: "${props.screen}"`} />
  }
}

interface Props {
  screen: string,
}

const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    screen: state.screen,
  };
};
export default connect(mapStateToProps)(MainView);
