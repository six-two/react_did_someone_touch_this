import React from 'react';
import Webcam from "react-webcam";
import { connect } from 'react-redux';
import { setBeforeImage } from './redux/actions';
import { State as ReduxState, ImageData } from './redux/store';
import { VIDEO_CONSTRAINTS } from './Main';


interface Props {
  setBeforeImage: (image: ImageData) => void,
}

interface State {
}

class TakeBeforeImageView extends React.Component<Props, State> {
  webcamRef: React.RefObject<any>;

  constructor(props: Props) {
    super(props);
    this.state = {};
    this.webcamRef = React.createRef();
  }

  render() {
    return <Webcam ref={this.webcamRef} className="cam" onClick={this.onClick}
      audio={false} videoConstraints={VIDEO_CONSTRAINTS} />
  }

  onClick = (event: any) => {
    let photo = this.webcamRef.current.getScreenshot();
    this.props.setBeforeImage(photo);
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setBeforeImage: (imageData: ImageData) => dispatch(setBeforeImage(imageData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TakeBeforeImageView);
