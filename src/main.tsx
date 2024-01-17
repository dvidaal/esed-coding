import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto";
import "@fontsource/roboto/900.css";
import App from "./App.tsx";
import "./index.css";
import GlobalStyles from "./styles/GlobalStyles.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
