import React, { useReducer } from "react";
// useReducer 을 사용하여 컴포넌트의 상태를 업데이트 할수 잇다

function reducer(state, action) {   
    //reducer = 상태를 업데이트하는 함수
    //state = 현재상태, action = 바뀌는 액션
  switch (action.type) {
    //action의 type에 따라 다른 상태를 반환하도록
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
        //return state; -> 준비하지 않은 액션이 들어와도 반응없음
      throw new Error("Unhandled action"); //-> 에러가 발생할시 에러발생알림
      //결과값
  }
}
//컴포넌트 밖에 존재하기 때문에 상태업데이트로직을 분리시킬수있다

function CounterReducer() {
  const style = {
    margin: "20px",
    padding: "20px",
    border: "2px solid #e5e5e5"
  };
  const [number, dispatch] = useReducer(reducer, 0);
  // [현재상태, 액션을 발생시키는 함수] = useReduder(reducer함수, 기본값)
  const onIncrease = () => {
    dispatch({
      type: "INCREMENT"
    });
    //기본 dispatch의 형태
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
