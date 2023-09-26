import { useState, useEffect } from "react";
import App from "./App";
import { toast } from "react-toastify";

const TodoContainer = () => {
  const [masterList, setMasterList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   new Promise((resolve, reject) =>
  //     setTimeout(
  //       () =>
  //         resolve({
  //           data: {
  //             todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
  //           },
  //         }),
  //       2000
  //     )
  //   )
  //     .then(() => {
  //       // setTodoList(result.data.todoList);
  //       setIsLoading(false);
  //     })
  //     .catch((reject) => {
  //       console.log(reject);
  //     });
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`,
        options
      );

      if (!response.ok) {
        toast.error(`error: ${response.status}`);
      }

      const data = await response.json();
      data.records.sort((objectA, objectB) => {
        if (objectA.fields.title < objectB.fields.title) {
          return -1;
        }
        if (objectA.fields.title > objectB.fields.title) {
          return 1;
        }

        return 0;
      });

      const todos = data.records.map((task) => {
        const newTask = {
          title: task.fields.title,
          deadline: task.fields.deadline,
          completed: task.fields.completed,
          id: task.id,
        };
        return newTask;
      });
      setMasterList(todos);
      setIsLoading(false);
      return todos;
    } catch (error) {
      console.log(error);
      toast.error("something went wrong, please try again later");
    }
  };

  useEffect(() => {
    if (!isLoading) {
      fetchData();
    }
  }, [isLoading]);

  // useEffect(() => {
  //   let todaysList = masterList.filter((task) => {
  //     return task.deadline === todaysDate && task.completed !== true;
  //   });
  //   let upcomingList = masterList.filter((task) => {
  //     return task.deadline > todaysDate && task.completed !== true;
  //   });
  //   let pastDueList = masterList.filter((task) => {
  //     return task.deadline < todaysDate && task.completed !== true;
  //   });

  //   setTodoList(masterList);
  //   setUpcomingTodoList(upcomingList);
  //   setPastDueList(pastDueList);
  // }, [masterList]);

  const addTodo = async (newTodo) => {
    // setTodoList([...todoList, newTodo]);
    try {
      const airtableData = {
        fields: {
          title: newTodo.title,
          deadline: newTodo.deadline,
        },
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
        body: JSON.stringify(airtableData),
      };

      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`,
        options
      );

      if (response.ok) {
        toast.success("task successfully added!");
      } else {
        toast.error(`error: ${response.status}`);
      }

      const dataResponse = await response.json();

      setMasterList([
        ...masterList,
        {
          title: newTodo.title,
          deadline: newTodo.deadline,
          id: dataResponse.id,
        },
      ]);

      return dataResponse;
    } catch (error) {
      console.log(error.message);
      toast.error("something went wrong, please try again later");
      return null;
    }
  };

  const removeTodo = async (id) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      };

      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`,
        options
      );
      const data = await response.json();
      if (response.status === 200) {
        toast.success("task deleted!");
        const newTodoList = masterList.filter((todoItem) => id !== todoItem.id);
        setMasterList(newTodoList);
      } else {
        toast.error(`error: ${response.status}`);
      }
      return data;
    } catch (error) {
      console.log(error);
      toast.error("something went wrong, please try again later");
    }
  };

  const editTodo = async (updatedTodo, type) => {
    try {
      const airtableData = {
        fields: {
          title: updatedTodo.title,
          deadline: updatedTodo.deadline,
          completed: updatedTodo.completed,
        },
      };

      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
        body: JSON.stringify(airtableData),
      };

      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${updatedTodo.id}`,
        options
      );
      const dataResponse = await response.json();
      if (response.ok) {
        fetchData();
        if (type === "check") {
          toast.success("task completed!");
        } else {
          toast.success("task edited!");
        }
      } else toast.error(`error: ${response.status}`);

      return dataResponse;
    } catch (error) {
      console.log(error);
      toast.error("something went wrong, please try again later");
    }
  };

  const sortTasks = (list, sortType) => {
    if (sortType === "A-Z ascending") {
      list.sort((objectA, objectB) =>
        objectA.title <= objectB.title ? -1 : 1
      );
    }
    if (sortType === "A-Z descending") {
      list.sort((objectA, objectB) =>
        objectA.title <= objectB.title ? 1 : -1
      );
    }
    // if (listName === "todoList") {
    //   setTodoList(sortedList);
    // }
    // if (listName === "upcomingList") {
    //   setUpcomingTodoList(sortedList);
    // }
  };

  return (
    <App
      // todoList={todoList}
      // upcomingTodoList={upcomingTodoList}
      // pastDueList={pastDueList}
      isLoading={isLoading}
      addTodo={addTodo}
      removeTodo={removeTodo}
      editTodo={editTodo}
      sortTasks={sortTasks}
      masterList={masterList}
    />
  );
};

export default TodoContainer;
