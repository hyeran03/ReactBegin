import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px"
  };
  return (
    <div style={style}>
      {children}
      {/* 내부의 내용을 보이기위해서는 사용해야한다 */}
    </div>
  );
}

export default Wrapper;
