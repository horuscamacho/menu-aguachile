import React from "react";

const ContainerBottom = () => {
  return (
    <div className="container-nav-bottom">
      <div className="container-nav-item active">
        <a href="/">
          <i className="flaticon-002-bread"></i>
          <p>Entradas</p>
        </a>
      </div>
      <div className="container-nav-item">
        <a href="/">
          <i className="flaticon-004-jelly"></i>
          <p>Plato Fuerte</p>
        </a>
      </div>
      <div className="container-nav-item">
        <a href="/">
          <i className="flaticon-001-shrimp"></i>
          <p>Aguachiles</p>
        </a>
      </div>
      <div className="container-nav-item">
        <a href="/">
          <i className="flaticon-003-beer"></i>
          <p>Bebidas</p>
        </a>
      </div>
      <div className="container-nav-item">
        <a href="/">
          <i className="flaticon-005-fire"></i>
          <p>Postres</p>
        </a>
      </div>
    </div>
  );
};

export default ContainerBottom;
