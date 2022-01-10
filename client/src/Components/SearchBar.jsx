import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName, trueLoader } from "../Actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  function handleSubmitName(e) {
    e.preventDefault();
    dispatch(getByName(name));
    setName("");
    e.target.reset();
    dispatch(trueLoader());
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmitName(e)}>
        <input
          onChange={(e) => handleInputChangeName(e)}
          value={name}
          type="text"
          placeholder="Recipe..."
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
