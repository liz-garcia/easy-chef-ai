import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const ToggleThemeButton = () => {
  const themeContext = useContext(ThemeContext);

  const handleToggle = () => {
    // Add a toggleTheme function to context
    themeContext.toggleTheme();
  };

  return <button id="toggleThemeButton" onClick={handleToggle}></button>;
};

export default ToggleThemeButton;
