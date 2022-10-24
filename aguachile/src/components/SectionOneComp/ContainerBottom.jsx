import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import NavComponent from "./NavComponent/NavComponent";

const ContainerBottom = () => {
  const iconos = [
    {id:1, name:"Entradas", className:"flaticon-002-bread", route: "/entradas"},
    {id:2, name: "Plato Fuerte", className:"flaticon-004-jelly", route: "/platillos"},
    {id:3, name: "Aguachiles y Ceviches", className:"flaticon-001-shrimp", route: "/aguachiles"},
    {id:4, name: "Bebidas y Postres", className:"flaticon-003-beer", route:"/bebidas"},
    {id:5, name: "Postres", className:"flaticon-005-fire"},
  ];

  return (
    <div className="container-nav-bottom">
    {iconos.map((el) => <NavComponent key={el.id} data={el}  />)}   
    </div>
  );
};

export default ContainerBottom;
