import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}> 등록 </button>
    </div>
  );
}

export default React.memo(CreateUser);
// React.memo를 사용해 props이 바뀌었을 때만 리렌더링하도록 한다
