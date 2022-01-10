import React from "react";
import Card from "./Card";

const Cards = ({ allRecipes }) => {
  return (
    <div>
      {allRecipes?.map((el) => {
        return (
          <div key={el.id}>
            <Card id={el.id} image={el.image} name={el.name} diets={el.diets} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
