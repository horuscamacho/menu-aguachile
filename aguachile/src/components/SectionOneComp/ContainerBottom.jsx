import React from "react";
import NavComponent from "./NavComponent/NavComponent";

const ContainerBottom = () => {
  const iconos = [
    {id:1,className:"flaticon-002-bread", route: "/"},
    {id:2, className:"flaticon-004-jelly", route: "/entradas"},
    {id:3, className:"flaticon-001-shrimp", route: ""},
    {id:4, className:"flaticon-003-beer"},
    {id:5, className:"flaticon-005-fire"},
  ];

  return (
    <div className="container-nav-bottom">
      {iconos.map((el) => <NavComponent key={el.id} data={el}  />)}
    </div>
  );
};

export default ContainerBottom;
