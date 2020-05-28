import React from 'react';
import Webcam from "react-webcam";
import { connect } from 'react-redux';
import { setAfterImage } from './redux/actions';
import { State as ReduxState, ImageData } from './redux/store';
import { VIDEO_CONSTRAINTS } from './Main';


interface Props {
  setImage: (image: ImageData) => void,
}

interface State {
}

class ImageTaker extends React.Component<Props, State> {
  webcamRef: React.RefObject<any>;

  constructor(props: Props) {
    super(props);
    this.state = {};
    this.webcamRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Webcam ref={this.webcamRef} className="cam" audio={false} videoConstraints={VIDEO_CONSTRAINTS} />
        <button onClick={this.onClick}>Take photo</button>
      </div>
    );
  }

  onClick = (event: any) => {
    let photo = this.webcamRef.current.getScreenshot();
    this.props.setImage(photo);
  }
}
const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    image: state.afterImage,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    // setImage: (imageData: ImageData) => dispatch(setAfterImage(imageData)),
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(ImageTaker);
 export default ImageTaker;
