import React from "react"

class Keypad extends React.Component {
  render() {
    return <input onKeyUp={this.handleKeyUp} type="password" />
  }

  handleKeyUp = event => console.log("Entering password...")
}

export default Keypad
