import React, { Component, FunctionComponent, useState, useEffect, useCallback, useContext, useRef } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { increment, decrement } from '../features/counter/counterSlice';

const FunctionComponentEx: FunctionComponent = () => {

    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const counterValue = useSelector((state: RootState) => state.counter.value);
    const divRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      console.log('useEffect triggered');
      return () => {
        console.log('useEffect cleanup');
      };
    }, []);
  
    const handleClick = useCallback(() => {
      setCount((prevCount) => prevCount + 1);
    }, []);
  
    const handleScroll = () => {
      if (divRef.current) {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div>
        <h2>Function Component</h2>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment Count</button>
        <p>Counter Value from Redux: {counterValue}</p>
        <button onClick={() => dispatch(increment())}>Increment Redux Counter</button>
        <button onClick={() => dispatch(decrement())}>Decrement Redux Counter</button>
        <div style={{ height: '300px', width: '300px', overflow: 'auto' }}>
          <div ref={divRef} style={{ height: '800px', background: 'lightgray' }}>
            Scroll to me!
          </div>
        </div>
        <button onClick={handleScroll}>Scroll to Div</button>
      </div>
    );
  };

  export default FunctionComponentEx;