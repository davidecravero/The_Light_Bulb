import React, { Component } from "react";

class Button extends Component {
  // If you don't use any props you don't need to define the constructor
  constructor(props) {
    super(props);
  }

  render() {
    return <a onClick={() => this.props.whenClicked()}> {this.props.value}</a>;
  }
}

export default Button;
