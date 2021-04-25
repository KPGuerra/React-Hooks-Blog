import React , { useState, useEffect } from 'react'

function App() {
  //Declaring a state variable
  const [count, setCount] = useState(5)
  const [color, setColor] = useState('red')

  //Change color to blue if even and to red if odd
  useEffect(() => {
    if (count % 2 === 0) {
      setColor('blue')
    }
    else setColor('red')
  },[count])

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
      <span style={{color: `${color}`}}> {count} </span>
      <button onClick={increaseCount}> + </button>
    </div>
  );
}

export default App;


