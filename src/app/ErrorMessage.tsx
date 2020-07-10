import React from 'react';

export function ErrorMessage(props: Props) {
  if (props.log !== false) { //accept true and undefined
    console.warn("[ErrorMessage]", props.message);
  }
  return <div className="err-msg">
    {props.message}
  </div>
}

export function BugMessage(props: Props) {
  if (props.log !== false){ //accept true and undefined
    console.warn("[BugMessage]", props.message);
  }
  return <div className="err-msg">
    <div className="bold">
      Ooops, this should not happen. You have probably found a bug!
    </div>
    {props.message}
  </div>
}

interface Props {
  message: string,
  log?: boolean,
}
