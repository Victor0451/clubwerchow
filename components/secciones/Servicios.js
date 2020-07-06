import React from "react";
import ListadoServicios from "./ListadoServicios";
import FormSolicitud from "./FormSolicitud";

const Servicios = () => {
  return (
    <div className="services">
      <div className="container grid-3 center">
        <div>
          <img
            src="/img/empresas.png"
            className="iconos mt-4"
            data-toggle="modal"
            data-target="#empresas"
          />

          <h3 className="mt-4 text-white">
            <u>Empresas Adheridas</u>
          </h3>
          {/* <p>Siguenos en nuetra fanpage de facebook</p> */}
        </div>

        <div>
          <img
            src="/img/solicitud.png"
            className="iconos mt-4"
            data-toggle="modal"
            data-target="#solicitud"
          />
          <h3 className="mt-4 text-white">
            <u>Solicitud de Ingreso</u>{" "}
          </h3>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            reiciendis!
          </p> */}
        </div>
        {/* <div>
          <i className="fas fa-briefcase fa-3x"></i>
          <h3>Nuestros Proyectos</h3>
          <p>Visita y comprueba la calidad de nuestros trabajos!.</p>
        </div> */}
      </div>

      <div
        className="modal  fade "
        id="empresas"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl p-2">
          <div className="modal-content modalstyle border border-dark ">
            <div className="modal-header alert alert-secondary">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>
                  <u>Empresas Adheridas</u>
                </strong>
              </h2>
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
              <ListadoServicios />
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
            <div className="modal-header alert alert-secondary">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>
                  <u>Solicitud De Ingreso</u>
                </strong>
              </h2>
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
