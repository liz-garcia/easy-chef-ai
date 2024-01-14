import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { UserContextProvider } from "./context/UserContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserContextProvider>,
);
