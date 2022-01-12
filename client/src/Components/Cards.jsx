import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import Error from "./Error";

const Cards = ({ allRecipes, diets }) => {
  return (
    <div>
      {allRecipes.length ? (
        <div className={styles.cardsContainer}>
          {allRecipes?.map((el) => {
            return (
              <div key={el.id}>
                <Card
                  id={el.id}
                  image={el.image}
                  name={el.name}
                  diets={el.diets}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Cards;
