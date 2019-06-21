//引入actiontype
import { APP_ADD, APP_SUB,APP_INIT } from "../actionType";

const defaultState = {
    payload:{
        num:-1
    }
}
//创建暴露reducer
export default (state = defaultState,action)=>{
    if (action.type === APP_ADD) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.payload.num += action.value
        return newState
    }
  if (action.type === APP_SUB) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.payload.num -= action.value;
    return newState;
  }
  if (action.type === APP_INIT) {
      let newState = JSON.parse(JSON.stringify(state));
      newState.payload.num = action.value;
      return newState
  }
  return state;
}