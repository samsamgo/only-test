import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const num = useSelector((state) => state);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <p>test {num}</p>
      <button onClick={() => { dispatch({ type: "increase" }) }}>더하기</button>
      <button onClick={() => { dispatch({ type: "decrease" }) }}>빼기</button>
    </div>
  )
}

export default App;
