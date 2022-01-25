import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, getDiets } from "../Actions";
import { validate } from "../Utils/Validate";
import styles from "./CreateRecipe.module.css";

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

  const handleInputChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));

    let errors = validate({ ...input, [e.target.name]: e.target.value });
    setErrors(errors);
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setInput((prevInput) => ({
        ...prevInput,
        diets: [...input.diets, e.target.value],
      }));
    }
  };

  const handleSubmit = (e) => {
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
  };

  return (
    <div className={styles.createBg}>
      <div className={styles.createBar}>
        <Link to="/home">
          <button className={styles.btn}>Recipedia 🍽️</button>
        </Link>
        <h1 className={styles.title}>Submit your recipe</h1>
        <Link to={"/about"}>
          <button className={styles.btn}>About</button>
        </Link>
      </div>
      <div className={styles.createBody}>
        <div className={styles.createContainer}>
          <div>
            <form onSubmit={handleSubmit}>
              <div className={styles.formContainer}>
                <div>
                  <label>Name:</label>
                  <input
                    className={styles.createInput}
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                {errors.name && (
                  <div className={styles.error}>{errors.name}</div>
                )}

                <div>
                  <label>Summary:</label>
                  <input
                    className={styles.createInput}
                    type="text"
                    value={input.summary}
                    name="summary"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                {errors.summary && (
                  <div className={styles.error}>{errors.summary}</div>
                )}

                <div>
                  <label>Image:</label>
                  <input
                    className={styles.createInput}
                    type="url"
                    value={input.image}
                    name="image"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>

                <div>
                  <label>How good is this:</label>
                  <input
                    className={styles.createInput}
                    type="number"
                    value={input.rating}
                    name="rating"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>

                {errors.rating && (
                  <div className={styles.error}>{errors.rating}</div>
                )}

                <div>
                  <label>How healthy is this:</label>
                  <input
                    className={styles.createInput}
                    type="number"
                    value={input.healthScore}
                    name="healthScore"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                {errors.healthScore && (
                  <div className={styles.error}>{errors.healthScore}</div>
                )}
                <div>
                  <label>Steps</label>
                  <input
                    className={styles.createInput}
                    type="text"
                    value={input.steps}
                    name="steps"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <h3 className={styles.titleTwo}>
                Select the type of diet for your recipe
              </h3>
              <div className={styles.dietsContainer}>
                {allDiets?.map((el) => (
                  <div key={el}>
                    <label>{el}</label>
                    <input
                      className={styles.checkInput}
                      type="checkbox"
                      value={el}
                      name="diets"
                      onChange={(e) => handleCheck(e)}
                    />
                  </div>
                ))}
              </div>
              <div>
                {input.name !== "" &&
                  !errors.name &&
                  !errors.summary &&
                  !errors.rating &&
                  !errors.healthScore && (
                    <button onClick={handleSubmit}>Submit</button>
                  )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
