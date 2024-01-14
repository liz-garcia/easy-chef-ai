import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { UserContextProvider } from "./context/UserContext.jsx";
import { RecipeContextProvider } from "./context/RecipeContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserContextProvider>
    <RecipeContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RecipeContextProvider>
  </UserContextProvider>,
);
