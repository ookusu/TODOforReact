import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState(["わん", "つー"]);
  const [complateTodos, setComplateTodos] = useState(["すりー"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText !== "") {
      const newTodos = [...incomplateTodos, todoText];
      setIncomplateTodos(newTodos);
      setTodoText("");
    }
  };
  const onClickDelete = (i) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(i, 1);
    setIncomplateTodos(newTodos);
  };
  const onClickComplate = (i) => {
    const newIncomplateTodos = [...incomplateTodos];
    newIncomplateTodos.splice(i, 1);

    const newComplateTodos = [...complateTodos, incomplateTodos[i]];
    setIncomplateTodos(newIncomplateTodos);
    setComplateTodos(newComplateTodos);
  };
  // const onClickBack = (i) => {
  //   const newComplateTodos = [...complateTodos];
  //   newComplateTodos.splice(i, 1);

  //   const newIncomplateTodos = [...incomplateTodos, complateTodos[i]];
  //   setIncomplateTodos(newIncomplateTodos);
  //   setComplateTodos(newComplateTodos);
  // };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
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
    </>
  );
};
