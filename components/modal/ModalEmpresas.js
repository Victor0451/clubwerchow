import React from "react";
import ListadoComercios from "../servicios/ListadoComercios";


const ModalEmpresas = (datatoggle, datatarget) => {
  return (
    <div
      className="modal   fade "
      id="empresas"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl p-2">
        <div className="modal-content modalstyle border border-dark ">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body  ">
            {/* <Comercios /> */}
            <ListadoComercios />
          </div>
          <div className="modal-footer ">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEmpresas;
