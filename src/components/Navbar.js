import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import StreakCounter from "./StreakCounter";
import PropTypes from "prop-types";

const Navbar = ({ pastDueList }) => {
  return (
    <div className={styles.navbar}>
      <h5>get sh*t done</h5>

      <div className={styles.navlinks}>
        <Link to="/">today's sh*t</Link>
        <Link to="/upcoming">upcoming sh*t</Link>
        <Link to="/add">add sh*t</Link>
      </div>
      <div className={styles.streakCounter}>
        <StreakCounter pastDueList={pastDueList} />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  pastDueList: PropTypes.array,
};

export default Navbar;
