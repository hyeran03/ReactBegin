import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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
  return (
    // <div>
    //   <div>
    //     <b>{users[0].username}</b> <span>({users[0].email})</span>
    //   </div>
    //   <div>
    //     <b>{users[1].username}</b> <span>({users[1].email})</span>
    //   </div>
    //   <div>
    //     <b>{users[2].username}</b> <span>({users[2].email})</span>
    //   </div>

    //   <div>
    //     <b>{users[3].username}</b> <span>({users[3].email})</span>
    //   </div>
    // </div>
    <div>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
      {users.map((user, index) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}
export default UserList;
