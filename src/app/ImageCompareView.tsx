import React from 'react';
import Webcam from "react-webcam";
import { connect } from 'react-redux';
import { compare } from 'resemblejs';
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
        const options = {
          output: {
            errorType: "movementDifferenceIntensity",
            transparency: 0.7,
            largeImageThreshold: 1500,
            useCrossOrigin: false,
            outputDiff: true
          },
          scaleToSameSize: true,
          ignore: "colors",
        };
        compare(before, after, options, this.resembleCallback);
      }
    }
  }

  resembleCallback = (error: any, data: any) => {
    if (error) {
      console.error("An error occured while comparing the images: ", error);
    } else {
      const diffImageData: string = data.getImageDataUrl();
      this.props.setDiffImage(diffImageData);
    }
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
