import React from 'react';
import { compare } from 'resemblejs';
import { ImageData } from '../redux/store';
import DownloadImageButton from '../DownloadImageButton';


interface Props {
  beforeImage: ImageData,
  afterImage: ImageData,
}

interface State {
  diffImage: ImageData | null,
  errorMessage: string | null,
}

export default class AutomaticCompare extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      diffImage: null,
      errorMessage: null,
    };
  }

  render() {
    if (this.state.errorMessage) {
      return <div>{this.state.errorMessage}</div>
    }

    if (this.state.diffImage) {
      return <div className="diff-view">
        <img src={this.state.diffImage} alt="Differences between the before and after pictures" />
        <DownloadImageButton
          buttonText="Download comparison image"
          fileName="before-after-compare.png"
          imageData={this.state.diffImage} />
      </div>
    } else {
      this.calculateDiffImage();
      return <div>Comparing images...</div>
    }
  }

  calculateDiffImage() {
    const after = this.props.afterImage;
    const before = this.props.beforeImage;
    if (after && before) {
      const options = {
        output: {
          errorType: "movementDifferenceIntensity",
          // transparency: 0.7, // this makes the downloaded image transparent
          largeImageThreshold: 1500,
          useCrossOrigin: false,
          outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "colors",
      };
      compare(before, after, options, this.resembleCallback);
    } else {
      this.setState({
        errorMessage: "Before or after image is empty or undefined",
      });
    }
  }

  resembleCallback = (error: any, data: any) => {
    if (error) {
      console.error("An error occured while comparing the images: ", error);
      this.setState({
        errorMessage: `An error occured while comparing the images: ${error}`
      });
    } else {
      const imageData: string = data.getImageDataUrl();
      this.setState({
        diffImage: imageData
      });
    }
  }
}
