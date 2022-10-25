import React, { useContext, useEffect,  } from "react";
import DishesContainer from "../Dishes/DishesContainer";
import { aguachiles, ceviches } from "../../../data/db";
import { useLocation } from "react-router-dom";
import AppContext from "../../../context/AppContext";

const Aguachiles = () => {
  const { changeRoute } = useContext(AppContext)
  const location = useLocation()
  const changingRoute = payload => {
    changeRoute(payload)
  }
  useEffect(() => {
    changingRoute(location.pathname)
  },[])
  
  return (
    <>
      <h1>Aguachiles</h1>
      {aguachiles.map((el) => (
        <DishesContainer key={el.id} data={el} />
      ))}
      <h1>Ceviches</h1>
      {ceviches.map((el) => (
        <DishesContainer key={el.id} data={el} />
      ))}
    </>
  );
};

export default Aguachiles;
