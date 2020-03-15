import React, { Component } from 'react';
const containerStyle = {
  display: 'flex'
}
const buttonStyle = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px'
}
class Counter extends Component {

   state = {
    number: 0
  }
  addOne = () => {
    this.setState({
      number: this.state.number + 1
    });
  }
  minusOne = () => {
    this.setState({
      number: this.state.number - 1
    });
  } 
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>{this.state.number}</h1>
          <div style={containerStyle}>
            <button onClick={this.minusOne} type="button" style={buttonStyle}>-</button>
            <button onClick={this.addOne} type="button" style={buttonStyle}>+</button>
          </div>
        </header>
      </div>
    );
  }
}
export default Counter;