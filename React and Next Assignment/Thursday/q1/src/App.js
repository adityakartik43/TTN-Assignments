import React, { useState } from 'react'

const App = () => {

  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count+1);
  }

  return (
    <>
    <h3>{count}</h3>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App