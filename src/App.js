import React, { Component,Fragment } from 'react';
//引入react-redux中的connect,用于链接组件和store
import { connect } from 'react-redux';
//引入actionCreator中的actions
import {
  numsADD,
  numsSUB,
  appADD,
  appSUB,
  initAppNum
} from "./store/actionCreator";
//增加数字功能组件
class AddBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <button onClick={this.props.addNum}>+</button>
     );
  }
}
 //数字递减功能组件
 
class SubBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <button onClick={this.props.subNum}>-</button>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount(){
    this.props.app_init();
  }
  render() { 
    return (
      <Fragment>
        <p>使用数据:{this.props.num}</p>
        <AddBtn {...this.props} />
        <SubBtn {...this.props} />
        <hr />
        <div>
          苹果数量:{this.props.appNum}
          <button onClick={this.props.app_add}>+</button>
          <button onClick={this.props.app_sub}>-</button>
        </div>
      </Fragment>
    );
  }
}
 //将store中的数据映射到props上
  const mapStateToProps = (state)=>{
    return {
      num: state.numReducer.payload.num,
      appNum:state.appReducer.payload.num
    };
  }
  //创建action,并将action链接到store上
  const mapDispatchToProps = (dispatch)=>{
    return {
      //添加数据事件
      addNum: () => {
        //创建action
        // const action = {
        //   //type是个自定义字符串,用于才reducer中判断是何种操作
        //   type: NUM_ADD,
        //   //在reducer中操做state所需数据
        //   value: 1
        // };
        //派发行为 ---将action派发到reducer中
        dispatch(numsADD(2));
      },
      //自减数据事件
      subNum: () => {
        //创建action
        // const action = {
        //   //type是个自定义字符串,用于才reducer中判断是何种操作
        //   type: NUM_SUB,
        //   //在reducer中操做state所需数据
        //   value: 1
        // };
        //派发行为 ---将action派发到reducer中
        dispatch(numsSUB(1));
      },
      //苹果自增
      app_add: () => {
        dispatch(appADD(1));
      },
      //苹果自减
      app_sub: () => {
        dispatch(appSUB(2));
      },
      //苹果初始化
      app_init:()=>{
        //通过dispatch来调用action
       dispatch(initAppNum());
      }
    };
  }
 //使用connect将store的数据通过props的方式传递到App上 connect函数的返回值是一个函数
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);