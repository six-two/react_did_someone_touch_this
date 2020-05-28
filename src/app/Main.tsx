import React from 'react';
import Webcam from "react-webcam";
import { connect } from 'react-redux';
import '../css/main.css';
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
  setAfterImage: (imageData: ImageData) => void;
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
    // {this.state.running ?
    //   <Webcam className="cam" audio={false} videoConstraints={videoConstraints} />
    //   : <span className="no-cam">Video is paused</span>}
    // <div>
    //   <button onClick={this.toggle_running}>Start/Stop</button>
    // </div>
    return (
      <div className="root">
        <ImageTaker setImage={this.props.setAfterImage} />
        <UploadAndCompare />
      </div>
    );
  }
}


const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setAfterImage: (imageData: ImageData) => dispatch(setAfterImage(imageData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
