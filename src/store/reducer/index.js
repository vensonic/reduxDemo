import milkReducer from "./milkReducer";
import  vensonReducer  from "./vensonReducer";
//引入合并工具

import { combineReducers } from "redux";

export default combineReducers({ milkReducer, vensonReducer });