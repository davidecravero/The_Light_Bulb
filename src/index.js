import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AppClass from "./App.class";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>,
  rootElement
);
