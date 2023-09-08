import React from "react";
import style from "./TodoListItem.module.css";

const TodoListItem = ({ toDoItem, onRemoveTodo }) => (
  <>
    <li className={style.ListItem}>
      {toDoItem.title}{" "}
      <button onClick={() => onRemoveTodo(toDoItem.id)}>Remove</button>
    </li>
  </>
);

export default TodoListItem;
