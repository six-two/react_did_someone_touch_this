import React from 'react';
import { connect } from 'react-redux';
import store, { State as ReduxState, ImageData } from './redux/store';
import { SOURCE_WEBCAM, SOURCE_FILE } from './redux/constants';
import TakeImageView from './TakeImageView';
import ImageUpload from './ImageUpload';
import DownloadImageButton from './DownloadImageButton';


interface Props {
  imageSource: string,
  currentImage: string | null,
  onImage: (image: ImageData) => void,
  backgroundImage?: ImageData,
}

class GetImageView extends React.Component<Props> {
  render() {
    return (
      <div className="get-image">
        {this.renderContents()}
      </div>
    );
  }

  renderContents() {
    switch (this.props.imageSource) {
      case SOURCE_WEBCAM:
        return <div>
          <h2>Take a photo</h2>
          Allow camera access and touch/click the image below.
          <TakeImageView onPhoto={this.props.onImage} backgroundImage={this.props.backgroundImage} />

          {this.renderDownloadButton()}
        </div>
      case SOURCE_FILE:
        return <div>
          <h2>Upload an image</h2>
          <ImageUpload setImage={this.props.onImage} />
        </div>
      default:
        throw new Error(`Unknown image source: "${this.props.imageSource}"`);
    };
  }

  renderDownloadButton() {
    if (this.props.currentImage) {
      let screenshotFormat = store.getState().settings.screenshotFormat;
      return <DownloadImageButton
        buttonText="Download last image taken"
        fileName={`webcam-image.${screenshotFormat}`}
        imageData={this.props.currentImage} />
    }
  }
}


const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    imageSource: state.settings.imageSource,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetImageView);
