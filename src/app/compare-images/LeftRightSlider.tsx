import React from 'react';
import ReactCompareImage from 'react-compare-image';

export default function LeftRightSlider(props: Props) {
  return <div className="image-diff left-right-slider">
    <div className="instructions">
      Move the slider around to compare the images.
    </div>
    <ReactCompareImage
      leftImage={props.beforeImage}
      leftImageLabel="Before"
      rightImage={props.afterImage}
      rightImageLabel="After"
      sliderLineColor="red"
      handle={<React.Fragment />}
    />
  </div>
}

interface Props {
  beforeImage: string,
  afterImage: string,
}
