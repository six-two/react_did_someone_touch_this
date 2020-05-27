import React from 'react';

interface Props {
  onImageUpload: (url: string) => void,
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
        <input type='file' onChange={this.onChange} />
      </div>
    );
  }

  onChange = (e: any) => {
    const files = e.target.files;
    if (files && files[0]) {
      var fileReader = new FileReader();
      fileReader.onload = this.changeState;
      fileReader.readAsDataURL(files[0]);
    }
  }

  changeState = (event: any) => {
    this.props.onImageUpload(event.target.result);
  }
}

export default ImageUrlUploader;
