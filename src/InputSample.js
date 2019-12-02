import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });
  const { name, nickname } = inputs;
  //   비구조 할당을 통해 값추출
  const onChange = e => {
    const { value, name } = e.target;
    // e.target에서 value, name 추출
    setInputs({
      ...inputs, //inputs객체복사
      [name]: value //name을 value로 설정
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: ""
    });
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
