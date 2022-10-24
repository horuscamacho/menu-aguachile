import React from "react";
import Entradas from "./ComponentsDishes/Entradas";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PlatoFuerte from "./ComponentsDishes/PlatoFuerte";
import Aguachiles from "./ComponentsDishes/Aguachiles";
import Bebidas from "./ComponentsDishes/Bebidas";

const OverfloContainer = () => {
  return (
    <div className="menu-overflow-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Entradas />} />
          <Route path="/entradas" element={<Entradas />} />
          <Route path="/platillos" element={<PlatoFuerte />} />
          <Route path="/aguachiles" element={<Aguachiles />} />
          <Route path="/bebidas" element={<Bebidas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default OverfloContainer;
