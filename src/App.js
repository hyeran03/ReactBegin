import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <Hello name="react" color="pink" isSpecial />
        {/* props의 이름만 작성하고 값을 생략한다면 true로 간주 */}
        <Hello color="red" />
      </Wrapper>
    </>
  );
}

export default App;
