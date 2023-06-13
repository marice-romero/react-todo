import React from "react";

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
        return <li key={toDoItem.id}>{toDoItem.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;
