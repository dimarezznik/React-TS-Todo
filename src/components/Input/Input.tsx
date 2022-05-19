import React, { MouseEvent } from "react";
import { ItemType } from "../../App";

interface InputType {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
}

export default class Input extends React.Component<InputType, any> {
  onChangeMethod = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onChange(e);
  };

  shouldComponentUpdate(
    nextProps: Readonly<InputType>,
    nextState: Readonly<any>,
    nextContext: any
  ): boolean {
    return this.props.value !== nextProps.value;
  }

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
