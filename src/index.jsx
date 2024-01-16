import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { RecipeContextProvider } from "./context/RecipeContext.jsx";

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <ThemeContextProvider>
      <UserContextProvider>
        <RecipeContextProvider>
          <App />
        </RecipeContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>,
  );
};

// window.addEventListener('load', renderApp);
window.onload = renderApp;
