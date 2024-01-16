import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Function to update the theme based on system color scheme
    const updateTheme = () => {
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDarkMode);
    };

    // Call function on component mount
    updateTheme();

    // Listen for changes in system color scheme
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      updateTheme();
    };

    mediaQueryList.addEventListener("change", handleChange);

    // Clean up the event listener on component unmount
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeContextProvider };
