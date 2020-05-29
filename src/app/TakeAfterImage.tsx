import React from 'react';
import Webcam from "react-webcam";
import { connect } from 'react-redux';
import { setAfterImage } from './redux/actions';
import { State as ReduxState, ImageData } from './redux/store';
import { VIDEO_CONSTRAINTS } from './Main';


interface Props {
  beforeImageData: ImageData,
  setAfterImage: (image: ImageData) => void,
}

interface State {
}

class TakeAfterImageView extends React.Component<Props, State> {
  webcamRef: React.RefObject<any>;

  constructor(props: Props) {
    super(props);
    this.state = {};
    this.webcamRef = React.createRef();
  }

  render() {
    return (
      <div className="cam-overlay">
        <img src={this.props.beforeImageData} />
        <Webcam ref={this.webcamRef} className="cam" onClick={this.onClick}
          audio={false} videoConstraints={VIDEO_CONSTRAINTS} />
      </div>
    );
  }

  onClick = (event: any) => {
    let photo = this.webcamRef.current.getScreenshot();
    this.props.setAfterImage(photo);
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
    setAfterImage: (imageData: ImageData) => dispatch(setAfterImage(imageData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TakeAfterImageView);
