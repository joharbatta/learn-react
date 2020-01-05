import React,{Component} from 'react';

const Counter=(props)=>
{
    const { count,increaseCount,decreaseCount,resetCount }=props
    return(
        <>
        <h3>Counter: {props.count}</h3>
        <button onClick={props.increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        <button onClick={resetCount}>reset</button>
        </>

    )
}

export default Counter;