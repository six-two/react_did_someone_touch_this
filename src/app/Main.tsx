import React from 'react';
import Webcam from "react-webcam";
import '../css/main.css';
import UploadAndCompare from './UploadAndCompare';

//TODO figure out if i should use restaints
// maybe add an url parameter + chooser pattern so it can be safed
// install sass

//How to store image to compare? local storage, down- and upload
// -> up/down: +better_quality +easier_to_test

const videoConstraints = {//TODO request best res
  facingMode: { ideal: "environment" }
}

interface Props {
}

interface State {
  running: boolean,
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { running: false }
  }

  toggle_running = () => {
    this.setState({ running: !this.state.running });
  }

  render() {
    // {this.state.running ?
    //   <Webcam className="cam" audio={false} videoConstraints={videoConstraints} />
    //   : <span className="no-cam">Video is paused</span>}
    // <div>
    //   <button onClick={this.toggle_running}>Start/Stop</button>
    // </div>
    return (
      <div className="root">
        <UploadAndCompare />
      </div>
    );
  }
}

export default App;
