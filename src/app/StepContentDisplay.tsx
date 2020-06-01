import React from 'react';
import { connect } from 'react-redux';
import ImageCompareView from './ImageCompareView';
import InstructionView from './steps/Instructions';
import SettingsView from './SettingsView';
import GetImageView from './GetImage';
import { State as ReduxState, ImageData } from './redux/store';
import { setAfterImage, setBeforeImage, completedCurrentStep } from './redux/actions';
import * as Steps from './steps/Steps';


interface Props {
  setAfterImage: (imageData: ImageData) => void,
  setBeforeImage: (imageData: ImageData) => void,
  completeStep: () => void,
  beforeImageData: ImageData,
  afterImageData: ImageData,
  step: number,
}

interface State {
}

class StepContentView extends React.Component<Props, State> {
  render() {
    return (
      <div className="step-content">
        {this.renderContents()}
      </div>
    );
  }

  renderContents() {
    switch (this.props.step) {
      case Steps.STEP_INTRO:
        return this.renderWithNextButton(<InstructionView />);
      case Steps.STEP_SETTINGS:
        return this.renderWithNextButton(<SettingsView />);
      case Steps.STEP_BEFORE_PHOTO:
        return <GetImageView onImage={this.takeBeforeImage} />
      case Steps.STEP_AFTER_PHOTO:
        return <GetImageView onImage={this.takeAfterImage} backgroundImage={this.props.beforeImageData} />
      case Steps.STEP_COMPARE:
        return <ImageCompareView />
      default:
        return <span>Error: Unknown step</span>
    }
  }

  takeBeforeImage = (image: ImageData) => {
    this.props.setBeforeImage(image);
    this.props.completeStep();
  }

  takeAfterImage = (image: ImageData) => {
    this.props.setAfterImage(image);
    this.props.completeStep();
  }

  renderWithNextButton(component: any) {
    return (<div>
      {component}
      <button className="next-button" onClick={this.props.completeStep}>
        Next step
      </button>
    </div>);
  }
}


const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    beforeImageData: state.images.before.data,
    afterImageData: state.images.after.data,
    step: state.steps.current,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setBeforeImage: (imageData: ImageData) => dispatch(setBeforeImage(imageData)),
    setAfterImage: (imageData: ImageData) => dispatch(setAfterImage(imageData)),
    completeStep: () => dispatch(completedCurrentStep()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepContentView);
