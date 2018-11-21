// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component{

  inputMessage = () => {
    console.log('Entering password...')
  }
  render(){
    return(
      <div>
        <input type="password" onKeyUp={this.inputMessage} />
      </div>
    )
  }
}

export default Keypad;
