import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
// import gif from "../Assets/Ingredients.gif";

const LandingPage = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.bg}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Recipedia</h1>
          {/* <img src={gif} alt="gif" className={styles.gif} /> */}
          <div className={styles.btncontainer}>
            <Link to="/home">
              <button className={styles.lndbtn}>Start</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
