import React, { Component } from 'react';

  export default class Keypad extends Component {
    render() {

      const keyUpFn = () => console.log('Entering password...')

      return (
        <div>
          <input type="password"
            onKeyUp={keyUpFn} />
        </div>
      );
    }
  }
