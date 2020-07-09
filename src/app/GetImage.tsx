import React from 'react';
import store, { ImageData } from './redux/store';
import { SOURCE_WEBCAM, SOURCE_FILE } from './redux/constants';
import TakeImageView from './TakeImageView';
import ImageUpload from './ImageUpload';
import DownloadImageButton from './DownloadImageButton';


interface Props {
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
    const imageSource = store.getState().settings.imageSource;
    switch (imageSource) {
      case SOURCE_WEBCAM:
        return <div>
          <h2>Take a photo</h2>
          Allow camera access and touch/click the image below.
          <TakeImageView onPhoto={this.props.onImage} backgroundImage={this.props.backgroundImage} />

          <DownloadImageButton
            buttonText="Download last image taken"
            fileName={`webcam-image`}
            imageData={this.props.currentImage} />
        </div>
      case SOURCE_FILE:
        return <div>
          <h2>Upload an image</h2>
          <ImageUpload setImage={this.props.onImage} />
        </div>
      default:
        throw new Error(`Unknown image source: "${imageSource}"`);
    };
  }
}

export default GetImageView;
