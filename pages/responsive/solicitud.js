import React from "react";
import Layout from "../../components/layouts/Layout";

import FormSolicitud from "../../components/servicios/FormSolicitud";

const solicitud = () => {
  return (
    <Layout>
      <div>
        <img
          className="banner"
          src="/img/batarjeta.jpg"
          alt="sorteo dia del niño"
        />
      </div>

      <div className=" mt-4 p-2">
        <FormSolicitud responsive={true} />
      </div>
    </Layout>
  );
};

export default solicitud;
