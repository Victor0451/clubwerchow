import React from "react";

import Layout from "../../components/layouts/Layout";
import Comercios from "../../components/servicios/Comercios";
import BannerPaginas from "../../components/header/BannerPaginas";
import Contacto from "../../components/contacto/Contacto";

const comercios = () => {
  return (
    <Layout>
      <BannerPaginas />

      <div className="mt-4 p-2 ">
        <div className="formstyle ">
          <div className="ml-4 mt-4">
            <Comercios />
          </div>
        </div>
      </div>

      <Contacto />
    </Layout>
  );
};

export default comercios;
