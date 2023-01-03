import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import Appcopy from "./App copy.js";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { legacy_createStore as createStore } from "redux";

const container = document.getElementById("root");
const root = createRoot(container);

const num = 1;

function reducer(state = num, action) {
  if (action.type == "increase") {
    state++;
    return state;
  } else if (action.type == "decrease") {
    state--;
    return state;
  }
  return state;
}

let contain = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={contain}>
      <App />
      <Appcopy />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
