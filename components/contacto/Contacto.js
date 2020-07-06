import React from "react";

const Contacto = () => {
  return (
    <div>
      <div className="container p-4">
        <h4 className="text-white">Contactos</h4>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i> Baker Street
          </li>
          <li>
            <i className="fas fa-phone"></i> (111) 111 111 111
          </li>
          <li>
            <i className="fas fa-envelope-open-text"></i> contact@website.com
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          provident ipsam necessitatibus repellendus?
        </p>
        <p>Company.com</p>
      </div>
    </div>
  );
};

export default Contacto;
