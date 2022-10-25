import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/AppContext";

const NavComponent = (datos) => {
  const { state } = useContext(AppContext)
  const {data} = datos
  const [clase, setClase] = useState()

  function changeActive(){
    if(state.route === "/entradas" && data.id === 1){
      setClase("container-nav-item active")
    } else if(state.route === "/platillos" && data.id === 2){
      setClase("container-nav-item active")
    } else if(state.route === "/aguachiles" && data.id === 3){
      setClase("container-nav-item active")
    } else if(state.route === "/bebidas" && data.id === 4){
      setClase("container-nav-item active")
    } else {
      setClase("container-nav-item")
    }
  }
useEffect(() => {
  changeActive()
},[clase])

  return (
    <div className={clase}>
      <a href={data.route}>
        <i className={data.className}></i>
        <p>{data.name}</p>
      </a>
    </div>
  );
};

export default NavComponent;
