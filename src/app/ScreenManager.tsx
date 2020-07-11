import React from 'react';
import { connect } from 'react-redux';
import { ReduxState } from './redux/store';
import * as C from './redux/constants';
import MainMenu from './screens/MainMenu';
import Instructions from './screens/Instructions';
import Settings from './screens/Settings';
import Privacy from './screens/Privacy';
import StepContent from './screens/Steps';
import { BugMessage } from './ErrorMessage';


function ScreenManager(props: Props) {
  switch (props.screen) {
    case C.SCREEN_MENU:
      return <MainMenu />
    case C.SCREEN_STEPS:
      return <StepContent />
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
export default connect(mapStateToProps)(ScreenManager);
