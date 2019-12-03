import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
    uername: "",
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
    // 불변성을 지키면서 배열안의 원소를 업데이트 => map
    // 특정 객체를 업데이트 할때도 기존을 유지하면서 새로운 자료를 덮어씌우며 업데이트
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
