import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//从react-redux中引入provider
import { Provider } from 'react-redux';
//引入store
import  store  from "./store";
// 3 用 Provider 将app包裹起来 并且传递store 到 app上 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

