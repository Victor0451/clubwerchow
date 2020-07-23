import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";

import axios from "axios";
import NavBar from "../components/navbar/Navbar";
import Home from "../components/home/Home";
import Nosotros from "../components/nosotros/Nosotros";
import Servicios from "../components/servicios/Servicios";
import Sorteos from "../components/sorteos/Sorteos";
import Opiniones from "../components/opiniones/Opiniones";
import Contacto from "../components/contacto/Contacto";

const index = () => {
  return (
    <Layout>
      <NavBar />

      <Home />

      <Nosotros />

      <Servicios />

      <Sorteos />

      {/* <Opiniones /> */}

      <Contacto />
    </Layout>
  );
};

export default index;
