import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, getDiets } from "../Actions";
const CreateRecipe = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let allDiets = useSelector((state) => state.diets);
  let [input, setInput] = useState({
    name: "",
    summary: "",
    rating: "",
    healthScore: "",
    instructions: "",
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  function handleInputChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createRecipe(input));
    alert("Recipe created!");
    setInput({
      name: "",
      summary: "",
      rating: "",
      healthScore: "",
      instructions: "",
      diets: [],
    });
    history.push("/home");
  }

  return (
    <div>
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
      <h1>Submit your recipe</h1>
      <div>
        <h3>Diets</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>Summary:</label>
            <input
              type="text"
              value={input.summary}
              name="summary"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="text"
              value={input.image}
              name="image"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div>
            <label>How good is this recipe:</label>
            <input
              type="number"
              value={input.rating}
              name="rating"
              min="0"
              max="100"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div>
            <label>How healthy is this recipe:</label>
            <input
              type="number"
              value={input.healthScore}
              name="healthScore"
              min="0"
              max="100"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>Instructions</label>
            <input
              type="text"
              value={input.instructions}
              name="instructions"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          {allDiets?.map((el) => (
            <div>
              <input
                type="checkbox"
                value={el}
                name="diets"
                onChange={(e) => handleCheck(e)}
              />
              <label>{el}</label>
            </div>
          ))}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
