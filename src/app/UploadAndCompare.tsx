import React from 'react';
import Webcam from "react-webcam";
import { connect } from 'react-redux';
import resemble from 'resemblejs';
import ImageUpload from './ImageUpload';
import { State as ReduxState, ImageState } from './redux/store';


interface Props {
  beforeImage: ImageState,
  afterImage: ImageState,
}

interface State {
  imageVersion: number,
  diffImage?: string,
}

class UploadAndCompareView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { imageVersion: -1 };
  }

  render() {
    this.updateDiffImageIfNeeded();
    return (
      <div className="images">
        <h2>Before</h2>
        {renderImageIfExists(this.props.beforeImage.data)}
        <h2>After</h2>
        {renderImageIfExists(this.props.afterImage.data)}
        <h2>Difference</h2>
        {renderImageIfExists(this.state.diffImage)}
      </div>
    );
  }

  updateDiffImageIfNeeded() {
    const currentVersion = this.props.afterImage.updateCount + this.props.beforeImage.updateCount;
    if (currentVersion !== this.state.imageVersion) {
      this.setState({ imageVersion: currentVersion });
      const after = this.props.afterImage.data;
      const before = this.props.beforeImage.data;
      if (after && before) {
        let resembleControl: any = resemble(before)
          .compareTo(after)
          .onComplete(this.onComplete);
        resembleControl.ignoreColors();
      }
    }
  }

  onComplete = (data: any) => {
    this.setState({ diffImage: data.getImageDataUrl() });
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
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadAndCompareView);
