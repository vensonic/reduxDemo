//引入要融合的reducer
import appReducer from "./appReducer";
import numReducer from "./numReducer";

//引入yiicombineReducers
import { combineReducers } from 'redux';
//combineReducers()传入一个对象,将两个reducer暴露出去
//调用combine融合两个reducer并暴露出去
export default combineReducers({appReducer, numReducer});