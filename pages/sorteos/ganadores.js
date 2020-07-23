import React from "react";
import Layout from "../../components/layouts/Layout";
import NavBarPag from "../../components/navbar/NavBarPag";
import BannerPaginas from "../../components/header/BannerPaginas";

const ganadores = () => {
  return (
    <Layout>
      <NavBarPag />

      <BannerPaginas />

      <h2 className="mt-4 mb-4 text-center">Y los ganadores son!...</h2>
      <div className="heading-underline"></div>
    </Layout>
  );
};

export default ganadores;
