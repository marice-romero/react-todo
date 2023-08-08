import { useRef, useEffect } from "react";

const InputWithLabel = ({ children, todoTitle, handleTitleChange }) => {
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <label htmlFor="todoTitle">{children} </label>
      <input
        ref={inputRef}
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      ></input>
    </>
  );
};
export default InputWithLabel;
