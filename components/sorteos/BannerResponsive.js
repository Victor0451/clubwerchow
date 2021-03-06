import React from "react";

const SorteosResponsive = () => {
  return (
    <div className="responsive">
      <div className="banner-sorteo">
        <img
          src="/img/sorteo.jpg"
          alt="Sorteo Club Werchow"
          className="image-banner"
        />
      </div>

      <div className="col-11 text-center mr-4">
        <a
          href="/sorteos/ganadores"
          className=" btn btn-secondary btn-block mt-4 mb-4"
          target=""
        >
          Ganadores Del Sorteo
        </a>
      </div>
    </div>
  );
};

export default SorteosResponsive;
