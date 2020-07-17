import React from "react";

const ServiciosResponsive = () => {
  return (
    <div className="responsive" id="features">
      <div className="p-4 jumbotron">
        <div className="narrow">
          <div className="row text-center ">
            <div className="col-12">
              <h3 className="heading">Secciones</h3>
              <div className="heading-underline"></div>
            </div>
            <div className="row mb-4 col-12 d-flex justify-content-between">
              <a href="/responsive/solicitud">
                <img className="tamaño" src="/img/solicitud2.png" />
              </a>

              <a href="/responsive/comercios">
                <img className="tamaño" src="/img/empresas2.png" />
              </a>

              <a href="/responsive/comercios">
                <img className="tamaño" src="/img/empresas2.png" />
              </a>

              <a href="/responsive/comercios">
                <img className="tamaño" src="/img/empresas2.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosResponsive;
