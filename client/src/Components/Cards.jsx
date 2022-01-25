import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
// import { useSelector } from "react-redux";
// import Loader from "./Loader";
// import Error from "./Error";

const Cards = ({ allRecipes }) => {
  return (
    <div>
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
    </div>
  );
};

export default Cards;
