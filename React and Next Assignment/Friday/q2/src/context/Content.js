import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    height: "100vh",
    width: "100vw",
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <div style={styles}>
      <h1>{theme.toUpperCase()} THEME</h1>
    </div>
  );
};

export default Content;
