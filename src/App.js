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

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
