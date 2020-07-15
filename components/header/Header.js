import React from "react";
import Servicios from "../servicios/Servicios";
import ServiciosResponsive from "../servicios/ServiciosResponsive";

const Header = ({listado}) => {
  return (
    <div className="showcase">
      <div className="content">
        <div className="d-flex justify-content-between" >
          <div className="p-2 bd-highlight  ">
            <img src="/img/logo2.png" className="logoClub" />
          </div>

          <div className="d-flex flex-row-reverse bd-highlight" id="web">
            <div className="p-2 bd-highlight ">
              <Servicios listado={listado} />
            </div>
          </div>
        </div>



        <div className="row" id="responsive">
          <div className=" ">
            <ServiciosResponsive />
          </div>
        </div>
      </div>

      {/* <div className="title">Club Werchow</div>
        <div className="text">"we have the solution to your problems"</div> */}
    </div>

  );
};

export default Header;
