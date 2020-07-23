import React from "react";
import Layout from "../../components/layouts/Layout";
import NavBarPag from "../../components/navbar/NavBarPag";
import BannerPaginas from "../../components/header/BannerPaginas";

const sorteos = () => {
  return (
    <Layout>
      <NavBarPag />

      <BannerPaginas />

      <h2 className="mt-4 mb-4 text-center">
        ¡Nuevo Sorteo 15 de agosto!. ¿Te lo vas a perder?
      </h2>
      <div className="heading-underline"></div>

      <div className="container mt-4">
        <img
          src="/img/basortvau.jpg"
          className="banner "
          alt="Sorteo dia del niño club werchow"
        />
      </div>
    </Layout>
  );
};

export default sorteos;
