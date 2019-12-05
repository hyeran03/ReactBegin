//context API - 바로넘겨주기

import React, { createContext, useContext, useState } from "react";

//context는 다양한 곳에서 사용할 수 있다
const MyContext = createContext("defalutValue");
//context를 만든다 기본값은 'defalutValue'이다 - provider가 사용되지 않았을때의 값

function Child() {
  const text = useContext(MyContext);
  //context를 사용한다 사용하는 context는 MyContext이다
  //context를 참조하면 provider에 적용된 값을 바로 적용할 수 있다
  return <div>안녕하세요{text}</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}

function ContextSample() {
  //context를 동적으로 사용하기
  const [value, setValue] = useState(true);

  return (
    <MyContext.Provider value={value ? "good" : "bad"}>
      {/* 사용하는 context인 MyContext에서 provider을 불러오고 그것의 value는 'good'으로 설정 
            즉 {text}에 사용될 값은 결국 'good'이다  */}
      <GrandParent />
      <button onClick={() => setValue(!value)}>CLICK ME!</button>
      {/* 클릭시 setValue의 값을 true, false로 변환시키는 버튼 */}
    </MyContext.Provider>
  );
}
//참조되는 컴포넌트를 뛰어넘어 최종끼리 만나는 것

export default ContextSample;
