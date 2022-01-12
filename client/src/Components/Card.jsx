import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import Error from "./Error";

const Card = ({ id, image, name, diets }) => {
  return (
    <Link to={`/recipes/${id}`} style={{ textDecoration: "none" }}>
      <div className={styles.cardContainer}>
        <h3 className={styles.title}>{name}</h3>
        <img className={styles.cardImage} src={image} alt={image} />
        <div className={styles.diets}>
          {diets && diets.length > 0 ? (
            diets.map((diet, i) => {
              if (typeof diet === "object") {
                return (
                  <div key={i}>
                    <span> {diet.name} </span>
                  </div>
                );
              } else {
                return (
                  <div key={i}>
                    <span> {diet} </span>
                  </div>
                );
              }
            })
          ) : (
            <Error />
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
