import React, { useState, useEffect } from "react";

import jsCookies from "js-cookie";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href={"/home/home"} className="navbar-brand">
        Club Werchow{" "}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <li className="nav-item dropdown ">
        <a
          href="#"
          role="button"
          data-toggle="dropdown"
          className="nav-link dropdown-toggle"
        >
          Prestamos
        </a>
        <ul className="dropdown-menu">
          <li>
            <a
              href="/prestamos/nuevoprestamo"
              className="dropdown-item text-dark"
            >
              Nuevo Prestamo
            </a>
          </li>

          <hr />

          <li>
            <a
              href="/prestamos/informeprestamos"
              className="dropdown-item text-dark"
            >
              Reportes
            </a>
          </li>

          <hr />

          <li>
            <a
              href="/prestamos/aprobarprestamos"
              className="dropdown-item text-dark"
            >
              Aprobacion de Prestamos
            </a>
          </li>

          <hr />

          <li>
            <a
              href="/prestamos/imprimircaratula"
              className="dropdown-item text-dark"
            >
              Imprimir Caratula
            </a>
          </li>
        </ul>
      </li>
    </nav>
  );
};

export default Navbar;
