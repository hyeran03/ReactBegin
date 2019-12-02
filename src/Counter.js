import React, { useState } from "react";

function Counter() {
  const style = {
    margin: "20px",
    padding: "20px",
    border: "2px solid #e5e5e5"
  };
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    // setNumber(number + 1);
    setNumber(prevNumber => prevNumber + 1);
    // console.log("+1");
  };
  const onDecrease = () => {
    // setNumber(number - 1);
    setNumber(prevNumber => prevNumber - 1);
    // console.log("-1");
  };
  return (
    <div style={style}>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
