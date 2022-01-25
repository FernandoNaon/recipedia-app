import React from "react";
import styles from "./Loader.module.css";
import gif from "../Assets/86730122.gif";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src={gif} alt="Loading..." />
    </div>
  );
};

export default Loader;
