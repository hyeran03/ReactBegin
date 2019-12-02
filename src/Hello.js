import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color: color }}>
      {isSpecial && <b>*</b>}
      {/* 삼항연산자를 사용해 조건부 렌더링 */}
      안녕하세요{name}
    </div>
  );
  //   구조분해를 해 ({color, name}) props.color 가아닌 color 로 사용 코드를 더 간결하게 작성할 수 있다
}

Hello.defaultProps = {
  name: "이름없음"
};
//dafaul 값을 정할 수 있음

export default Hello;
