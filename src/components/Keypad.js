// Code Keypad Component Here
import React, { component, Component } from 'react';

class Keypad extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    handleKeyUp = e => {
        console.log('Entering password...')
    }

    render() {
        return(
            <input type="password" onKeyUp={this.handleKeyUp}></input>
        )
    }
}

export default Keypad
