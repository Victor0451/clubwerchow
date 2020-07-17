import React from "react";
import FormSolicitud from "../servicios/FormSolicitud";

const Navbar = () => {
  return (
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
            <a href="#home" className="nav-link">
              Inicio
            </a>
          </li>
          <li className="nav-item" id="link-solicitar">
            <a href="#features" className="nav-link">
              SOLICITA TU TARJETA
            </a>
          </li>
          <li className="nav-item">
            <a href="#course" className="nav-link">
              Acerca Del Club
            </a>
          </li>
          <li className="nav-item">
            <a href="#features" className="nav-link">
              Secciones
            </a>
          </li>
          <li className="nav-item">
            <a href="#resources" className="nav-link">
              Sorteos
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="#clients" className="nav-link">
              Opiniones
            </a>
          </li> */}
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
