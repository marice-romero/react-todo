import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem.js";
import style from "./TodoList.module.css";

function TodoList({ todoList, onRemoveTodo, onAddTodo, onEditTodo }) {
  return (
    <div className={style.listContainer}>
      <div className={style.lines}></div>
      <ul className={style.list}>
        {todoList.map((toDoItem) => {
          return (
            <TodoListItem
              key={toDoItem.id}
              toDoItem={toDoItem}
              onRemoveTodo={onRemoveTodo}
              onAddTodo={onAddTodo}
              onEditTodo={onEditTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  onAddTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
};

export default TodoList;
