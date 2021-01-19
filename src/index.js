import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
// import { CartProvider } from "./context/cart";
// import { UserProvider } from "./context/user";
import { AppProvider } from "./context/settings";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,

  document.getElementById("root")
);
