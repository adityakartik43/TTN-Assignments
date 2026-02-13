import React, { Children } from 'react'

const LogoutContent = ({children}) => {
  return (
    <>
    <h1>Welcome back buddy!</h1>
    <p>Random login info like account name, id, etc....</p>
    {children}
    </>
  )
}

export default LogoutContent