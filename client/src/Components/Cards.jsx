import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import Loader from "./Loader";
// import Error from "./Error";

const Cards = ({ allRecipes, loader }) => {
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
};

export default Cards;
