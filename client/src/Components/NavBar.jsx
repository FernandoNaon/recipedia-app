import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "./NavBar.module.css";

const NavBar = ({ diets, filterByDiets, handleSort, refresh }) => {
  return (
    <div className={styles.navContainer}>
      <div>
        <button onClick={refresh} className={styles.title}>
          Recipedia 🍽️
        </button>
      </div>
      <div>
        <select className={styles.select} onChange={(e) => handleSort(e)}>
          <option value="DEFAULT">Order By</option>
          <option value="abc-asc">ABC ↑</option>
          <option value="abc-des">ABC ↓</option>
          <option value="score-asc">Score ↑</option>
          <option value="score-des">Score ↓</option>
        </select>
      </div>
      <div>
        <select className={styles.select} onChange={(e) => filterByDiets(e)}>
          <option value="DEFAULT" disabled>
            Diets
          </option>
          <option value="all">All</option>
          console.log(diets)
          {diets?.map((diets, i) => {
            return <option key={i} value={`${diets}`}>{`${diets}`}</option>;
          })}
        </select>
      </div>
      <SearchBar />
      <Link to="/create" className={styles.submit}>
        <button className={styles.submit}>Submit your recipe</button>
      </Link>
    </div>
  );
};

export default NavBar;
