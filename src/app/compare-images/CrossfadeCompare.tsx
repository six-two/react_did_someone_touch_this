import React from "react";
import Slider, { Range } from 'rc-slider';
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
      <div className="overlay-container">
        <img src={this.props.beforeImage} />
        <img className="on-top" src={this.props.afterImage}
          style={{ opacity: this.state.sliderValue / 100 }} />
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
