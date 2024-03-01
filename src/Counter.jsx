// ExampleComponent.jsx
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ExampleComponent = () => {
  const count = useSelector(state => state.count);
  const second = useSelector(state => state.second);
  const object = useSelector(state => state.obj);
  const arr = useSelector(state => state.arr);
  const dispatch = useDispatch();


  const obj={
    name:'abhishek',
    id:100
  }

  const array=[3,45,23,65]

  const increment = () => {
    dispatch({ type: 'INCREMENT'});          // payload is optional
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT', payload:5 });    // we can also pass a payload means value to change the state
  };

  const showObj=()=>{
    dispatch({type:"OBJECT",payload:obj})
  }
  const showArray=()=>{
    dispatch({type:"ARRAY",payload:array})
  }

  return (
    <div>
      <p>Count: {count}  <h1 style={{'color':'red'}}>Second : {second} obj :{object.name} {object.id} array {arr[1]} </h1></p>
      <button onClick={increment}>Increment by 1</button>
      <button onClick={decrement}>increment by 5</button>
      <button onClick={showObj}>OBJ</button>
      <button onClick={showArray}>ARRAY</button>
    </div>
  );
};

export default ExampleComponent;
