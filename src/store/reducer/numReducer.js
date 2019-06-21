//引入actiontype常量
import { NUM_ADD, NUM_SUB } from "../actionType";
// 定义more数据
const defaultState = {
  payload: {
    num: 0
  }
};

//创建和对外暴露一个函数,返回state
export default (state = defaultState, action) => {
  //根据action的type,对state做相应的操作

  if (action.type === NUM_ADD) {
    //拷贝一份state,用于操作和计算
    let newState = JSON.parse(JSON.stringify(state));
    newState.payload.num += action.value;
    //将新的state返回,即可触发store更新
    return newState;
  }
  if (action.type === NUM_SUB) {
    //拷贝一份state,用于操作和计算
    let newState = JSON.parse(JSON.stringify(state));
    newState.payload.num -= action.value;
    //将新的state返回,即可触发store更新
    return newState;
  }
  return state;
};
