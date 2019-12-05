import React, { useRef, useCallback, useReducer, useMemo } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import "./App.css";

function conuntActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter(user => user.active).length;
}

//사용할 초기상태를 컴포넌트 밖에 만들기
const initialState = {
  inputs: {
    username: "",
    email: ""
  },
  users: [
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
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      // 현재 자신이 지니고 있는 상태에서 input안의 특정값을 바꾸어 주도록
      return {
        ...state, //불변성을 지키기위함
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs, //위에서 initialState를 선언했기에 사용가능
        users: state.users.concat(action.user) //user배열을 업데이트하는 작업
      };
    case "TOGGLE_USER":
      return {
        ...state, //기존의 상태
        //users배열을 업데이트 - id값을 가지고 올것임
        //각 유저에 대하여 비교 - user.id가 action.id(action을 통해 받아온 id)와 같은지
        //그것이 같다면 최신값을 가지고있는 user의 active를 반전시킨다
        //같지 않다면 user을 그대로 유지하겟다
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
        //state를 그대로 가져오고 user을 가져와서 user.id와 action.id를 비교후 같지 않다면 그대로 두고 같다면 없애라
      };
    default:
      throw new Error("Unhandled action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextId = useRef(5);

  //비구조 할당을 통해 추출후 props로
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    //name과 value값을 e.target에서 추출
    //action값
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value
      // e.target에서 받아온 name, value값 사용
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current, //변화된 최신의 값을 가져온다
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);
  // 위의 함수에서 기존상태에 의존하는 값인 [username, email]을 넣어준다

  const onToggle = useCallback(id => {
    dispatch({
      type: "TOGGLE_USER",
      id
    });
  }, []);
  //디펜던시배열[]이 비여잇다는 것은 함수를 한번만들고 재사용callback할수 잇다는것

  const onRemove = useCallback(id => {
    dispatch({
      type: "REMOVE_USER",
      id
    });
  }, []);

  const count = useMemo(() => conuntActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;

//useReduce  vs  useState
//컴포넌트에서 관리하는 값이 하나거나 단순할 경우 - useState
//컴포넌트에서 관리하는 값잉 여러개거나 복잡하고 수정이 빈번할 경우 - useReduce
