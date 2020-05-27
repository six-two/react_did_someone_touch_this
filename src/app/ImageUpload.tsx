import React from 'react';
import Webcam from "react-webcam";
import '../css/main.css';

interface Props {
}

interface State {
  image: any,
}

class View extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { image: null };
  }

  render() {
    return (
      <div className="image-upload">
        {this.state.image ? <img src={this.state.image.src} /> : <span>No image uploaded</span>}
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
    this.setState({ image: {src: event.target.result }});
  }
}

export default View;
