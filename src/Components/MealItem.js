import React from "react";
import { useNavigate } from "react-router-dom";

const MealItem = ({ item }) => {
  let navigate = useNavigate();
  return (
    <div
      className="card"
      key={item.idMeal}
      onClick={() => {
        navigate(`/${item.idMeal}`);
      }}
    >
      <img src={item.strMealThumb} alt="" />
      <h3>{item.strMeal}</h3>
    </div>
  );
};
export default MealItem;