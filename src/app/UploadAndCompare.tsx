import React from 'react';
import Webcam from "react-webcam";
import '../css/main.css';
import ImageUpload from './ImageUpload';
import resemble from 'resemblejs';

interface Props {
}

interface State {
  beforeImage?: string,
  afterImage?: string,
  diffImage?: string,
}

class UploadAndCompareView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="images">
        <h2>Before</h2>
        <ImageUpload onImageUpload={this.setBeforeImage} />
        {this.state.beforeImage ? <img src={this.state.beforeImage} /> : null}
        <h2>After</h2>
        <ImageUpload onImageUpload={this.setAfterImage} />
        {this.state.afterImage ? <img src={this.state.afterImage} /> : null}
        <h2>Difference</h2>
        {this.state.diffImage ? <img src={this.state.diffImage} /> : null}
      </div>
    );
  }

  setBeforeImage = (imageUrl: string) => {
    this.updateImage({ beforeImage: imageUrl });
  }

  setAfterImage = (imageUrl: string) => {
    this.updateImage({ afterImage: imageUrl });
  }

  updateImage(change: any) {
    this.setState(change);
    if (this.state.beforeImage && this.state.afterImage) {
      let resembleControl: any = resemble(this.state.beforeImage)
        .compareTo(this.state.afterImage)
        .onComplete(this.onComplete);
      resembleControl.ignoreColors();
    }
  }

  onComplete = (data: any) => {
    this.setState({ diffImage: data.getImageDataUrl() });
  }
}

export default UploadAndCompareView;
