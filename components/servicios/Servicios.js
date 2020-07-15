import React from "react";
import FormSolicitud from "./FormSolicitud";
import Comercios from "./Comercios";
import ListadoComercios from "./ListadoComercios";

const Servicios = ({ listado }) => {
  return (
    <div className=" seccion service p-4">
      <div className="p-4">
        <div className="row mb-4 d-flex justify-content-center">
          <div className="contenedor-img ejemplo-4-1">
            <img className="tamaño" src="/img/solicitud2.png" />
            <div
              className="mascara"
              data-toggle="modal"
              data-target="#solicitud"
            >
              <div className="p-4 mt-2">
                <a href="#" className="mt-4 link">
                  Solicitar
                </a>
              </div>
            </div>
          </div>

          <div className=" contenedor-img ejemplo-4-1 ">
            <img className="tamaño" src="/img/empresas2.png" />
            <div
              className="mascara"
              data-toggle="modal"
              data-target="#empresas"
            >
              <div className="p-4 mt-2 ">
                <a href="#" className="mt-4 link">
                  Listado
                </a>
              </div>
            </div>
          </div>

          <div className=" contenedor-img ejemplo-4-1 ">
            <img className="tamaño" src="/img/resultados.png" />
            <div
              className="mascara"
              data-toggle="modal"
              data-target="#empresas"
            >
              <div className="p-4 mt-2 ">
                <a href="#" className="mt-4 link">
                  ingresar
                </a>
              </div>
            </div>
          </div>

          <div className=" contenedor-img ejemplo-4-1 ">
            <img className="tamaño" src="/img/fanpage.jpeg" />
            <div
              className="mascara"
              data-toggle="modal"
              data-target="#empresas"
            >
              <div className="p-4 mt-2 ">
                <a href="#" className="mt-4 link">
                  visitar
                </a>
              </div>
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
