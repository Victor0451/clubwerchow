import React from "react";
import Iconos from "./Iconos";
import IconosResponsive from "./IconosResponsive";
import ModalSolicitud from "../modal/ModalSolicitud";
import ModalEmpresas from "../modal/ModalEmpresas";

const Servicios = () => {
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

      <ModalSolicitud datatoggle="modal" datatarget="#solicitud" />
      <ModalEmpresas datatoggle="modal" datatarget="#empresas" />
    </div>
  );
};

export default Servicios;
