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
      email: "one@example.com"
    },
    {
      id: 2,
      username: "two",
      email: "two@example.com"
    },
    {
      id: 3,
      username: "three",
      email: "three@example.com"
    },
    {
      id: 4,
      username: "four",
      email: "four@example.com"
    }
  ]);

  // 배열의 불변성을 지키면서 새로운 항목추가
  // 스프레드(spread) 연산자 사용

  const nextId = useRef(5);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]); //기존의 배열을 가져와 user에 넣고 user에 새항목을 추가시킨다
    // setUsers(users.concat(user)); -> concat 함수를 사용하여 항목을 추가하는 방법
    //push를 사용하면 안된다
    setInputs({
      username: "",
      email: ""
    });
    console.log(nextId.current);
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
