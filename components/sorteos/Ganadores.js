import React from "react";

const Ganadores = () => {
  return (
    <div className="container">
      <h2 className="mt-4 mb-4 text-center">
        Ganadores del sorteo por el dia del niño. ¡Felicitaciones!
      </h2>
      <div className="heading-underline"></div>

      <div className="mb-4 d-flex justify-content-center">
        <img
          className="imagen-ganadores"
          src="/ganadores/15-08/GANADORES.jpg"
          alt="clubwerchow ganadores sorteo dia del niño"
        />
      </div>

      <br />

      <div className="heading-underline"></div>

      <div className="col-12 row">
        <div className="col-6">
          <img
            className="ganadores-fotos"
            src="/ganadores/15-08/2.jpg"
            alt="clubwerchow ganadores sorteo dia del niño"
          />
        </div>

        <div className="col-6">
          <img
            className="ganadores-fotos"
            src="/ganadores/15-08/1.jpg"
            alt="clubwerchow ganadores sorteo dia del niño"
          />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Ganadores;
