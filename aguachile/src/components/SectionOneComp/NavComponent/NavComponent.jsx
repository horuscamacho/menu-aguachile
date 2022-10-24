import React, { useState } from "react";



const NavComponent = (datos) => {
const[active, setActive] = useState("container-nav-item")
const {data} = datos
const path = window.location.pathname
console.log("Clase desde data", data.route)
console.log("Window URL", path)
const claseActive = `container-nav-item active`;
console.log(claseActive)
function setingActive() {
  if(path === data.url) return setActive(claseActive)
}
// let {name} = useParams()
// console.log(name)
// console.log(clase)
// console.log(data)
setingActive()
  return (
    <div className={claseActive}>
      <a href={data.route}>
        <i className={data.className}></i>
        <p>{data.name}</p>
      </a>
    </div>
  );
};

export default NavComponent;
