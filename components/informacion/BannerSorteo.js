import React from "react";

const BannerSorteo = () => {
  return (
    <div className="banner-sorteo">
      <img src="/img/sorteo.jpg" alt="Avatar" className="image-banner" />
      <div className="middle-banner">
        <hr className="mt-4 mb-4" />
        <h1 className="mb-4">Bases y Condiciones</h1>
        <button className="mt-4 btn btn-primary">Entrar</button>
        <hr className="mt-4 mb-4" />
      </div>
    </div>
  );
};

export default BannerSorteo;
