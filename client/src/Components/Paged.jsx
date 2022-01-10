import React from "react";
import "./Paged.css";

const Paged = ({ recipesPerPage, allRecipes, paged }) => {
  const pageAmount = [];
  const pageQuantity = Math.ceil(allRecipes.length / recipesPerPage);

  for (let i = 1; i < pageQuantity + 1; i++) {
    pageAmount.push(i);
  }
  return (
    <div className="pagedContainer">
      {pageAmount?.map((number) => {
        return (
          <div key={number}>
            <p className="btn" onClick={() => paged(number)}>
              {number}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Paged;
