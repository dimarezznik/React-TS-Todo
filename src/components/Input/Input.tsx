import React, { MouseEvent } from "react";

interface InputType {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
}

export default class Input extends React.PureComponent<InputType, any> {
  onChangeMethod = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onChange(e);
  };
  render() {
    return (
      <input
        onClick={this.props.onClick}
        className={this.props.className}
        type={this.props.type}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.onChangeMethod}
      />
    );
  }
}
