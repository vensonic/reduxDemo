//引入store生成器
import { createStore,applyMiddleware } from 'redux';
//引入reducer
import reducer from "./reducer";
//引入redux-thunk
import reduxThunk from 'redux-thunk';
// 创建和对外暴露store
export default createStore(reducer,applyMiddleware(reduxThunk));