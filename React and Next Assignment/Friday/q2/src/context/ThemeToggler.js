import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
    {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggler;
