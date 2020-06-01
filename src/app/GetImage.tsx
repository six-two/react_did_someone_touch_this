import React from 'react';
import { connect } from 'react-redux';
import { State as ReduxState, ImageData } from './redux/store';
import { setImageSource } from './redux/actions';
import { STEPS, StepData } from './steps/Steps';
import { SOURCE_WEBCAM, SOURCE_FILE } from './redux/constants';
import TakeImageView from './TakeImageView';
import ImageUpload from './ImageUpload';


interface Props {
  imageSource: string,
  onImage: (image: ImageData) => void,
  backgroundImage?: ImageData,
}

class GetImageView extends React.Component<Props> {
  render() {
    return (
      <div className="get-image">
        {this.renderContents()}
      </div>
    );
  }

  renderContents() {
    switch (this.props.imageSource) {
      case SOURCE_WEBCAM:
        return <TakeImageView onPhoto={this.props.onImage} backgroundImage={this.props.backgroundImage} />;
      case SOURCE_FILE:
        return <ImageUpload setImage={this.props.onImage} />
      default:
        throw new Error(`Unknown image source: "${this.props.imageSource}"`)
    };
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    imageSource: state.settings.imageSource,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetImageView);
