import React from 'react';
import DownloadImageButton from '../DownloadImageButton';


interface Props {
  beforeImage: string | null,
}

export default function BetweenStepView(props: Props) {
  if (!props.beforeImage) {
    return <div>Before image not found: please go back to the previous step</div>
  }
  return <div className="step-between">
    <h2>Do your thing</h2>
      Below is the image you have taken. If it is looking ok, you can go and do your stuff.
      <span className="important-hint"> DO NOT close or reload this tab, or the image will be lost! </span>
      When you return go to the next step.
      <br />
      If you want to make sure you don't loose it click the <code>Download image</code> button below.
      If you do not like the image, go back to the previous step and take another image.

      <img src={props.beforeImage} alt="" />

    <DownloadImageButton
      buttonText="Download image"
      fileName={`webcam-image`}
      imageData={props.beforeImage} />
  </div>
}
