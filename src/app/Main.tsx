import React from 'react';
import { connect } from 'react-redux';
import { ReduxState } from './redux/store';
import InitialScreen from './InitialScreen';
import StepDisplay from './StepDisplay';
import StepContent from './StepContentDisplay';
import '../css/main.scss';

// --------------------------- TODOs -------------------------------
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
  if (props.step === -1) {
    return <div className="app">
      <InitialScreen />
    </div>
  } else {
    return <div className="app">
      <StepDisplay />
      <StepContent />
    </div>
  }
}

interface Props {
  step: number,
}

const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    step: state.steps.current,
  };
};
export default connect(mapStateToProps)(MainView);
