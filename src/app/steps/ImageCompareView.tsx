import React from 'react';
import { connect } from 'react-redux';
import { ReduxState, ImageData } from '../redux/store';
import { setComparisonType } from '../redux/actions';
import * as C from '../redux/constants';
import AutomaticCompare from '../compare-images/AutomaticCompare';
import LeftRightSlider from '../compare-images/LeftRightSlider';
import CrossfadeCompare from '../compare-images/CrossfadeCompare';
import Dropdown from '../Dropdown';
import { BugMessage } from '../ErrorMessage';

const TYPES = new Map<string, string>();
TYPES.set(C.COMPARE_AUTOMATIC, "Automatic");
TYPES.set(C.COMPARE_SLIDER_RIGHT_LEFT, "Slider: Right - Left");
TYPES.set(C.COMPARE_CROSSFADE, "Crossfade");
// TYPES.set(C.COMPARE_SIDE_BY_SIDE, "Side by side");


interface Props {
  beforeImage: ImageData | null,
  afterImage: ImageData | null,
  type: string,
}

class ImageCompareView extends React.Component<Props> {
  render() {
    return <div className="diff-view">
      <div className="type-chooser">
        <span>Comparison method: </span>
        <Dropdown
          optionMap={TYPES}
          value={this.props.type}
          onValueChange={(x) => setComparisonType(x)} />
      </div>
      {this.renderContents()}
    </div>
  }

  renderContents() {
    const before = this.props.beforeImage;
    if (!before) {
      return <BugMessage message="Before image is missing" />
    }
    const after = this.props.afterImage;
    if (!after) {
      return <BugMessage message="After image is missing" />
    }
    switch (this.props.type) {
      case C.COMPARE_AUTOMATIC:
        return <AutomaticCompare beforeImage={before} afterImage={after} />
      case C.COMPARE_CROSSFADE:
        return <CrossfadeCompare beforeImage={before} afterImage={after} />
      case C.COMPARE_SLIDER_RIGHT_LEFT:
        return <LeftRightSlider beforeImage={before} afterImage={after} />
      default:
        return <BugMessage message={`Unknown compare type: ${this.props.type}`} />
    }
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    beforeImage: state.images.before.data,
    afterImage: state.images.after.data,
    type: state.comparisonType,
  };
};

export default connect(mapStateToProps)(ImageCompareView);
