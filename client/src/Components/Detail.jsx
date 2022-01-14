import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getDetail } from "../Actions";
import styles from "./Detail.module.css";
import Loader from "./Loader";

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
      {!recipeDetail.length ? (
        <div className={styles.detailBg}>
          <div className={styles.bar}>
            <div>
              <Link to="/home">
                <button className={styles.btn}>Recipedia 🍽️</button>
              </Link>
            </div>
            <h1 className={styles.title}>{recipeDetail.name}</h1>
            <Link to="/create">
              <button className={styles.btn}>Submit your recipe</button>
            </Link>
          </div>
          <div className={styles.detailContainer}>
            <div className={styles.side}>
              <img
                className={styles.detailImg}
                src={recipeDetail.image}
                alt={recipeDetail.name}
              />
              <div>
                <h4 className={styles.titleTwo}>Summary</h4>
                <h6 className={styles.summary}>
                  {recipeDetail.summary?.replace(/<[^>]*>/g, "")}
                </h6>
              </div>
            </div>
            <div className={styles.side}>
              <div>
                {recipeDetail.steps ? (
                  <div>
                    <h4 className={styles.titleTwo}>Steps</h4>
                    <ul className={styles.paragraph}>
                      {Array.isArray(recipeDetail.steps) ? (
                        recipeDetail.steps.map((e) => {
                          return (
                            <li key={e.number}>
                              {e.number} - {e.step}
                            </li>
                          );
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

              <div className={styles.boxInf}>
                {recipeDetail.diets || recipeDetail.createdInDb ? (
                  <div>
                    <h4 className={styles.titleTwo}>Diets</h4>
                    {recipeDetail.diets || recipeDetail.createdInDb ? (
                      recipeDetail?.diets.map((diet, i) => {
                        if (typeof diet === "object") {
                          return (
                            <div key={i}>
                              <h6> {diet.name} </h6>
                            </div>
                          );
                        } else {
                          return (
                            <div key={i}>
                              <h6> {diet} </h6>
                            </div>
                          );
                        }
                      })
                    ) : (
                      <br />
                    )}
                  </div>
                ) : (
                  <br />
                )}
                <div>
                  {recipeDetail.dishType ? (
                    <div>
                      <h4 className={styles.titleTwo}>Dish Type: </h4>
                      {recipeDetail.dishType?.map((e) => {
                        return (
                          <h6 className={styles.text} key={e}>
                            {e}
                          </h6>
                        );
                      })}
                    </div>
                  ) : (
                    <br />
                  )}
                </div>
                <div>
                  <h4 className={styles.titleTwo}>How good it is</h4>
                  <h6 className={styles.text}>{recipeDetail.rating}/100</h6>
                </div>
                <div>
                  <h4 className={styles.titleTwo}>How healthy it is</h4>
                  <h6 className={styles.text}>
                    {recipeDetail.healthScore}/100
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Detail;
