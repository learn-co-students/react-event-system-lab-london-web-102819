// Code EyesOnMe Component Here
import React, { component, Component } from 'react';

class EyesOnMe extends Component {

    constructor() {
        super()
        this.state = {}
    }

    handleFocus = e => {
        console.log('Good!')
    }

    handleBlur = e => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return(
            <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
        )
    }

}

export default EyesOnMe