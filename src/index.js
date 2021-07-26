import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { createStore, compose, applyMiddleware } from 'redux';
//import rootReducer from './reducers';
import './index.css';
import './grid.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
//import thunk from 'redux-thunk';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
