import React from "react";
import ReactDOM from "react-dom";
import { App, LOCALES } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
