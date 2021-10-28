import React from "react";

export const IncomplateTodo = (props) => {
  const { incomplateTodos, onClickComplate, onClickDelete } = props;
  return (
    <div className="incomplate-area">
      <p className="title">未完了</p>
      <ul>
        {incomplateTodos.map((todo, i) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplate(i)}>完了</button>
                <button onClick={() => onClickDelete(i)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
