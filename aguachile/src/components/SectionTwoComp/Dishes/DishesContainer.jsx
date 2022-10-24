import React from 'react'


const DishesContainer = (datos) => {
  const {data} = datos
 
  return (
    <div className="container-dish">
      <div className="dish-image"></div>
      <div className="dish-info">
        <div className="dish-info-title">
          <h2>{data.producto}</h2>
        </div>
        <div className="dish-info-description">
          <p>{data.descripcion}</p>
        </div>
        <div className="dish-info-cost">
          <p>${data.costo}.00</p>
        </div>
      </div>
    </div>
  )
}

export default DishesContainer