import React from 'react';
import { connect } from 'react-redux';
import { ReduxState, ImageData } from '../redux/store';
import { goToStep, setBeforeImage, setAfterImage } from '../redux/actions';
import * as C from '../redux/constants';
import { BugMessage } from '../ErrorMessage';
import { StepData } from '../steps/Steps';
import BetweenPhotosView from '../steps/BetweenStep';
import ImageCompareView from '../steps/ImageCompareView';
import GetImageView from '../steps/GetImage';
import StepListView from '../StepListView';


interface Props {
  beforeImageData: ImageData | null,
  afterImageData: ImageData | null,
  step: number,
  overlayBeforeImage: boolean,
  stepList: StepData[],
}

interface State {
}

class StepContentView extends React.Component<Props, State> {
  render() {
    return <div>
      <StepListView />
      <div className="step-content">
        {this.renderContents()}
      </div>
      {this.renderNextButtonIfPossible()}
    </div>
  }

  renderContents() {
    const step = this.props.stepList[this.props.step].name;
    switch (step) {
      case C.STEP_BEFORE_PHOTO:
        return <GetImageView
          onImage={setBeforeImage}
          currentImage={this.props.beforeImageData} />
      case C.STEP_BETWEEN_PHOTOS:
        return <BetweenPhotosView beforeImage={this.props.beforeImageData} />
      case C.STEP_AFTER_PHOTO: {
        const bgImg = (this.props.overlayBeforeImage && this.props.beforeImageData) || undefined;
        return <GetImageView
          onImage={setAfterImage}
          currentImage={this.props.afterImageData}
          backgroundImage={bgImg} />
      }
      case C.STEP_COMPARE:
        return <ImageCompareView />
      default:
        return <BugMessage message={`Unknown step: "${step}"`} />
    }
  }

  renderNextButtonIfPossible() {
    const steps = this.props.stepList;
    const step = steps[this.props.step];
    if (step.canSkip) { // only show on skippable steps
      const nextStep = this.props.step + 1;
      if (nextStep < steps.length) { // do not show on last step
        const goToNextStep = (e: any) => goToStep(nextStep);
        return <button className="button" onClick={goToNextStep}>
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
    stepList: state.steps.list,
  };
};

export default connect(mapStateToProps)(StepContentView);
