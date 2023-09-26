import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.js";
import TodoList from "./components/TodoList.js";
import AddTodoForm from "./components/AddTodoForm.js";
import styles from "./App.module.css";
import PropTypes from "prop-types";

function App({
  todoList,
  isLoading,
  addTodo,
  removeTodo,
  editTodo,
  upcomingTodoList,
  sortTasks,
  pastDueList,
}) {
  const [sortType, setSortType] = useState("");

  const handleSortChange = (event, list) => {
    setSortType(event.target.value);
    sortTasks(list, event.target.value, event.target.name);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar pastDueList={pastDueList} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className={styles.paper}>
                  <h1>get this sh*t done today</h1>
                  <div className={styles.sort}>
                    <span>sort by</span>
                    <select
                      value={sortType}
                      onChange={(e) => handleSortChange(e, todoList)}
                      name="todoList"
                    >
                      <option value="A-Z ascending">A-Z ascending</option>
                      <option value="A-Z descending">A-Z descending</option>
                    </select>
                  </div>
                  {isLoading ? (
                    <p className={styles.loading}>Loading...</p>
                  ) : (
                    <TodoList
                      todoList={todoList}
                      onRemoveTodo={removeTodo}
                      onAddTodo={addTodo}
                      onEditTodo={editTodo}
                    />
                  )}
                </div>
                {pastDueList.length > 0 && (
                  <div className={styles.paper}>
                    <h1>this sh*t is overdue</h1>
                    <div className={styles.sort}>
                      <span>sort by</span>
                      <select
                        value={sortType}
                        onChange={(e) => handleSortChange(e, pastDueList)}
                        name="pastDueList"
                      >
                        <option value="A-Z ascending">A-Z ascending</option>
                        <option value="A-Z descending">A-Z descending</option>
                      </select>
                    </div>
                    {isLoading ? (
                      <p className={styles.loading}>Loading...</p>
                    ) : (
                      <TodoList
                        todoList={pastDueList}
                        onRemoveTodo={removeTodo}
                        onAddTodo={addTodo}
                        onEditTodo={editTodo}
                      />
                    )}
                  </div>
                )}
              </>
            }
          />
          <Route
            path="/upcoming"
            element=<div className={styles.paper}>
              <h1>get this sh*t done later</h1>
              <div className={styles.sort}>
                <span>sort by</span>
                <select
                  value={sortType}
                  name="upcomingSort"
                  onChange={(e) => handleSortChange(e, upcomingTodoList)}
                >
                  <option value="A-Z ascending">A-Z ascending</option>
                  <option value="A-Z descending">A-Z descending</option>
                </select>
              </div>
              {isLoading ? (
                <p className={styles.loading}>Loading...</p>
              ) : (
                <TodoList
                  todoList={upcomingTodoList}
                  onRemoveTodo={removeTodo}
                  onAddTodo={addTodo}
                  onEditTodo={editTodo}
                />
              )}
            </div>
          />
          <Route
            path="/add"
            element={<AddTodoForm onAddTodo={addTodo} buttonType={"add"} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

App.propTypes = {
  todoList: PropTypes.array,
  isLoading: PropTypes.bool,
  addTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  editTodo: PropTypes.func,
  upcomingTodoList: PropTypes.array,
  sortTasks: PropTypes.func,
  pastDueList: PropTypes.array,
};

export default App;
