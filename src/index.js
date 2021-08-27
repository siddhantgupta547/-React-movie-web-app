import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


import './index.css';
import App from './components/App';
import rootReducer from './reducers/index'
import reportWebVitals from './reportWebVitals';

const store= createStore(rootReducer);
// console.log(store);
// console.log("Before State", store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: ["m1","m2","m3"]
// })

// console.log("After State", store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App store= {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
