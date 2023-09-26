import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const StreakCounter = ({ pastDueList }) => {
  const [streak, setStreak] = useState(0);

  // need to fix this!
  useEffect(() => {
    if (pastDueList.length === 0) {
      setStreak(streak + 1);
    }
    if (pastDueList.length > 0) {
      setStreak(0);
    }
  }, [pastDueList]);

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
