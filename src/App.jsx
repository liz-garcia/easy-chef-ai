import "./styles/app-light-theme.css";
import "./styles/app-dark-theme.css";
import { useContext, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import ToggleThemeButton from "./components/ToggleThemeButton.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = themeContext.isDarkMode ? "dark-theme" : "light-theme";
  }, [themeContext.isDarkMode]);

  return (
    <>
      <main>
        <ToggleThemeButton />
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
