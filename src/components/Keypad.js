import React, { Component } from "react";

class Keypad extends Component {
  render() {
    return (
      <div>
        <input
          type="password"
          onKeyUp={() => console.log("Entering password...")}
          placeholder="input something"
        />
      </div>
    );
  }
}

export default Keypad;
