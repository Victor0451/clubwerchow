import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";

import axios from "axios";
import Home from "../components/home/Home";
import Nosotros from "../components/nosotros/Nosotros";
import Servicios from "../components/servicios/Servicios";
import Sorteos from "../components/sorteos/Sorteos";
import Opiniones from "../components/opiniones/Opiniones";
import Contacto from "../components/contacto/Contacto";

const index = () => {
  const [listado, guardarListado] = useState(null);

  const listadoComercios = async () => {
    axios
      .get("https://clubwerchow.com:5001/api/clubwerchow/comercios/comercios")
      .then((res) => {
        const listado = res.data;
        guardarListado(listado);
      });
  };

  useEffect(() => {
    listadoComercios();
  }, []);

  return (
    <Layout>
      <Home />

      <Nosotros />

      <Servicios listado={listado} />

      <Sorteos />

      {/* <Opiniones /> */}

      <Contacto />
    </Layout>
  );
};

export default index;
