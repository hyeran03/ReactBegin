import React, { useState, Component } from "react";

class Counter extends Component {
  state = { counter: 0, fixed: 1 };
  //babel을 사용하여 적용할 수 있는 문법

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     counter : 0
  //   }; //무조건 객체이여야
  // }

  // constructor(props){
  //   super(props);
  //   this.handleIncrease = this.handleIncrease.bind(this);
  //   this.handleDecrease = this.handleDecrease.bind(this);
  // }

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    console.log("increase");
  };
  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
    console.log("decrease");
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <b>고정된 값 : {this.state.fixed}</b>
      </div>
    );
  }
}

// function Counter() {
//   const style = {
//     margin: "20px",
//     padding: "20px",
//     border: "2px solid #e5e5e5"
//   };
//   const [number, setNumber] = useState(0);
//   const onIncrease = () => {
//     // setNumber(number + 1);
//     setNumber(prevNumber => prevNumber + 1);
//     // console.log("+1");
//   };
//   const onDecrease = () => {
//     // setNumber(number - 1);
//     setNumber(prevNumber => prevNumber - 1);
//     // console.log("-1");
//   };
//   return (
//     <div style={style}>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

export default Counter;
