import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
let root;
if (rootElement) {
  root = ReactDOM.createRoot(rootElement);
}

if (root) {
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // END: ed8c6549bwf9
}
