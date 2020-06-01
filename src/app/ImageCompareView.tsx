import React from 'react';
import { connect } from 'react-redux';
import { compare } from 'resemblejs';
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

    if (!this.props.diffImageData){
      return <span className="err-msg">Internal error: can not compare images</span>
    }

    return (
      <div className="diff-view">
        <h2>Comparison</h2>
        All changes that were detected are marked in pink.
        <img src={this.props.diffImageData} alt="Differences between the before and after pictures" />
        <a className="download-button" href={this.props.diffImageData} download="did_someone_touch_this.png" >
          Download image
        </a>
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

const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    beforeImage: state.images.before,
    afterImage: state.images.after,
    diffImageData: state.images.diff.data,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setDiffImage: (imageData: ImageData) => dispatch(setDiffImage(imageData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageCompareView);
