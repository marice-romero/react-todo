import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem.js";
import style from "./TodoList.module.css";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <>
      <div className={style.lines}></div>
      <ul className={style.list}>
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
    </>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};

export default TodoList;
