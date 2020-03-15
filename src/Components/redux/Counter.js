import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      number: state.number
    };
  }

const containerStyle = {
  display: 'flex'
}
const buttonStyle = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px'
}
class Counter extends Component {

//    state = {
//     number: 0
//   }
//   addOne = () => {
//     this.setState({
//       number: this.state.number + 1
//     });
//   }
//   minusOne = () => {
//     this.setState({
//       number: this.state.number - 1
//     });
//   } 

addOne = () => {
    this.props.dispatch({ type: 'ADD_ONE' });
  }

  minusOne = () => {
    this.props.dispatch({ type: 'MINUS_ONE' });
  }
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>{this.props.number}</h1>
          <div style={containerStyle}>
            <button onClick={this.minusOne} type="button" style={buttonStyle}>-</button>
            <button onClick={this.addOne} type="button" style={buttonStyle}>+</button>
          </div>
        </header>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Counter);