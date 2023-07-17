import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const domEl = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(domEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
