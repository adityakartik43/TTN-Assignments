import React from "react";
import { UserProvider } from "./context/UserContext";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <UserProvider>
      <Login />
      <UserProfile />
    </UserProvider>
  );
};

export default App;
