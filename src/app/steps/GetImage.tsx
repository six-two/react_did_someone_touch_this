import React from 'react';
import store, { ImageData } from '../redux/store';
import { SOURCE_WEBCAM, SOURCE_FILE } from '../redux/constants';
import TakeImageView from '../TakeImageView';
import ImageUpload from '../ImageUpload';
import { BugMessage } from '../ErrorMessage';
import DownloadImageButton from '../DownloadImageButton';

const CLASS_NAME = "step-get-image";

interface Props {
  currentImage: string | null,
  onImage: (image: ImageData) => void,
  backgroundImage?: ImageData,
}

function GetImageView(props: Props) {
  const imageSource = store.getState().settings.imageSource;
  switch (imageSource) {
    case SOURCE_WEBCAM:
      return TakePhotoView(props);
    case SOURCE_FILE:
      return UploadImageView(props);
    default:
      return <BugMessage message={`Unknown image source: "${imageSource}"`} />
  }
}

function TakePhotoView(props: Props) {
  return <div className={CLASS_NAME}>
    <h2>Take a photo</h2>
    <div className="instructions">
      First allow this website access to your camera. Then touch/click the image below to take a photo.
    </div>
    <TakeImageView
      onPhoto={props.onImage}
      backgroundImage={props.backgroundImage} />

    <DownloadImageButton
      buttonText="Download last image taken"
      fileName={`webcam-image`}
      imageData={props.currentImage} />
  </div>
}

function UploadImageView(props: Props) {
  return <div className={CLASS_NAME}>
    <h2>Select an image</h2>
    <ImageUpload
      image={props.currentImage}
      setImage={props.onImage} />
  </div>
}

export default GetImageView;
