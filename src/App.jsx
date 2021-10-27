import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incomplateTodos, setIncomplateTodos] = useState(["わん", "つー"]);
  const [complateTodos, setComplateTodos] = useState(["すりー"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplate-area">
        <p className="title">未完了</p>
        <ul>
          {incomplateTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complate-area">
        <p className="title">完了</p>
        <ul>
          {complateTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
