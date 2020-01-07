// Code EyesOnMe Component Here
import React, { component, Component } from 'react';

export default class EyesOnMe extends Component {

    logFoc = () => {
        console.log('Good!')
    }

    logBlur = () => {
        console.log('Hey! Eyes on me!')
    }
  render(){
      return(
          <button onFocus={this.logFoc} onBlur={this.logBlur}> </button>
      )
  }

}
