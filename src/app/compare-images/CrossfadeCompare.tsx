import React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const MySlider = Slider as any;

export default class CrossfadeCompare extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      sliderValue: 50,
    };
  }

  render() {
    return <div className="img-diff crossfade">
      <div className="instructions">
        Move the slider around to compare the images.
      </div>
      <div className="slider-div">
        <span>Before</span>
        <MySlider
          min={0}
          max={100}
          value={this.state.sliderValue}
          onChange={this.onOpacityChange}
        />
        <span>After</span>
      </div>
      <div className="overlay-container">
        <img src={this.props.beforeImage} alt="" />
        <img className="on-top" src={this.props.afterImage} alt=""
          style={{ opacity: this.state.sliderValue / 100 }} />
      </div>
    </div>
  }

  onOpacityChange = (value: number) => {
    if (value !== this.state.sliderValue) {
      this.setState({ sliderValue: value })
    }
  }
}

interface Props {
  beforeImage: string,
  afterImage: string,
}

interface State {
  sliderValue: number,
}
