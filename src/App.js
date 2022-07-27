import React from 'react';
import "./component/style.css";
import Meal from './component/Meal';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Meal/>}/>
    </Routes>
    </>
  );
}

export default App;
