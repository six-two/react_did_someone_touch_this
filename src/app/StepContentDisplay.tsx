import React from 'react';
import { connect } from 'react-redux';
import ImageCompareView from './ImageCompareView';
import InstructionView from './steps/Instructions';
import SettingsView from './SettingsView';
import GetImageView from './GetImage';
import BetweenPhotosView from './steps/BetweenStep';
import { State as ReduxState, ImageData } from './redux/store';
import { completedCurrentStep, setBeforeImage, setAfterImage } from './redux/actions';
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
        return <GetImageView
          onImage={setBeforeImage}
          currentImage={this.props.beforeImageData} />
      case Steps.STEP_BETWEEN_PHOTOS:
        return this.renderWithNextButton(<BetweenPhotosView beforeImage={this.props.beforeImageData} />)
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

  renderWithNextButton(component: any) {
    return (<div>
      {component}
      <button className="next-button" onClick={(e: any) => completedCurrentStep()}>
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
    overlayBeforeImage: state.settings.overlayBeforeImage,
    step: state.steps.current,
  };
};

export default connect(mapStateToProps)(StepContentView);
