import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName, trueLoader } from "../Actions";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmitName = (e) => {
    e.preventDefault();
    dispatch(getByName(name));
    setName("");
    e.target.reset();
    dispatch(trueLoader());
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmitName(e)}>
        <input
          className={styles.searcher}
          onChange={(e) => handleInputChangeName(e)}
          value={name}
          type="text"
          placeholder="Find a recipe..."
        ></input>
        <button className={styles.btn}>🔍</button>
      </form>
    </div>
  );
};

export default SearchBar;
