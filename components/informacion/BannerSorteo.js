import React from "react";

const BannerSorteo = () => {
  return (
    <div className="seccion">
      <div className=" container">
        <div className="banner-sorteo">
          <img src="/img/sorteo.jpg" alt="Avatar" className="image-banner" />
          <div className="middle-banner">
            <hr className="mt-4 mb-4" />
            <button className=" btn btn-primary">Entrar Para Mas Informacion</button>
            <hr className="mt-4 mb-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSorteo;
