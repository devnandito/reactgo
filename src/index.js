import React from "react";
import ReactDOM from "react-dom";

import "./global.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);

reportWebVitals();
