import React from "react";
import Layout from "../components/layouts/Layout";
import Header from "../components/header/Header";
import Nosotros from "../components/nosotros/Nosotros";
import Contacto from "../components/contacto/Contacto";

const index = () => {
  return (
    <Layout>
      <Header />


      <Nosotros />

      <Contacto />
    </Layout>
  );
};

export default index;
