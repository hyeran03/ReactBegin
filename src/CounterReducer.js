import React, { useReducer } from "react";
// useReducer 을 사용하여 컴포넌트의 상태를 업데이트 할수 잇다

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

function CounterReducer() {
  const style = {
    margin: "20px",
    padding: "20px",
    border: "2px solid #e5e5e5"
  };
  const [number, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => {
    dispatch({
      type: "INCREMENT"
    });
  };
  const onDecrease = () => {
    dispatch({
      type: "DECREMENT"
    });
  };
  return (
    <div style={style}>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default CounterReducer;
