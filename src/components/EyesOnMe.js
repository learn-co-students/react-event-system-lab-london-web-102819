// Code EyesOnMe Component Here
import React, { Component } from "react";

export default class EyesOnMe extends Component {
  handleBlur = event => {
    console.log("Hey! Eyes on me!");
  };

  handleFocus = event => {
    console.log("Good!");
  };
  render() {
    return (
      <button onBlur={this.handleBlur} onFocus={this.handleFocus}>
        Eyes on me!
      </button>
    );
  }
}
