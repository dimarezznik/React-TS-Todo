import React from "react";

interface ButtonProps {
  onClick: (e: React.FormEvent) => void;
}

export default class Button extends React.PureComponent<ButtonProps, any> {
  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}
