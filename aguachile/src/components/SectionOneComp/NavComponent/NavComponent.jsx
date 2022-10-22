import React from "react";

const NavComponent = (datos) => {
const {data} = datos
const clase = data.className
console.log(data)
  return (
    <div className="container-nav-item">
      <a href="/">
        <i className={data.className}></i>
        <p>Entradas</p>
      </a>
    </div>
  );
};

export default NavComponent;
