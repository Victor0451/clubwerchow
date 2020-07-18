import React from "react";
import FormSolicitud from "./FormSolicitud";
import ListadoComercios from "./ListadoComercios";
import Iconos from "./Iconos";
import IconosResponsive from "./IconosResponsive";

const Servicios = ({ listado }) => {
  return (
    <div id="features">
      <div className="jumbotron ">
        <div className="narrow">
          <div className="row text-center d-flex justify-content-center">
            <div className="col-12">
              <h3 className="heading">Secciones</h3>
              <div className="heading-underline"></div>
              <Iconos />
              <IconosResponsive />
            </div>
          </div>
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
              {/* <Comercios /> */}
              <ListadoComercios listado={listado} />
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

export default Servicios;
