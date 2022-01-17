import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecipes,
  getDiets,
  filterByDiets,
  orderBy,
  trueLoader,
} from "../Actions/index";
import Cards from "./Cards";
import NavBar from "./NavBar";
import Paged from "./Paged";
import styles from "./Home.module.css";
import Loader from "./Loader";

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);
  console.log(diets.length);
  const loader = useSelector((state) => state.loader);
  const [, setOrder] = useState(""); // Poder explicar esto
  const [currentPage, setCurrentPage] = useState(1);
  let recipesPerPage = 9;

  const indexOfLastCountry = currentPage * recipesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - recipesPerPage;
  const recipesQuantity = allRecipes.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paged = (page) => {
    setCurrentPage(page);
    console.log("the page was changed successfully");
  };

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
    return () => {
      dispatch(trueLoader());
    };
  }, [dispatch]);

  function handleFilterDiets(e) {
    e.preventDefault();
    dispatch(filterByDiets(e.target.value));
    setCurrentPage(1);
  }

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderBy(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  };

  function handleRefresh(e) {
    e.preventDefault();
    dispatch(getRecipes());
    dispatch(getDiets());
    setCurrentPage(1);
    dispatch(trueLoader());
  }

  return (
    <div className={styles.fullpage}>
      <div className={styles.navContainer}>
        <NavBar
          filterByDiets={handleFilterDiets}
          diets={diets}
          handleSort={handleSort}
          refresh={handleRefresh}
        />
      </div>
      <div className={styles.cardsContainer}>
        {loader ? (
          <Loader />
        ) : (
          <div>
            <Paged
              recipesPerPage={recipesPerPage}
              allRecipes={allRecipes}
              currentPage={currentPage}
              paged={paged}
            />
            <Cards allRecipes={recipesQuantity} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
