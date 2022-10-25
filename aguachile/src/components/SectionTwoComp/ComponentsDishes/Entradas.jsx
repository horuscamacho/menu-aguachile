import React, { useContext, useEffect } from "react";
import DishesContainer from "../Dishes/DishesContainer";
import { entradas } from "../../../data/db";
import { useLocation } from "react-router-dom";
import AppContext from "../../../context/AppContext";

const Entradas = () => {
  const { changeRoute } = useContext(AppContext);
  const location = useLocation();
  const changingRoute = (payload) => {
    changeRoute(payload);
  };
  useEffect(() => {
    changingRoute(location.pathname);
  }, []);
  return (
    <>
      <h1>Entradas</h1>
      {entradas.map((el) => (
        <DishesContainer key={el.id} data={el} />
      ))}
    </>
  );
};

export default Entradas;
