import "./styles/light-theme.css";
import "./styles/dark-theme.css";
import { useContext } from "react";
import AppRoutes from "./AppRoutes";
import ToggleThemeButton from "./components/ToggleThemeButton.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={themeContext.isDarkMode ? "dark-theme" : "light-theme"}>
      <main>
        <ToggleThemeButton />
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
