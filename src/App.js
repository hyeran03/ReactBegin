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


  const nextId = useRef(5);

  const onCreate = () => {
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
    console.log(nextId.current);
    nextId.current += 1;
  };

  const onRemove = id =>{
    setUsers(users.filter(user => user.id !== id));
    // filter를 사용해 값을 비교하고 비교값과 맞다면(true) 적용한다
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
