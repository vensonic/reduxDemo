//引入actiontype常量
import { NUM_ADD, NUM_SUB, APP_ADD, APP_SUB, APP_INIT } from "../actionType";
//引入axios
import axios from 'axios';

export const numsADD = (unit)=>{
    let action = {
        type:NUM_ADD,
        value:unit
    }
    return action
}
export const numsSUB = (unit)=>{
    let action = {
      type: NUM_SUB,
      value: unit
    };
    return action
}

//app自增
export const appADD = (unit) =>{
    let action = {
        type:APP_ADD,
        value:unit
    }
    return action
}
//app自减
export const appSUB = (unit) =>{
    let action = {
      type: APP_SUB,
      value: unit
    };
    return action
}

//添加异步请求,获取苹果的默认数据
export const initAppNum = ()=>{
    return (dispatch)=>{
        //发起异步请求
        axios
          .get(
            "https://www.easy-mock.com/mock/5d0c258f15fc601286676121/example/getnum"
          )
          .then(res => {
              console.log(res);
              
            let action = {
              type: APP_INIT,
              value: res.data.num
            }
            //将行为派发到store
            dispatch(action)
          });
       
    }
}