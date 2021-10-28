import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./conpornents/InputTodo";
import { Incomlate } from "./conpornents/I";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState([]);
  const [complateTodos, setComplateTodos] = useState([]);

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
  const onClickBack = (i) => {
    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(i, 1);

    const newIncomplateTodos = [...incomplateTodos, complateTodos[i]];
    setIncomplateTodos(newIncomplateTodos);
    setComplateTodos(newComplateTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
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
