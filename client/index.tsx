import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./app";
import { store } from './redux/store';
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.querySelector("#root") as Element);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
