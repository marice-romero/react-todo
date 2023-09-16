import React from "react";
import PropTypes from "prop-types";
import style from "./TodoListItem.module.css";

const TodoListItem = ({ toDoItem, onRemoveTodo }) => (
  <>
    <li className={style.ListItem}>
      {toDoItem.title}{" "}
      <button onClick={() => onRemoveTodo(toDoItem.id)}>Remove</button>
    </li>
  </>
);

TodoListItem.propTypes = {
  toDoItem: PropTypes.string,
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
