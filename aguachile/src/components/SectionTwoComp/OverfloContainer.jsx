import React from 'react'
import DishesContainer from './Dishes/DishesContainer'

const OverfloContainer = () => {
  return (
    <div className="menu-overflow-container">
    <DishesContainer />
    <DishesContainer />
    <DishesContainer />
    <DishesContainer />
    <DishesContainer />
    <DishesContainer />
  </div>
  )
}

export default OverfloContainer