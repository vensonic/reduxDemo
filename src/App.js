import React, { Component,Fragment } from 'react';
//1.从react-redux中接收一个连接器
import { connect } from 'react-redux';
//引入actionCreator
import { numAdd, numSub, numInit } from "./store/actionCreator";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Fragment>
        数据:{this.props.num}
        <div>
          <button onClick={this.props.num_add}>+</button>
          <button onClick={this.props.num_sub}>-</button>
        </div>
      </Fragment>
    );
  }
  //钩子函数中发起请求
  componentDidMount(){
    this.props.num_init()
  }
}
 //3.定义一个映射将state和props映射
 const mapStateToProps = (state)=>{
   console.log(state);
   
   return {
     num: state.vensonReducer.num
   };
 }
 //新增事件和属性映射
 const mapDispatch = (dispatch)=>{
   return {
     num_add:()=>{
       //创建一个action
      //  const action = {
      //    type: NUM_ADD,
      //    value: 1
      //  };
       //开始派发action 会触发 管理员中的代码
       dispatch(numAdd(2));
     },
     num_sub:()=>{
      // const action = {
      //   type: NUM_SUB,
      //   value: 1
      // };
      dispatch(numSub(1))
     },
     //初始化数字
     num_init:()=>{
       dispatch(numInit());
     }
   }
 }
 // 2.将store中的输入传递到 app中
export default connect(
  mapStateToProps,
  mapDispatch
)(App);
