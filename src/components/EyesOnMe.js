import React from "react"

class EyesOnMe extends React.Component {
  render() {
    return <button onFocus={this.handleFocus} onBlur={this.handleBlur} />
  }

  handleFocus = event => {
      console.log('Good!')
  }

  handleBlur = event => {
      console.log('Hey! Eyes on me!')
  }
}

export default EyesOnMe
