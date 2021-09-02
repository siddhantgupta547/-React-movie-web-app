import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers/index";
import reportWebVitals from "./reportWebVitals";

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log(action.type);
    }

    next(action);
  };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));
// console.log(store);
// console.log("Before State", store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: ["m1","m2","m3"]
// })

// console.log("After State", store.getState());

const storeContext = createContext();
console.log(storeContext);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
