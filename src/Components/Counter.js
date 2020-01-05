import React,{Component} from 'react';

class Counter extends Component
{
    render()
    {
        return(
            <>
            <h3>Counter: {this.props.count}</h3>
            <button onClick={this.props.increaseCount}>+</button>
            <button onClick={this.props.decreaseCount}>-</button>
            <button onClick={this.props.resetCount}>reset</button>
            </>


        )
    }

}

export default Counter;