import { useState } from "react";
import PropTypes from "prop-types";
import style from "./TodoListItem.module.css";
import EditTodoForm from "./EditTodoForm";

const TodoListItem = ({ toDoItem, onRemoveTodo, onEditTodo, view }) => {
  const [showForm, setShowForm] = useState(false);
  const [showEditButton, setShowEditButton] = useState(true);

  const handleTodoForm = () => {
    setShowForm(true);
    setShowEditButton(false);
  };

  const handleCheckbox = (event) => {
    toDoItem.completed = event.target.checked;
    const type = "check";
    onEditTodo(toDoItem, type);
  };

  return (
    <>
      <li className={style.ListItem}>
        <input
          type="checkbox"
          className={style.checkbox}
          onChange={handleCheckbox}
        ></input>
        {toDoItem.title}{" "}
        {view === "upcoming" && <span>due by {toDoItem.deadline}</span>}
        <div className={style.buttonsContainer}>
          {showEditButton && (
            <button onClick={handleTodoForm} className={style.editButton}>
              edit
            </button>
          )}
          <button
            onClick={() => onRemoveTodo(toDoItem.id)}
            className={style.deleteButton}
          >
            delete
          </button>
        </div>
        <div>
          {showForm && (
            <EditTodoForm
              onEditTodo={onEditTodo}
              setShowForm={setShowForm}
              setShowEditButton={setShowEditButton}
              toDoItem={toDoItem}
            />
          )}
        </div>
      </li>
    </>
  );
};

TodoListItem.propTypes = {
  toDoItem: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
};

export default TodoListItem;
