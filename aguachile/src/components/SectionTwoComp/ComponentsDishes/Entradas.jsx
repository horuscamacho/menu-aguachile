import React from "react";
import DishesContainer from "../Dishes/DishesContainer";
import { entradas } from "../../../data/db";


const Entradas = () => {
  console.log(entradas);
  return (
    <>
      {entradas.map((el) => (
        <DishesContainer key={el.id} data={el} />
      ))}
    </>
  );
};

export default Entradas;
