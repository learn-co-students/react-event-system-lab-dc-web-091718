import React, { Component } from 'react'

class EyesOnMe extends Component {
  render() {
    return (
      <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}>The button</button>
      </div>
    )
  }

  handleFocus = () => console.log('Good!')
  handleBlur = () => console.log('Hey! Eyes on me!')
}

export default EyesOnMe