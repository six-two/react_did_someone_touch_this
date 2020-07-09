import React from 'react';

function detectImageFormat(imageDataUrl: string) {
  try {
    // looks like "data:image/png;base64,isGZ7F..."
    const match = imageDataUrl.match(/^data:image\/([a-zA-Z]+)/);
    if (match) {
      const format = match[0].split("/")[1];
      console.debug("Auto detect image format:", format);
      return format;
    }
  } catch (e) {
    console.error("Internal error in detectImageFormat", e);
  }
  console.warn(`Auto detect format failed. Data url looks like "${imageDataUrl.slice(0, 100)}" (cut off after 100 characters)`);
  return "unknown.png";//just guess, signal unknown to user
}

export default function DownloadImageButton(props: Props) {
  if (!props.imageData) {
    return null;
  }

  let fileName = props.fileName;
  if (props.autoDetectFormat === undefined || props.autoDetectFormat === true) {
    fileName += "." + detectImageFormat(props.imageData);
  }

  return <a className="download-button"
    href={props.imageData}
    download={fileName}>
    {props.buttonText}
  </a>
}

interface Props {
  imageData?: string | null,
  fileName: string,
  buttonText: string,
  autoDetectFormat?: boolean,
}
