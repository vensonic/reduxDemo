//引入actiontype
import { NUM_ADD, NUM_SUB, NUM_INIT } from "../actionType";

//定义默认数据,后期可以通过接口获取
const defaultState = {
  num: 1
};

//创建和对外暴露一个函数,返回state
export default (state = defaultState, action) => {
    //从后台获取,初始化值
    if (action.type === NUM_INIT){
          let newState = JSON.parse(JSON.stringify(state));
           newState.num = action.value
           return newState;
    }
      if (action.type === NUM_ADD) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.num += action.value;
        return newState;
      }
  if (action.type === NUM_SUB) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.num -= action.value;
    return newState;
  }
  return state;
};
