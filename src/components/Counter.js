import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/reducer/counter/counterSlice';

const Counter = () => {
    const countValue = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>{countValue}</h2>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter;