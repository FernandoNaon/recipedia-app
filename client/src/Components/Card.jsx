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
                    {" "}
                    <span> {diet.name} </span> <br />{" "}
                  </div>
                );
              }
              return (
                <div key={i}>
                  {" "}
                  <span> {diet} </span> <br />{" "}
                </div>
              );
            })
          ) : (
            <span> No Diets... </span>
          )}
        </div>

        {/* <div>
          {diets?.map((diets) => {
            return <h5>{`${diets}`}</h5>;
          })}
        </div> */}

        {/* <div>
          <h4>Diet Type: </h4>
          {createdInDb
            ? diets.map((e) => {
                return <h6 key={e}>{e}</h6>;
              })
            : diets?.map((e) => {
                return <h6 key={e.name}>{e.name}</h6>;
              })}
        </div> */}
      </div>
    </Link>
  );
};

export default Card;
