import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, getDiets } from "../Actions";

export function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "Title is required!";
  }

  if (!input.summary) {
    errors.summary = "Summary is required!";
  }

  if (!input.rating) {
    errors.rating = "Rating is required!";
  } else if (input.rating < 0 || input.rating > 100) {
    errors.rating = "Rating has to be between 0 and 100!";
  }

  if (!input.healthScore) {
    errors.healthScore = "Healthy Score is required!";
  } else if (input.healthScore < 0 || input.healthScore > 100) {
    errors.healthScore = "Healthy Score has to be between 0 and 100!";
  }

  return errors;
}

const CreateRecipe = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allDiets = useSelector((state) => state.diets);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    summary: "",
    rating: "",
    healthScore: "",
    steps: "",
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  // function handleInputChange(e) {
  //   e.preventDefault();
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  const handleInputChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));

    let errors = validate({ ...input, [e.target.name]: e.target.value });
    setErrors(errors);
  };

  function handleCheck(e) {
    setInput({
      ...input,
      diets: [...input.diets, e.target.value],
    });
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
      steps: "",
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
              type="url"
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
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div>
            <label>How healthy is this recipe:</label>
            <input
              type="number"
              value={input.healthScore}
              name="healthScore"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>Steps</label>
            <input
              type="text"
              value={input.steps}
              name="steps"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          {allDiets?.map((el) => (
            <div key={el}>
              <input
                type="checkbox"
                value={el}
                name="diets"
                onChange={(e) => handleCheck(e)}
              />
              <label>{el}</label>
            </div>
          ))}
          {/* <button type="submit">Submit</button> */}
          <div>
            {/* Mensajes de error */}
            {errors.name && <div>{errors.name}</div>}
            {errors.summary && <div>{errors.summary}</div>}
            {errors.rating && <div>{errors.rating}</div>}
            {errors.healthScore && <div>{errors.healthScore}</div>}

            {input.name !== "" &&
              !errors.name &&
              !errors.summary &&
              !errors.rating &&
              !errors.healthScore && (
                <button onClick={handleSubmit}>Create</button>
              )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
