import React from "react";

export const ComplateTodo = (props) => {
  const { complateTodos, onClickBack } = props;
  return (
    <div className="complate-area">
      <p className="title">完了</p>
      <ul>
        {complateTodos.map((todo, i) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickBack(i)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
