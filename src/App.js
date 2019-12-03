import React, { useRef } from "react";
import UserList from "./UserList";
import "./App.css";

function App() {
  const users = [
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
  ];
  const nextId = useRef(5);
  //useRef 는 어떤 변수를 기억하고 싶을때 사용할 수도 있다

  const onCreate = () => {
    console.log(nextId.current); //5 현재 useRef의 값
    nextId.current += 1; //+1 바뀌는 값 그러나 컴포넌트가 리렌더링되는건 아니다
  };

  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default App;
