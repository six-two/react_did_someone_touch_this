import React from 'react';

class ChooseOptionView extends React.Component<Props> {
  static defaultValue(): string {
    return "";
  }

  render() {
    return (<select onChange={this.onChange} value={this.props.value}>
      <option value="" key={-1} disabled hidden>
        {this.props.prompt ? this.props.prompt : "Choose a option"}
      </option>
      {this.props.options.map((value: string, i: number) => {
        // Here using key=index should be ok, since the order should not change
        return <option value={value} key={i}>{value}</option>;
      })}
    </select>);
  }

  onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.onChange(event.target.value);
  }
}

export interface Props {
  prompt?: string,
  value: string,
  options: string[],
  onChange: (newValue: string) => void,
}

export default ChooseOptionView;
