import React from "react";
import FormSolicitud from "./FormSolicitud";
import Comercios from "./Comercios";

const ServiciosResponsive = () => {
  return (
    <div className=" services p-4">
      <div className="p-4">
        <div className="row mb-4">
          <a href="/responsive/solicitud">
            <img className="tamaño" src="/img/solicitud2.png"

            />
          </a>

        </div>

        <div className="row ">
          <a href="/responsive/comercios">
            <img className="tamaño" src="/img/empresas2.png" />
          </a>
        </div>
      </div>




      <div
        className="modal   fade "
        id="empresas"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl p-2">
          <div className="modal-content modalstyle border border-dark ">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body  ">
              <Comercios />
            </div>
            <div className="modal-footer ">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal  fade "
        id="solicitud"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl p-2">
          <div className="modal-content modalstyle border border-dark ">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body  ">
              <FormSolicitud />
            </div>
            <div className="modal-footer ">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
};

export default ServiciosResponsive;
