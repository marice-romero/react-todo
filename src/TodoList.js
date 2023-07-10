import React from "react";
import TodoListItem from "./TodoListItem.js";

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((toDoItem) => {
        return <TodoListItem key={toDoItem.id} toDoItem={toDoItem} />;
      })}
    </ul>
  );
}

export default TodoList;
