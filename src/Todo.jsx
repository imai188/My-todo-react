import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

// Todoアプリのメインコンポーネント
export const Todo = () => {
  // 各Todoの状態管理
  const [todoText, setTodoText] = useState(""); // テキストボックスの内容
  const [incompleteTodos, setIncompleteTodos] = useState([]); // 未完了Todo
  const [completeTodos, setCompleteTodos] = useState([]); // 完了Todo

  // テキストボックスの内容変更ハンドラー
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンの処理
  const onClickAdd = () => {
    if (todoText === "") return; // 空入力は無視
    if (incompleteTodos.length >= 5) return; // 未完了リストが5件以上の場合は追加処理停止
    const newTodos = [...incompleteTodos, todoText]; // 現未完了リストに新しいTodo追加
    setIncompleteTodos(newTodos);
    setTodoText(""); // テキストボックスを空にリセット
  };

  // 削除ボタンの処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); // 指定のindexのTodoを削除
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンの処理
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1); // 未完了リストから削除

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]; // 完了リストに追加
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタンの処理
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1); // 完了リストから削除

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]; // 未完了リストに追加
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 未完了のTodo5件超えチェック
  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      {/* 入力エリア */}
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd} 
        disabled={isMaxLimitIncompleteTodos} 
      />
      {/* Todo5個までメッセージ */}
      {isMaxLimitIncompleteTodos && (
        <p style={{ color: "#777bb1", fontWeight: "bold" }}>
          You can only register up to 5 Todos!
        </p>
      )}
      {/* 未完了Todo */}
      <IncompleteTodos 
        todos={incompleteTodos} 
        onClickComplete={onClickComplete} 
        onClickDelete={onClickDelete} 
      />
      {/* 完了Todo */}
      <CompleteTodos 
        todos={completeTodos} 
        onClickBack={onClickBack} 
      />
    </>
  );
};