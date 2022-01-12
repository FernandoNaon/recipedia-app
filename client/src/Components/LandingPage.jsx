import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Recipedia</h1>
        <div className={styles.btncontainer}>
          <Link to="/home">
            <button className={styles.lndbtn}>Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
