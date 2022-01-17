import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.detailBg}>
        <div className={styles.bar}>
          <div>
            <Link to="/home">
              <button className={styles.btn}>Recipedia 🍽️</button>
            </Link>
          </div>
          <h1 className={styles.title}>About this SPA</h1>
          <Link to="/create">
            <button className={styles.btn}>Submit your recipe</button>
          </Link>
        </div>

        <div className={styles.detailContainer}>
          <h2>
            Recipedia is a Single Page Application developed on my own as part
            of a 3-week challenge at Henry Bootcamp.
          </h2>

          <h4>
            I used Reactjs for the Front End and Redux for state management.
          </h4>
          <h4> All components has been developed with CSS modules</h4>
          <h4>
            The SPA consumes data from the Spoonacular API through a backend
            developed in NodeJS, using ExpressJS.
          </h4>
          <h4>
            {" "}
            For the database I used PostgreSQL and Sequelize as ORM. • The
            project includes functionalities such as sorting, filtering,
            pagination, a search input, cards to see details from the selected
            recipe, and allows to create a recipe through a controlled form.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
