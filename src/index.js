import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/Favorites-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);
