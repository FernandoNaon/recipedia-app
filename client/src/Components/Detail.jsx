import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getDetail } from "../Actions";

const Detail = () => {
  const dispatch = useDispatch();

  const recipeDetail = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getDetail(id));
    // eslint-disable-next-line
  }, []);
  console.log(recipeDetail);

  let { id } = useParams();

  return (
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <div>
        <h1>{recipeDetail.name}</h1>
        <img src={recipeDetail.image} alt={recipeDetail.name} />
        <div>
          <h4>summary</h4>
          <h6>{recipeDetail.summary?.replace(/<[^>]*>/g, "")}</h6>
        </div>
        <div>
          <h4>How good it is</h4>
          <h6>{recipeDetail.rating}</h6>
        </div>
        <div>
          <h4>How healthy it is</h4>
          <h6>{recipeDetail.healthScore}</h6>
        </div>
        <div>
          {recipeDetail.steps ? (
            <div>
              <h3>Steps: </h3>
              <ul>
                {Array.isArray(recipeDetail.steps) ? (
                  recipeDetail.steps.map((e) => {
                    return <li key={e.number}>{e.step}</li>;
                  })
                ) : (
                  <li>{recipeDetail.steps}</li>
                )}
              </ul>
            </div>
          ) : (
            <br />
          )}
        </div>
        <div>
          {!recipeDetail.diets || !recipeDetail.createdInDb ? (
            <div>
              <h3>Diets</h3>
              {!recipeDetail.createdInDb
                ? recipeDetail.diets + " "
                : recipeDetail.diets.map((e) => {
                    return <h6 key={e.name}>{e.name}</h6>;
                  })}
            </div>
          ) : (
            <br />
          )}
        </div>
        <div>
          {recipeDetail.dishType ? (
            <div>
              <h4>Dish Type: </h4>
              {recipeDetail.dishType?.map((e) => {
                return <h6 key={e}>{e}</h6>;
              })}
            </div>
          ) : (
            <br />
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
