//引入axios
import axios from "axios";
//引入actiontype
import { NUM_ADD, NUM_SUB,NUM_INIT } from "../actionType";
//数据增加函数
export const numAdd=(unit)=>{
    return {
      type: NUM_ADD,
      value: unit
    };
}
//数据减少函数
export const numSub=(unit)=>{
    return {
      type: NUM_SUB,
      value: unit
    }; 
}

//初始化数据
export const numInit=()=>{
    return (dispatch)=>{
       axios.get(
         "https://www.easy-mock.com/mock/5d0c258f15fc601286676121/example/getnum"
       ).then((res)=>{
           console.log(res);
           
           const action = {
             type: NUM_INIT,
             value:res.data.num
           };

           dispatch(action)
       })

    }
}