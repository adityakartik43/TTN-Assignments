import React, { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <h3>
        {isLoggedIn ? "Welcome Back" : "Please Login"}
      </h3>

      <button onClick={handleClick}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
};

export default App;
