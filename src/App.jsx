import { useState } from 'react'
import Counter from './Counter.jsx'
import { useSelector } from 'react-redux';
function App() {
  // const [count, setCount] = useState(0)
  const second = useSelector(state => state.second);

  const object = useSelector(state => state.obj);
  const arr = useSelector(state => state.arr);
  return (
    <>
    <h1 style={{'color':'red'}}>Second : {second}</h1>
    <>{object.name} {object.id} {arr[arr.length-1]}</>

    <Counter></Counter>
    </>
  )
}

export default App
