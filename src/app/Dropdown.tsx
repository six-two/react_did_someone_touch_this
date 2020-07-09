import React from 'react';

export default function DropdownChooser(props: Props) {
  const onChange = (e: any) => props.onValueChange(e.target.value);
  const options = [...props.optionMap.entries()];

  return <select value={props.value} onChange={onChange}>
    {options.map(([key, value]) =>
      <option key={key} value={key}>{value}</option>)
    }
  </select>
}

interface Props {
  value: string,
  onValueChange: (value: string) => void,
  optionMap: Map<string, string>,//keys -> labels
}
