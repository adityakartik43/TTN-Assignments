import React, { useState } from 'react'

const App = () => {
  const [msg, setMsg] = useState("I am parent message")
  return (
    <>

    <h2>{msg}</h2>
    <button onClick={()=>setMsg("Updated Msg")}>Update Msg</button>

    </>
  )
}

export default App