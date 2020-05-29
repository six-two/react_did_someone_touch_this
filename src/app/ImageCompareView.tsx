import React from 'react';
import Webcam from "react-webcam";
import { connect } from 'react-redux';
import resemble from 'resemblejs';
import ImageUpload from './ImageUpload';
import { State as ReduxState, ImageState, ImageData } from './redux/store';
import { setDiffImage } from './redux/actions';


interface Props {
  beforeImage: ImageState,
  afterImage: ImageState,
  diffImageData: ImageData,
  setDiffImage: (imageData: ImageData) => void,
}

interface State {
}

class ImageCompareView extends React.Component<Props, State> {
  imageVersion: number;
  resembleControl: any;

  constructor(props: Props) {
    super(props);
    this.imageVersion = -1;
    this.state = {};
  }

  render() {
    this.updateDiffImageIfNeeded();
    // <h2>Before</h2>
    // {renderImageIfExists(this.props.beforeImage.data)}
    // <h2>After</h2>
    // {renderImageIfExists(this.props.afterImage.data)}
    this.resembleControl.repaint();
    return (
      <div className="images">

        <h2>Difference</h2>
        {renderImageIfExists(this.props.diffImageData)}
      </div>
    );
  }

  updateDiffImageIfNeeded() {
    const currentVersion = this.props.afterImage.updateCount + this.props.beforeImage.updateCount;
    if (currentVersion !== this.imageVersion) {
      this.imageVersion = currentVersion;// do not request a repaint
      const after = this.props.afterImage.data;
      const before = this.props.beforeImage.data;
      if (after && before) {
        this.resembleControl = resemble(before)
          .compareTo(after)
          .ignoreColors()
          .onComplete(this.onComplete);
        this.resembleControl.scaleToSameSize();
        this.resembleControl.outputSettings({
          errorType: "movementDifferenceIntensity",
          transparency: 0.5,
        });
        // resembleControl.repaint();
      }
    }
  }

  onComplete = (data: any) => {
    const diffImageData = data.getImageDataUrl();
    this.props.setDiffImage(diffImageData);
  }
}

function renderImageIfExists(imageData: string | null | undefined) {
  if (imageData) {
    return <img src={imageData} />
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    beforeImage: state.beforeImage,
    afterImage: state.afterImage,
    diffImageData: state.diffImage.data,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setDiffImage: (imageData: ImageData) => dispatch(setDiffImage(imageData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageCompareView);
