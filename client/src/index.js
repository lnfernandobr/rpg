import React from "react";
import ReactDOM from "react-dom";
import { App, LOCALES } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App locale={LOCALES.PT_BR} />
  </React.StrictMode>,
  document.getElementById("root")
);
