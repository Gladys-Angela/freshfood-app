import React, { useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
const Meal = () => {
  const api = "https://backend65.herokuapp.com/meals";

  const [itemsList, setItemsList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  function searchByAlphabet(alphabet) {
    setIsLoading(true);
    fetch(`${api}?f=${alphabet}`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.length) {
          const filteredList = res.filter(
            (item) => item.strMeal.charAt(0) === alphabet
          );
          setItemsList(filteredList);
        } else {
          setItemsList([]);
        }
        setIsLoading(false);
      });
  }

  function searchByKeyword(evt) {
    setIsLoading(true);
    if (evt.key === "Enter") {
      const query = evt.target.value;
      fetch(`${api}?s=${query}`)
        .then((res) => res.json())
        .then((res) => {
          if (res && res.length) {
            const regex = new RegExp(`${query}*`, "i");
            const filteredList = res.filter((item) => {
              console.log(item.strMeal, regex.test(item.strMeal));
              return regex.test(item.strMeal);
            });
            console.log(filteredList);
            setItemsList(filteredList);
          } else {
            setItemsList([]);
          }
          setIsLoading(false);
        });
    }
  }

  return (
    <div className="main">
      <div className="heading">
        <h1>Search Your Food Recipe</h1>
        <h4>Treat yourself with the best food ever.</h4>
      </div>
      <div className="searchBox">
        <input type="search" className="search-bar" onKeyUp={searchByKeyword} />
      </div>
      <div className="container">
        {!isLoading &&
          itemsList.length &&
          itemsList.map((item) => {
            return <MealItem item={item} />;
          })}
      </div>
      <div className="indexContainer">
        <RecipeIndex alphaIndex={(alpha) => searchByAlphabet(alpha)} />
      </div>
    </div>
  );
};
export default Meal;