import React, { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel.js";
import style from "./AddTodoForm.module.css";

function AddTodoForm({ onAddTodo }) {
  const [todo, setTodo] = useState({
    title: "",
    deadline: "",
    completed: false,
  });

  function handleInputChange(event) {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo(todo);

    // setTodoTitle("");
    setTodo({
      title: "",
      deadline: "",
      completed: false,
    });
  }

  return (
    <div className={style.paper}>
      <h1>add more sh*t to do</h1>
      <div className={style.form}>
        <div className={style.lines}></div>
        <form onSubmit={handleAddTodo}>
          <div className={style.formRow}>
            <InputWithLabel
              focus={true}
              inputType={"text"}
              todoType={"title"}
              value={todo.title}
              handleInputChange={handleInputChange}
            >
              title
            </InputWithLabel>
          </div>
          <div className={style.formRow}>
            <label htmlFor="deadline">deadline</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={todo.deadline}
              onChange={handleInputChange}
              className={style.formInput}
            ></input>
          </div>
          <div className="buttonContainer">
            <button type="submit" className={style.submitButton}>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;
