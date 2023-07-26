import React from "react";
import TodoListItem from "./TodoListItem.js";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
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
  );
}

export default TodoList;
