import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = ({ diets, filterByDiets, handleSort, refresh }) => {
  return (
    <div>
      <button onClick={refresh}>Refresh</button>
      <div>
        <select onChange={(e) => filterByDiets(e)}>
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
      <div>
        <select onChange={(e) => handleSort(e)}>
          <option value="DEFAULT">Order By</option>
          <option value="abc-asc">ABC ↑</option>
          <option value="abc-des">ABC ↓</option>
          <option value="score-asc">Score ↑</option>
          <option value="score-des">Score ↓</option>
        </select>
      </div>
      <SearchBar />
      <Link to="/create">
        <button>Submit your recipe</button>
      </Link>
    </div>
  );
};

export default NavBar;
