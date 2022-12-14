import React, { useContext, useEffect } from "react";
import DishesContainer from "../Dishes/DishesContainer";
import { sopas, tacos, tostadas, platillos, cocteles, extras } from "../../../data/db";
import { useLocation } from "react-router-dom";
import AppContext from "../../../context/AppContext";

const PlatoFuerte = () => {
  const { changeRoute } = useContext(AppContext)
  const location = useLocation()
  const changingRoute = payload => {
    changeRoute(payload)
  }
  useEffect(() => {
    changingRoute(location.pathname)
  },[location.pathname])
  return (
    <>
      <h1>Sopas</h1>
      {sopas.map((el) => (
        <DishesContainer key={el.id} data={el} />
      ))}
      <h1>Tacos</h1>
      {tacos.map((el) => (
        <DishesContainer key={el.id} data={el} />
      ))}
      <h1>Tostadas</h1>
      {tostadas.map((el) => (
        <DishesContainer key={el.id} data={el} />
      ))}
      <h1>Platillos</h1>
      {platillos.map((el) => (
        <DishesContainer key={el.id} data={el} />
      ))}
      <h1>Coctéles</h1>
      {cocteles.map((el) => (
        <DishesContainer key={el.id} data={el} />
      ))}
      <h1>Extras</h1>
      {extras.map((el) => (
        <DishesContainer key={el.id} data={el} />
      ))}
    </>
  );
};

export default PlatoFuerte;
