import React from 'react'
import MealItem from './MealItem';
const Meal = () => {
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
      </div>
    </div>
    </>
  )
}
export default Meal;