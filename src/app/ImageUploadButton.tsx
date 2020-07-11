import React from 'react';

export default function ImageUploadButton(props: Props) {
  return <label className="button file-select">
    <input
      type='file'
      onChange={fileSelectionHandler(props)} />
    {props.label}
  </label>
}

interface Props {
  label: string,
  onSuccess: (imageDataUrl: string) => void,
  onError: () => void,
}

function fileSelectionHandler(props: Props) {
  return (selectEvent: any) => {
    const files = selectEvent.target.files;
    if (files && files[0]) {
      var fileReader = new FileReader();
      // called when the image file is loaded
      fileReader.onload = (loadEvent: any) => {
        const imgData = loadEvent.target.result;
        const img = document.createElement("img");
        img.onload = () => props.onSuccess(imgData);
        img.onerror = props.onError
        img.src = imgData;
      }
      fileReader.readAsDataURL(files[0]);
    }
    // clear the input
    // SEE https://stackoverflow.com/questions/42192346/how-to-reset-reactjs-file-input
    selectEvent.target.value = null;
  }
}
