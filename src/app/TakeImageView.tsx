import React from 'react';
import Webcam from "react-webcam";
import store, { ImageData } from './redux/store';

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
    const screenshotFormat = store.getState().settings.screenshotFormat;
    const resolution = store.getState().settings.preferredResolution;
    const VIDEO_CONSTRAINTS = {
      facingMode: { ideal: "environment" },
      width: { ideal: resolution.width },
      height: { ideal: resolution.height },
    };

    return (
      <div className={className}>
        <Webcam ref={this.webcamRef} className="cam" onClick={this.onClick}
          audio={false} videoConstraints={VIDEO_CONSTRAINTS}
          forceScreenshotSourceSize={true}
          screenshotFormat={`image/${screenshotFormat}` as any} />
        {bgImg ? <img src={bgImg} alt="" onClick={this.onClick} /> : null}
      </div>
    );
  }

  onClick = (event: any) => {
    let photo = this.webcamRef.current.getScreenshot();
    if (photo) {
      this.props.onPhoto(photo);
    }
  }
}

export default TakeImageView;
