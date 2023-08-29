import React from "react";
import TodoListItem from "./TodoListItem.js";
import style from "./TodoList.module.css";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <>
      <div className={style.lines}></div>
      <ul className={style.list}>
        {todoList.map((toDoItem) => {
          return (
            <TodoListItem
              key={toDoItem.id}
              toDoItem={toDoItem}
              onRemoveTodo={onRemoveTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
