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
    // setUsers([...users, user]);
    setUsers(users => users.concat(user));
    setInputs({
      username: "",
      email: ""
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users =>
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

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

// useMemo - 연산된 값 재사용
// useCallback - 특정 함수 재사용
// React.memo - 컴포넌트(렌더링된 결과물)을 재사용
//-> 무조건적으로 성능이 좋아진다는 것은 아니다, 최적화 할 수 있을때만 사용하는 것이 좋다
