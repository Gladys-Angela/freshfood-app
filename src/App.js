import React from 'react';
import "./component/style.css";
import Meal from './component/Meal';
import {Routes,Route} from "react-router-dom";
import RecipeInfo from './component/RecipeInfo';
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Meal/>}/>
    <Route path="/:MealId" element={<RecipeInfo/>}/>
    </Routes>
    </>
  );
}

export default App;
