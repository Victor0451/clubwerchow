import React from "react";
import ModalSolicitud from "../modal/ModalSolicitud";
import ModalEmpresas from "../modal/ModalEmpresas";

const NavBarPag = () => {
  return (
    <div>
      <nav className=" navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Inicio
              </a>
            </li>
            <li className="nav-item" id="link-solicitar">
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#solicitud"
              >
                SOLICITA TU TARJETA
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#empresas"
              >
                Comercios Adheridos
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ModalSolicitud datatoggle="modal" datatarget="#solicitud" />
      <ModalEmpresas datatoggle="modal" datatarget="#empresas" />
    </div>
  );
};

export default NavBarPag;
