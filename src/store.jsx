// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  count: 0,     // first variable
  second:0,     //second
  obj:{},
  arr:[]
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        second: state.second + action.payload     // we can access payload value like this
      };
    case 'OBJECT':
      return{
        ...state,
        obj:action.payload
      };
    case 'ARRAY':
      return{
        ...state,
        arr:action.payload
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer);

export default store;
