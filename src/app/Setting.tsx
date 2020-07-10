import React from 'react';

export default function Setting(props: Props) {
  const show = props.show === undefined ? true : props.show;
  if (show) {
    return <div className="setting">
      <span className="label">
        {props.label}
        {props.hint &&
          <abbr title={props.hint.text}>
            {` (${props.hint.trigger})`}
          </abbr>
        }
      </span>
      {props.children}
    </div>
  } else {
    return null;
  }
}

interface Props {
  label: string,
  hint?: {
    trigger: string,
    text: string,
  },
  children: any,
  show?: boolean,
}
