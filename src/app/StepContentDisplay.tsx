import React from 'react';
import { connect } from 'react-redux';
import ImageCompareView from './ImageCompareView';
import InstructionView from './steps/Instructions';
import SettingsView from './SettingsView';
import GetImageView from './GetImage';
import BetweenPhotosView from './steps/BetweenStep';
import { State as ReduxState, ImageData } from './redux/store';
import { goToStep, setBeforeImage, setAfterImage } from './redux/actions';
import * as Steps from './steps/Steps';
import { BugMessage } from './ErrorMessage';


interface Props {
  beforeImageData: ImageData | null,
  afterImageData: ImageData | null,
  step: number,
  overlayBeforeImage: boolean,
}

interface State {
}

class StepContentView extends React.Component<Props, State> {
  render() {
    return (
      <div className="step-content">
        {this.renderContents()}
        {this.renderNextButtonIfPossible()}
      </div>
    );
  }

  renderContents() {
    switch (this.props.step) {
      case Steps.STEP_INTRO:
        return <InstructionView />;
      case Steps.STEP_SETTINGS:
        return <SettingsView />;
      case Steps.STEP_BEFORE_PHOTO:
        return <GetImageView
          onImage={setBeforeImage}
          currentImage={this.props.beforeImageData} />
      case Steps.STEP_BETWEEN_PHOTOS:
        return <BetweenPhotosView beforeImage={this.props.beforeImageData} />
      case Steps.STEP_AFTER_PHOTO: {
        const bgImg = (this.props.overlayBeforeImage && this.props.beforeImageData) || undefined;
        return <GetImageView
          onImage={setAfterImage}
          currentImage={this.props.afterImageData}
          backgroundImage={bgImg} />
      }
      case Steps.STEP_COMPARE:
        return <ImageCompareView />
      default:
        return <BugMessage message={`Unknown step: "${this.props.step}"`} />
    }
  }

  renderNextButtonIfPossible() {
    const step = Steps.STEPS[this.props.step];
    if (step.canSkip) { // only show on skippable steps
      const nextStep = this.props.step + 1;
      if (nextStep < Steps.STEPS.length) { // do not show on last step
        const goToNextStep = (e: any) => goToStep(nextStep);
        return <button className="next-button" onClick={goToNextStep}>
          {"Next step"}
        </button>
      }
    }
    return null;
  }
}


const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    beforeImageData: state.images.before.data,
    afterImageData: state.images.after.data,
    overlayBeforeImage: state.settings.overlayBeforeImage,
    step: state.steps.current,
  };
};

export default connect(mapStateToProps)(StepContentView);
