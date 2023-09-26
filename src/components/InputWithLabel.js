import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import style from "./AddTodoForm.module.css";

const InputWithLabel = ({ children, todoType, value, handleInputChange }) => {
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <label htmlFor={todoType}>{children} </label>
      <input
        ref={inputRef}
        id={todoType}
        name={todoType}
        type="text"
        value={value}
        onChange={handleInputChange}
        className={style.formInput}
      ></input>
    </>
  );
};

InputWithLabel.propTypes = {
  children: PropTypes.string,
  todoType: PropTypes.string,
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default InputWithLabel;
