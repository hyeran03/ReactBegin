import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  useEffect(() => {
    console.log("user값이 설정됨");
    console.log(user);
    return () => {
      console.log("user 값이 바뀌기 전");
      console.log(user);
    };
  }, [user]);
  //넣어주어야만 해당 값이 바뀔때 마다, 나타날때마다 등록한 함수가 호출된다

  // useEffect(() => {
  //props -> state
  //REST API
  //D3 Video.js
  //setInterval, setTimeout
  //DOM에 접근
  //return () => {
  //clearInterval , clearTimeout
  //라이브러리 인스턴스 제거
  //정리함수라 할수 있음
  // };
  // }, []);

  return (
    <div>
      <b
        onClick={() => onToggle(id)}
        style={{
          color: active ? "green" : "black",
          cursor: "pointer"
        }}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
export default UserList;
