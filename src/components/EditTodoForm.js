import { useState } from "react";
import style from "./EditTodoForm.module.css";
import PropTypes from "prop-types";

const EditTodoForm = ({
  onEditTodo,
  setShowForm,
  setShowEditButton,
  toDoItem,
}) => {
  const [currentTodo, setCurrentTodo] = useState(toDoItem);

  function handleInputChange(event) {
    setCurrentTodo({ ...currentTodo, [event.target.name]: event.target.value });
  }

  const handleEditTodo = (event) => {
    event.preventDefault();
    onEditTodo(currentTodo);
    setShowForm(false);
    setShowEditButton(true);
    setCurrentTodo({});
  };
  return (
    <form onSubmit={handleEditTodo}>
      <label htmlFor="title" className={style.editLabel}>
        title
      </label>
      <input
        isFocused
        type="text"
        id="title"
        name="title"
        value={currentTodo.title}
        onChange={handleInputChange}
        className={style.editInput}
      ></input>
      <label htmlFor="deadline" className={style.editLabel}>
        deadline
      </label>
      <input
        type="date"
        id="deadline"
        name="deadline"
        value={currentTodo.deadline}
        onChange={handleInputChange}
        className={style.editInput}
      ></input>
      <button type="submit">submit</button>
    </form>
  );
};

EditTodoForm.propTypes = {
  onEditTodo: PropTypes.func,
  setShowForm: PropTypes.func,
  setShowEditButton: PropTypes.func,
  toDoItem: PropTypes.array,
};

export default EditTodoForm;
