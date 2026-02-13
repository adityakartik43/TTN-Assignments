import React, { useState } from 'react'
import LoginContent from './Components/LoginContent.js'
import LogoutContent from './Components/LogoutContent.js'
import Button from './Components/Button.js'

const App = () => {

  let [loggedIn, setLoggedin] = useState(false)

  const handleClick = () => {
    setLoggedin(!loggedIn)
  }

  return (
    <>
    {
      !loggedIn ? <LoginContent><Button name="Login karo" onClick={handleClick}/></LoginContent> : <LogoutContent> <Button name="Logout karo" onClick={handleClick}/></LogoutContent>
    }

    </>
  )
}

export default App