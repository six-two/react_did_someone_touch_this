import React from 'react';
import { completedCurrentStep } from '../redux/actions';
import DownloadImageButton from '../DownloadImageButton';


interface Props {
  beforeImage: string | null,
}

class GetImageView extends React.Component<Props> {
  render() {
    if (!this.props.beforeImage) {
      return <div>Before image not found: please go back to the previous step</div>
    }
    return <div>
      <h2>Do your thing</h2>
      Below is the image you have taken. If it is looking ok, you can go and do your stuff.
      <span className="important-hint">DO NOT close or reload this tab, or the image will be lost!</span>
      When you return go to the next step.
      <br />
      If you want to make sure you don't loose it click the <code>Download image</code> button below.
      If you do not like the image, go back to the previous step and take another image.

      <img src={this.props.beforeImage} alt="" />

      <div className="buttons">
        <DownloadImageButton
          buttonText="Download image"
          fileName={`webcam-image`}
          imageData={this.props.beforeImage} />
        <button className="next-button" onClick={(e: any) => completedCurrentStep()}>
          Next step
        </button>
      </div>
    </div>
  }
}

export default GetImageView;
