import React from "react";
import Layout from "../../components/layouts/Layout";
import NavBarPag from "../../components/navbar/NavBarPag";
import BannerPaginas from "../../components/header/BannerPaginas";
import Ganadores from "../../components/sorteos/Ganadores";
import Contacto from "../../components/contacto/Contacto";

const ganadores = () => {
  return (
    <Layout>
      <NavBarPag />

      <BannerPaginas />

      <Ganadores />

      <Contacto />
    </Layout>
  );
};

export default ganadores;
