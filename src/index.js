import React from "react";
import ReactDOM, { hydrate } from "react-dom";
import "./index.css";
import "./colors.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
console.log("hyd");