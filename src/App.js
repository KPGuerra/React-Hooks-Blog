import React , { useState } from 'react'

function App() {
  //Declaring a state variable
  const [count, setCount] = useState(5)

  function decreaseCount() {
    setCount(prevCount => prevCount - 1 )
  }

  function increaseCount() {
    setCount(prevCount => prevCount + 1 )
  }
  return (
    <div>
      <h1> Basic Counter</h1>
      
      <button onClick={decreaseCount}> - </button>
      <span> {count} </span>
      <button onClick={increaseCount}> + </button>
    </div>
  );
}

export default App;


