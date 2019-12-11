import React, { useReducer, useMemo, createContext } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import "./App.css";

function conuntActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter(user => user.active).length;
}

const initialState = {
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
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      throw new Error("Unhandled action");
  }
}

//CrateUser 컴포넌트에서 dispatch 직접 구현
export const UserDispatch = createContext(null);
// export const UserDispatch = React.createContext(null); - import 하지 않았을 경우

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [form, onChange, reset] = useInputs({
  //   username: "",
  //   email: ""
  // });
  // const { username, email } = form;

  // const nextId = useRef(5);

  const { users } = state;

  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type: "CREATE_USER",
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email
  //     }
  //   });
  //   nextId.current += 1;
  //   reset();
  // }, [username, email, reset]);

  const count = useMemo(() => conuntActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
