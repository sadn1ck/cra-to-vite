import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App.js";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);