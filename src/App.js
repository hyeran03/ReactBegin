import React, { useRef, useState, useMemo } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import "./App.css";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "one",
      email: "one@example.com",
      active: true
    },
    {
      id: 2,
      username: "two",
      email: "two@example.com",
      active: false
    },
    {
      id: 3,
      username: "three",
      email: "three@example.com",
      active: false
    },
    {
      id: 4,
      username: "four",
      email: "four@example.com",
      active: false
    }
  ]);

  const nextId = useRef(5);

  //배열의 값 수정 - ...users(spread), concat(user)
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    // setUsers(users.concat(user));
    setInputs({
      username: "",
      email: ""
    });
    nextId.current += 1;
  };

  //배열의 값 없애기(제거) - filter
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  //특정값 업데이트 - map
  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  //활성화 수 세기
  const count = useMemo(() => countActiveUsers(users), [users]);
  //  [값이 바뀌어야만 연산을 해주겠다] 바뀔때만 연산이되고 그렇지 않다면 그대로 []값을 넣어야만 연산이 된다
  //useMemo를 사용하면 연산이 필요할때만 사용할 수 있도록 해준다

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count} </div>
    </>
  );
}

export default App;
