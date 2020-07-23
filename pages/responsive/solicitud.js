import React from "react";
import Layout from "../../components/layouts/Layout";

import FormSolicitud from "../../components/servicios/FormSolicitud";
import BannerPaginas from "../../components/header/BannerPaginas";

const solicitud = () => {
  return (
    <Layout>
      <BannerPaginas />

      <div className=" mt-4 p-2">
        <FormSolicitud responsive={true} />
      </div>
    </Layout>
  );
};

export default solicitud;
