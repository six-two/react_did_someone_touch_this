import React from 'react';
import Webcam from "react-webcam";
import { ImageData } from './redux/store';

const VIDEO_CONSTRAINTS = {//TODO request best res
  facingMode: { ideal: "environment" }
}

interface Props {
  backgroundImage?: ImageData,
  onPhoto: (image: ImageData) => void,
}

class TakeImageView extends React.Component<Props> {
  webcamRef: React.RefObject<any>;

  constructor(props: Props) {
    super(props);
    this.webcamRef = React.createRef();
  }

  render() {
    const bgImg = this.props.backgroundImage;
    const className = "take-image-div" + (bgImg ? " transparent-cam" : "");
    return (
      <div className={className}>
        <Webcam ref={this.webcamRef} className="cam" onClick={this.onClick}
          audio={false} videoConstraints={VIDEO_CONSTRAINTS}
          forceScreenshotSourceSize={true} />
        {bgImg ? <img src={bgImg} alt="" onClick={this.onClick} /> : null}
      </div>
    );
  }

  onClick = (event: any) => {
    let photo = this.webcamRef.current.getScreenshot();
    this.props.onPhoto(photo);
  }
}

export default TakeImageView;
