import React from "react";
import Servicios from "../servicios/Servicios";

const Header = () => {
  return (
    <div className="showcase">
      <div className="content">
        <div className="d-flex justify-content-between">
          <div className="p-2 bd-highlight  ">
            <img src="/img/logo.png" className="logoClub" />
          </div>

          <div className="d-flex flex-row-reverse bd-highlight">
            <div className="p-2 bd-highlight ">
              <Servicios />
            </div>
          </div>
        </div>

        {/* <div className="title">Club Werchow</div>
        <div className="text">"we have the solution to your problems"</div> */}
      </div>
    </div>
  );
};

export default Header;
