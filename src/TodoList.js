import React from "react";
import TodoListItem from "./TodoListItem.js";

// let todoList = [
//   {
//     id: "1",
//     title: "Complete React assignment",
//   },
//   { id: "2", title: "Pick up lunch" },
//   {
//     id: "3",
//     title: "Play Zelda",
//   },
// ];

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
