import React from 'react'

const DishesContainer = () => {
  return (
    <div className="container-dish">
      <div className="dish-image"></div>
      <div className="dish-info">
        <div className="dish-info-title">
          <h2>Aguachile Negro</h2>
        </div>
        <div className="dish-info-description">
          <p>Base salsa negras</p>
        </div>
        <div className="dish-info-cost">
          <p>$140.00</p>
        </div>
      </div>
    </div>
  )
}

export default DishesContainer