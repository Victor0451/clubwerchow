import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import Header from "../components/header/Header";
import Nosotros from "../components/nosotros/Nosotros";
import Contacto from "../components/contacto/Contacto";
import BannerSorteo from "../components/informacion/BannerSorteo";
import axios from "axios";
import BannerTarjeta from "../components/informacion/BannerTarjeta";

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
      <Header listado={listado} />

      <BannerSorteo />

      <BannerTarjeta />

      {/* <Nosotros /> */}

      <Contacto />
    </Layout>
  );
};

export default index;
