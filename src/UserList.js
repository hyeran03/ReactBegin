import React from "react";

function User({ user, onRemove }) {
  const { username, email, id } = user;
  //   미리 추출하여 코드를 간결하게
  return (
    <div>
      <b>{username}</b> <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
      {/* 파마미터를 넣기 위해 새로운 함수를 만든다 
      - 버튼이 눌릴경우 다음의 함수를 호출할것이다 prop으로 받아온 onRemove를 id값을 파라미터로 넣어서 호출해줄것이다 */}
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}
export default UserList;
