import React from 'react';

export default function DownloadImageButton(props: Props) {
  return <a className="download-button"
    href={props.imageData}
    download={props.fileName} >
    {props.buttonText}
  </a>
}

interface Props {
  imageData: string,
  fileName: string,
  buttonText: string,
}
