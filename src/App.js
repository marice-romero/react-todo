import * as React from "react";
import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm.js";

function App() {
  const [todoList, setTodoList] = React.useState([]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
