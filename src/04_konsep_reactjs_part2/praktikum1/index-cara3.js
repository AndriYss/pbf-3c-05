import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // binding ini dibutuhkan agar dapat bekerja ketika pemanggilan

  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? 'ON - 1841720157' : 'OFF - Andri Yoga S'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);