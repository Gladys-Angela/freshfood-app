import React, { useEffect } from 'react';
import { useState } from "react";
import MealItem from './MealItem';
import RecipeIndex from './RecipeIndex';
const Meal = () => {
  const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(data=>{
      console.log(data.meals);
    })
    
  },[url])
 
  return (
    <>
    <div className='main'>
      <div className='heading'>
        <h1>Search Your Food Recipe</h1>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci odit dolorum molestias officia.</h4>
      </div>
      <div className="searchBox">
        <input type="search" className="search-bar" />
      </div>
      <div className="container">
              <MealItem />
              <MealItem />
              <MealItem />
              <MealItem />
              <MealItem />
              <MealItem />
      </div>
      <div className="indexContainer">
               <RecipeIndex/>
      </div>
    </div>
    </>
  )
}
export default Meal;