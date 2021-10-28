import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./conpornents/InputTodo";
import { IncomplateTodo } from "./conpornents/IncomplateTodo";
import { ComplateTodo } from "./conpornents/ComplateTodo";

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
      <p style={{ color: "red" }}>消化しろ。</p>
      <IncomplateTodo
        incomplateTodos={incomplateTodos}
        onClickComplate={onClickComplate}
        onClickDelete={onClickDelete}
      />
      <ComplateTodo complateTodos={complateTodos} onClickBack={onClickBack} />
    </>
  );
};
