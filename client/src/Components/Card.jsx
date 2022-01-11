import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, diets }) => {
  return (
    <Link to={`/recipes/${id}`}>
      <div>
        <h3>{name}</h3>
        <img src={image} alt={image} />
        <div>
          {diets && diets.length > 0 ? (
            diets.map((diet, i) => {
              if (typeof diet === "object") {
                return (
                  <div key={i}>
                    <span> {diet.name} </span>
                  </div>
                );
              }
              return (
                <div key={i}>
                  <span> {diet} </span>
                </div>
              );
            })
          ) : (
            <span> No Diets... </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
