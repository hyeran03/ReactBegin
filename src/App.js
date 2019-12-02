import React from "react";
import Hello from "./Hello";
import "./App.css";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black  ",
    color: "aqua",
    fontSize: 24,
    padding: "1rem"
  };

  return (
    // babel을 이용 jsx를 js로 변환한다
    <div>
      <Hello />
      {/* 태그는 무조건 닫혀있어야한다. < /> */}
      <Hello />
      <div style={style}>{name}</div>
      {/* jsx 내부에서 js를 나타내고 싶다면 {}를 사용한다 */}
      {/* style를 적용하려 할때는 객체로 선언해 적용한다 */}
      <Hello />
      <div className="grey-box"></div>
      {/* class를 적용할때는 적용할 css를 import한뒤 해당태그에 className을 준다 */}
    </div>
    // 두개 이상의 태그는 하나의 태그로 감싸야한다. <></>를 사용가능
  );
}

export default App;
