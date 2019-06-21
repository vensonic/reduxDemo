import React, { Component,Fragment } from 'react';

class HomeTop extends Component {
  constructor(){
    super();
    this.inp = React.createRef()
  }
  componentDidMount(){
    // console.log(this.inp);
    this.inp.current.focus()
    
  }
  render() { 
    return (
      <Fragment>
        <input
          value={this.props.inputValue}
          onChange={this.props.inputChange}
          onKeyDown={this.props.keyadd}
          ref={this.inp}
        />
        <button onClick={this.props.add}>添加</button>
      </Fragment>
    );
  }
}
class MyList extends Component {
 shouldComponentUpdate(nextprops,nextstate){
// console.log(this.props);
// console.log(nextprops);
  return this.props.List !== nextprops.List
 }
  render() { 
    return (
      <Fragment>
        <ul>
          {this.props.List.map((val, index) => (
            <li
              key={index}
              onClick={() => {
                this.props.del(index);
              }}
            >
              {val}
            </li>
          ))}
        </ul>
        <style jsx>
          {`
            ul {
              list-style: none;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      arr: []
    };
  }
  inputChange = e => {
    this.setState({ inputVal: e.currentTarget.value });
  };
  //添加元素
  add = () => {
    //解构只是浅拷贝,arr是指向同一个数组
    // let { arr, inputVal } = this.state;
    let newState = JSON.parse(JSON.stringify(this.state));
    let { arr, inputVal } = newState;
    arr.push(inputVal);
    this.setState({ arr:arr, inputVal: "" });
  };
  //删除元素
  del = i => {
    let arr = [...this.state.arr];
    arr.splice(i, 1);
    this.setState({ arr });
  };
  //键盘按下添加值
  keyadd=(e)=>{
    if(e.which ===13){
      this.add()
    }
  }
  render() {
    return (
      <Fragment>
        <HomeTop
          inputValue={this.state.inputVal}
          inputChange={this.inputChange}
          add={this.add}
          keyadd={this.keyadd}
        />
        <MyList List={this.state.arr} del={this.del} />
      </Fragment>
    );
  }
}
 
export default App;
