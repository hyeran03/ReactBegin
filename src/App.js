import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import "./App.css";

function countActiveUsers(users) {
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    // useCallback 을 사용하여 함수를 재사용한다
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]
  );

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

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    setInputs({
      username: "",
      email: ""
    });
    nextId.current += 1;
  }, [username, email, users]);
  // []의 값을 넣어주어야만 최신의 상태를 참조한다

  const onRemove = useCallback(
    id => {
      setUsers(users.filter(user => user.id !== id));
    },
    [users]
  );

  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  const count = useMemo(() => countActiveUsers(users), [users]);

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
