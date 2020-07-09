import React from 'react';
import { connect } from 'react-redux';
import { State as ReduxState, Resolution } from './redux/store';
import { setImageSource, setScreenshotFormat, setPreferredResolution, setEnableBeforeImageOverlay } from './redux/actions';
import * as C from './redux/constants';
import Dropdown from './Dropdown';

const SOURCES = new Map<string, string>();
SOURCES.set(C.SOURCE_WEBCAM, "Use webcam / camera");
SOURCES.set(C.SOURCE_FILE, "Upload photos");

const IMG_FORMAT = new Map<string, string>();
IMG_FORMAT.set("png", "PNG");
IMG_FORMAT.set("jpeg", "JPEG");
IMG_FORMAT.set("webp", "WEBP");

const IMG_SIZE = new Map<string, string>();
IMG_SIZE.set("640x480", "480p");
IMG_SIZE.set("1280x720", "720p (HD)");
IMG_SIZE.set("1920x1080", "1080p (Full HD)");
IMG_SIZE.set("3840x2160", "2160p (4K UHD)");


interface Props {
  imageSource: string,
  screenshotFormat: string,
  preferredResolution: Resolution,
  isBeforeOverlayEnabled: boolean,
}

class SettingsView extends React.Component<Props> {
  render() {
    return (
      <div className="settings">
        <h2>Settings</h2>
        <div className="setting">
          <span className="label">Image source:</span>
          <Dropdown
            optionMap={SOURCES}
            value={this.props.imageSource}
            onValueChange={setImageSource} />
        </div>
        {this.props.imageSource === C.SOURCE_WEBCAM &&
          <div>
            <div className="setting">
              <span className="label">Photo format:</span>
              <Dropdown
                optionMap={IMG_FORMAT}
                value={this.props.screenshotFormat}
                onValueChange={setScreenshotFormat} />
            </div>
            <div className="setting">
              <span className="label">Resolution<abbr title="The browser will request this resolution, but depending on your hardware the actual resolution may differ">*</abbr>:</span>
              <Dropdown
                optionMap={IMG_SIZE}
                value={this.resAsString()}
                onValueChange={this.onResolutionChange} />
            </div>
            <div className="setting">
              <span className="label">Overlay before image<abbr title="Enabling this option will overlay the image you took before on the camera view, so that you can find the alignment and position that you used before">?</abbr>:</span>
              <label>
                <input
                  type="checkbox"
                  checked={this.props.isBeforeOverlayEnabled}
                  onChange={(e: any) => setEnableBeforeImageOverlay(!this.props.isBeforeOverlayEnabled)}
                />
              enable
            </label>
            </div>
          </div>
        }
      </div>
    );
  }

  resAsString() {
    const res = this.props.preferredResolution;
    return `${res.width}x${res.height}`;
  }

  onResolutionChange(resString: string) {
    try {
      const res = resString.split("x", 2);
      const w = Number(res[0]);
      const h = Number(res[1]);
      setPreferredResolution(w, h);
    } catch (e) {
      console.error(`Can not parse resolution: "${resString}"`, e)
    }
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    imageSource: state.settings.imageSource,
    screenshotFormat: state.settings.screenshotFormat,
    preferredResolution: state.settings.preferredResolution,
    isBeforeOverlayEnabled: state.settings.overlayBeforeImage,
  };
};
export default connect(mapStateToProps)(SettingsView);
