import React from 'react';
import { ErrorMessage } from './ErrorMessage';
import ImageUploadButton from './ImageUploadButton';

interface Props {
  image: string | null,
  setImage: (imageDataUrl: string) => void,
}

interface State {
  hasError: boolean,
}

class ImageUrlUploader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  render() {
    if (this.props.image) {
      return <div className="image-upload">
        <img src={this.props.image} alt="" />
        {this.renderFileInputButton("Use a different image")}
      </div>
    } else {
      return <div className="image-upload">
        {this.state.hasError &&
          <ErrorMessage message="The file you uploaded can is not a valid image. Please try again." />
        }
        {this.renderFileInputButton("Select image")}
      </div>
    }
  }

  renderFileInputButton(text: string) {
    return <ImageUploadButton
      onSuccess={this.props.setImage}
      onError={this.onError}
      label={text}
    />
  }

  onError = () => {
    this.setState({
      hasError: true,
    });
  }
}

export default ImageUrlUploader;
