import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const ToggleThemeButton = () => {
  const themeContext = useContext(ThemeContext);

  const handleToggle = () => {
    console.log("Button clicked!");
    console.log(themeContext.isDarkMode);
    themeContext.toggleTheme(); // Add a toggleTheme function to your context
  };

  return <button id="toggleThemeButton" onClick={handleToggle}></button>;
};

export default ToggleThemeButton;
