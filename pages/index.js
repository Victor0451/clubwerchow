import React from "react";
import Layout from "../components/layouts/Layout";
import Header from "../components/header/Header";
import Servicios from "../components/secciones/Servicios";
import Nosotros from "../components/nosotros/Nosotros";
import Contacto from "../components/contacto/Contacto";

const index = () => {
  return (
    <Layout>
      <Header />

      <Servicios />

      <Nosotros />

      <Contacto />
    </Layout>
  );
};

export default index;
