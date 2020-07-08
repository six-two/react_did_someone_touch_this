import React from 'react';
import { connect } from 'react-redux';
import { State as ReduxState } from './redux/store';
import { setImageSource } from './redux/actions';
import { SOURCE_WEBCAM, SOURCE_FILE } from './redux/constants';
import OptionView from './OptionView';


const SOURCES = [SOURCE_WEBCAM, SOURCE_FILE];

interface Props {
  imageSource: string,
  setImageSource: (value: string) => void,
}

class SettingsView extends React.Component<Props> {
  render() {
    return (
      <div className="settings">
        <h2>Settings</h2>
        <span className="label">Image source:</span>
        <OptionView options={SOURCES} value={this.props.imageSource} onChange={setImageSource} />
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    imageSource: state.settings.imageSource,
  };
};
export default connect(mapStateToProps)(SettingsView);
