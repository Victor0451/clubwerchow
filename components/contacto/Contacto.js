import React from "react";

const Contacto = () => {
  return (
    <div className="d-flex justify-content-center contacto">
      <div className="container p-4">
        <h4 className="text-white">Contacto</h4>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i> Lavalle 123
          </li>
          <li>
            <i className="fas fa-phone"></i> (388) - 4300930 (Celular)
          </li>
          <li>
            <i className="fas fa-envelope-open-text"></i>{" "}
            clubwerchow@werchow.com
          </li>
        </ul>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          provident ipsam necessitatibus repellendus?
        </p> */}
      </div>
    </div>
  );
};

export default Contacto;
