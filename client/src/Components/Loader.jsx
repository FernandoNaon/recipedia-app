import React from "react";
import styles from "./Loader.module.css";
import gif from "../Assets/loading gif 1.gif";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src={gif} alt="Loading..." />
    </div>
  );
};

export default Loader;
