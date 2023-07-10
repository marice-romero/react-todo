import React from "react";

const TodoListItem = ({ toDoItem, onRemoveTodo }) => (
  <>
    <li>
      {toDoItem.title}{" "}
      <button onClick={() => onRemoveTodo(toDoItem.id)}>Remove</button>
    </li>
  </>
);

export default TodoListItem;
