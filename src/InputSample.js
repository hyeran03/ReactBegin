import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");
  //   useState는 상태의 기본값을 파라미터로 사용 첫번째 원소는 현재상태, 두번째 원소는 setter

  const onChange = e => {
    //   이벤트 객체 e 를 파라미터로 받아와 사용
    setText(e.target.value);
  };
  const onReset = e => {
    setText("");
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      {/* value값을 넣어주어야 초기화했을때 input도 같이 초기화 */}
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
