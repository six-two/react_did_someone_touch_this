import React from 'react';

export function ErrorMessage(props: Props) {
  return <div className="err-msg">
    {props.message}
  </div>
}

export function BugMessage(props: Props) {
  return <div className="err-msg">
    <div className="bold">
      Ooops, this should not happen. You have probably found a bug!
    </div>
    {props.message}
  </div>
}

interface Props {
  message: string,
}
