import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from './CounterReducer';


const CounterComponent = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    return (
        <>
            <h3>Count is {count}</h3>
            <button onClick={() => dispatch(increment())}>Plus</button>
            <button onClick={() => dispatch(decrement())}>Minus</button>
        </>
    )
}

export default CounterComponent













