
import React from 'react'

class Keypad extends React.Component {

  render() {
    return(
      <input type="password" onKeyUp={this.handleKeyUp}/>
    )
  }
  handleKeyUp = (event) => {
    console.log('Entering password...')
  }

}
export default Keypad;
