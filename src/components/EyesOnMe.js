import React, { Component } from 'react';
export default class EyesOnMe extends Component {
  focusFn = () => console.log('Good!')
  blurFn = () => console.log('Hey! Eyes on me!')
  render() {


    return (
      <div>
        <button onFocus={this.focusFn} onBlur={this.blurFn} />
      </div>
    );
  }
}
