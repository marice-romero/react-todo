import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const StreakCounter = ({ masterList, todaysDate }) => {
  const [streak, setStreak] = useState(0);

  // in the future will connect this to node
  // will run a function at midnight and check if all tasks are completed

  // get all tasks in the past
  const pastTasks = masterList.filter((task) => task.deadline < todaysDate);
  // sort by oldest
  const chronList = [...pastTasks].sort((objectA, objectB) =>
    objectA.deadline <= objectB.deadline ? -1 : 1
  );
  // get all unique dates
  const uniqueDates = chronList
    .map((todo) => todo.deadline)
    .filter(
      (date, index, current_date) => current_date.indexOf(date) === index
    );

  useEffect(() => {
    let counter = 0;
    let tasksWithCurrentDate = [];

    uniqueDates.forEach((date) => {
      chronList.forEach((todo) => {
        // create a new array with tasks for each day
        if (todo.deadline === date) {
          tasksWithCurrentDate.push(todo);
        }
      });

      if (tasksWithCurrentDate.every((task) => task.completed)) {
        counter++;
      } else {
        counter = 0;
      }
    });

    setStreak(counter);
  }, [chronList, uniqueDates]);

  return (
    <span>
      <FontAwesomeIcon icon={faFire} style={{ color: "white" }} /> {}getting
      sh*t done for {streak} {streak === 1 ? "day" : "days"}
    </span>
  );
};

StreakCounter.propTypes = {
  pastDueList: PropTypes.array,
};

export default StreakCounter;
