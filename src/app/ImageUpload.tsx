import React from 'react';

interface Props {
  setImage: (imageDataUrl: string) => void,
}

function ImageUrlUploader(props: Props) {
  const onChange = (e: any) => {
    const files = e.target.files;
    if (files && files[0]) {
      var fileReader = new FileReader();
      // called when the image file is loaded
      fileReader.onload = (event: any) => {
        props.setImage(event.target.result);
      }
      fileReader.readAsDataURL(files[0]);
    }
    e.target.value = null;//clear the input; SEE https://stackoverflow.com/questions/42192346/how-to-reset-reactjs-file-input
  }

  return <input className="image-upload" type='file' onChange={onChange} />
}

export default ImageUrlUploader;
