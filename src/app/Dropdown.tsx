import React from 'react';

export default class DropdownChooser extends React.Component<Props> {
  render() {
    let options = [...this.props.optionMap.entries()];
    return <select value={this.props.value} onChange={this.onChange}>
      {options.map(([key, value]) => <option key={key} value={key}>{value}</option>)}
    </select>
  }

  onChange = (e: any) => {
    this.props.onValueChange(e.target.value);
  }
}

interface Props {
  value: string,
  onValueChange: (value: string) => void,
  optionMap: Map<string, string>,//keys -> labels
}
