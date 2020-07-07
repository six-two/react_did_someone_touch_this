import React from 'react';
import { connect } from 'react-redux';
import { State as ReduxState, ImageData } from './redux/store';
import { setComparisonType } from './redux/actions';
import * as C from './redux/constants';
import AutomaticCompare from './compare-images/AutomaticCompare';
import LeftRightSlider from './compare-images/LeftRightSlider';
import CrossfadeCompare from './compare-images/CrossfadeCompare';
import Dropdown from './Dropdown';

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
      <h2>Comparison</h2>
        Type: <Dropdown
        optionMap={TYPES}
        value={this.props.type}
        onValueChange={(x) => setComparisonType(x)} />
      {this.renderContents()}
    </div>
  }

  renderContents() {
    const before = this.props.beforeImage;
    const after = this.props.afterImage;
    if (!before || !after) {
      return <div>Error: Before or after image is missing. This is probably a bug!</div>
    }
    switch (this.props.type) {
      case C.COMPARE_AUTOMATIC:
        return <AutomaticCompare beforeImage={before} afterImage={after} />
      case C.COMPARE_CROSSFADE:
        return <CrossfadeCompare beforeImage={before} afterImage={after} />
      case C.COMPARE_SLIDER_RIGHT_LEFT:
        return <LeftRightSlider beforeImage={before} afterImage={after} />
      default:
        return <div>Unknown type: {this.props.type}</div>
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
