import React from "react";
import styles from "./Error.module.css";
import image from "../Assets/error.jpeg";

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h3 className={styles.title}>Sorry! No recipes founded</h3>
        <img className={styles.cardImage} src={image} alt="Recipe not found" />
        <div className={styles.diets}></div>
      </div>
    </div>
  );
};

export default Error;
