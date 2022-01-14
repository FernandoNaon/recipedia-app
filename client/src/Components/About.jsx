import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.detailBg}>
        <div className={styles.bar}>
          <div>
            <Link to="/home">
              <button className={styles.btn}>Recipedia 🍽️</button>
            </Link>
          </div>
          <h1 className={styles.title}>About this SPA</h1>
          <Link to="/create">
            <button className={styles.btn}>Submit your recipe</button>
          </Link>
        </div>

        <div className={styles.detailContainer}></div>
      </div>
    </div>
  );
};

export default About;
