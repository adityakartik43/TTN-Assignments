import React from "react";
import ThemeToggler from "./context/ThemeToggler";
import { ThemeProvider } from "./context/ThemeProvider";
import Content from "./context/Content";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggler />
      <Content />
    </ThemeProvider>
  );
};

export default App;
