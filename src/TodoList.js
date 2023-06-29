import React from "react";
import TodoListItem from "./TodoListItem.js";

let todoList = [
  {
    id: "1",
    title: "Complete React assignment",
  },
  { id: "2", title: "Pick up lunch" },
  {
    id: "3",
    title: "Play Zelda",
  },
];

function TodoList() {
  return (
    <ul>
      {todoList.map(function (toDoItem) {
        return <TodoListItem key={toDoItem.id} title={toDoItem.title} />;
      })}
    </ul>
  );
}

export default TodoList;
