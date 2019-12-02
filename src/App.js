import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <Hello name="react" color="pink" />
        <Hello color="red" />
      </Wrapper>
    </>
  );
}

export default App;
