import React from 'react';
import Webcam from "react-webcam";
import { connect } from 'react-redux';
import '../css/main.scss';
import UploadAndCompare from './UploadAndCompare';
import ImageTaker from './ImageTaker';
import { State as ReduxState, ImageData } from './redux/store';
import { setAfterImage, setBeforeImage } from './redux/actions';

//TODO figure out if i should use restaints
// maybe add an url parameter + chooser pattern so it can be safed
// install sass

//How to store image to compare? local storage, down- and upload
// -> up/down: +better_quality +easier_to_test

export const VIDEO_CONSTRAINTS = {//TODO request best res
  facingMode: { ideal: "environment" }
}

interface Props {
  setAfterImage: (imageData: ImageData) => void,
  setBeforeImage: (imageData: ImageData) => void,
  beforeImageData: ImageData,
}

interface State {
  running: boolean,
}

class MainView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { running: false }
  }

  toggle_running = () => {
    this.setState({ running: !this.state.running });
  }

  render() {
    return (
      <div className="root">
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
      return <ImageTaker setImage={this.props.setBeforeImage} />
    }
    return (
      <div>
        <div className="cam-overlay">
          <img src={this.props.beforeImageData} />
          <ImageTaker setImage={this.props.setAfterImage} />
        </div>
        <UploadAndCompare />
      </div>
    );
  }
}


const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    beforeImageData: state.beforeImage.data,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setBeforeImage: (imageData: ImageData) => dispatch(setBeforeImage(imageData)),
    setAfterImage: (imageData: ImageData) => dispatch(setAfterImage(imageData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
