import React from 'react'
import DishesContainer from "../Dishes/DishesContainer";
import { bebidas, postres } from "../../../data/db";


const Bebidas = () => {
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
  )
}

export default Bebidas