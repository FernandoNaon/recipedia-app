import React from "react";
import styles from "./Paged.module.css";

const Paged = ({ recipesPerPage, allRecipes, paged }) => {
  const pageAmount = [];
  const pageQuantity = Math.ceil(allRecipes.length / recipesPerPage);

  for (let i = 1; i < pageQuantity + 1; i++) {
    pageAmount.push(i);
  }
  return (
    <div>
      <div className={styles.pagedContainer}>
        {pageAmount?.map((number) => {
          return (
            <div key={number}>
              <p className={styles.btn} onClick={() => paged(number)}>
                {number}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Paged;
