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
      <input className="image-upload" type='file' onChange={this.onChange} />
    );
  }

  onChange = (e: any) => {
    const files = e.target.files;
    if (files && files[0]) {
      var fileReader = new FileReader();
      fileReader.onload = this.onFileUploaded;
      fileReader.readAsDataURL(files[0]);
    }
    e.target.value = null;//clear the input; SEE https://stackoverflow.com/questions/42192346/how-to-reset-reactjs-file-input
  }

  onFileUploaded = (event: any) => {
    this.props.setImage(event.target.result);
  }
}

export default ImageUrlUploader;
