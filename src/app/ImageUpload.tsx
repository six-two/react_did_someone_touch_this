import React from 'react';

interface Props {
  setImage: (imageDataUrl: string) => void,
}

interface State {
}

class ImageUrlUploader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="image-upload">
        <div>Upload your image</div>
        <input type='file' onChange={this.onChange} />
      </div>
    );
  }

  onChange = (e: any) => {
    const files = e.target.files;
    if (files && files[0]) {
      var fileReader = new FileReader();
      fileReader.onload = this.onFileUploaded;
      fileReader.readAsDataURL(files[0]);
    }
  }

  onFileUploaded = (event: any) => {
    this.props.setImage(event.target.result);
  }
}

export default ImageUrlUploader;
