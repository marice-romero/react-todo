import { useRef, useEffect } from "react";

const InputWithLabel = ({
  children,
  todoTitle,
  handleTitleChange,
  isFocused,
}) => {
  const inputRef = useRef();
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

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
