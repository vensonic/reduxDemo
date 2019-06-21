import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//从react-redux中引入provider
import { Provider } from 'react-redux';
//引入store
import store from './store';
//将App用Provider标签包裹起来
//将store通过属性的方式传递到App组件上
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

