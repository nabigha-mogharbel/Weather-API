import React, { Component } from "react";
export default class ErrorHandler extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ErrorHandler">
        <p>{this.props.msg}</p>
      </div>
    );
  }
}
