import React, { useContext, useEffect } from "react";
import DishesContainer from "../Dishes/DishesContainer";
import { bebidas, postres } from "../../../data/db";
import { useLocation } from "react-router-dom";
import AppContext from "../../../context/AppContext";

const Bebidas = () => {
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
      <h1>Bebidas</h1>
      {bebidas.map((el) => (
        <DishesContainer key={el.id} data={el} />
      ))}
      <h1>Postres</h1>
      {postres.map((el) => (
        <DishesContainer key={el.id} data={el} />
      ))}
    </>
  );
};

export default Bebidas;
