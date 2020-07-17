import React from "react";

import Layout from "../../components/layouts/Layout";
import Comercios from "../../components/servicios/Comercios";

const comercios = () => {
  return (
    <Layout>
      <div>
        <img
          className="banner"
          src="/img/batarjeta.jpg"
          alt="sorteo dia del niño"
        />
      </div>

      <div className="mt-4 p-2 ">
        <div className="formstyle ">
          <div className="ml-4 mt-4">
            <Comercios />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default comercios;
