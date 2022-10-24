import React from "react";
import DishesContainer from "../Dishes/DishesContainer";
import { aguachiles, ceviches } from "../../../data/db";

const Aguachiles = () => {
 
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
