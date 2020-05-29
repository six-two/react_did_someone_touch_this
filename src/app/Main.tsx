import React from 'react';
import { connect } from 'react-redux';
import '../css/main.scss';
import ImageCompareView from './ImageCompareView';
import TakeImageView from './TakeImageView';
import InstructionView from './steps/Instructions';
import { State as ReduxState, ImageData } from './redux/store';
import { setAfterImage, setBeforeImage } from './redux/actions';

//TODO figure out if i should use restaints
// add instructions
// add steps and switching between them
// add settings
// add manual comarison: fadein/out, slide left/right, side by side
// add settings persistence: local storage, url?
// add downloading of photos
// maybe add an url parameter + chooser pattern so it can be safed
// [opt] find out how to use key events?


export const VIDEO_CONSTRAINTS = {//TODO request best res
  facingMode: { ideal: "environment" }
}

interface Props {
  setAfterImage: (imageData: ImageData) => void,
  setBeforeImage: (imageData: ImageData) => void,
  beforeImageData: ImageData,
  afterImageData: ImageData,
}

interface State {
}

class MainView extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <span className="err-msg">
          This website is still in pre alpha state. It is likely instable, buggy, ugly and might get broken from time to time.
        </span>
        <div className="app-contents">
          {this.renderContents()}
        </div>
      </div>
    );
  }

  renderContents() {
    if (!this.props.beforeImageData) {
      return <div>
        <InstructionView />
        <TakeImageView onPhoto={this.props.setBeforeImage} />
      </div>
    }
    if (!this.props.afterImageData) {
      return <TakeImageView onPhoto={this.props.setAfterImage} backgroundImage={this.props.beforeImageData} />
    }
    return <ImageCompareView />
  }
}


const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    beforeImageData: state.beforeImage.data,
    afterImageData: state.afterImage.data,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setBeforeImage: (imageData: ImageData) => dispatch(setBeforeImage(imageData)),
    setAfterImage: (imageData: ImageData) => dispatch(setAfterImage(imageData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
