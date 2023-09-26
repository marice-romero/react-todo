import React from "react";
import ReactDOM from "react-dom/client";
import TodoContainer from "./TodoContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TodoContainer />
    <ToastContainer hideProgressBar="true" />
  </React.StrictMode>
);
