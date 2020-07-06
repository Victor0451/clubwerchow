import React from "react";

const FormSolicitud = () => {
  return (
    <form>
      <div className="border border-dark alert alert-secondary p-4">
        <h3 className=" mb-4">
          <strong>
            <u>Datos Del Solicitante</u>
          </strong>
        </h3>
        <div className="row mb-4">
          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Apellido: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control border border-dark"
              placeholder="Apellido"
              name="contrato"
              //ref={apellidoRef}
            />
          </div>
          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Nombre: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control border border-dark"
              placeholder="Nombre"
              name="contrato"
              //ref={apellidoRef}
            />
          </div>
          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> DNI: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control border border-dark"
              placeholder="DNI"
              name="contrato"
              //ref={apellidoRef}
            />
          </div>
          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Mail: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control border border-dark"
              placeholder="Mail"
              name="contrato"
              //ref={apellidoRef}
            />
          </div>
          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Telefono: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control border border-dark"
              placeholder="Telefono"
              name="contrato"
              //ref={apellidoRef}
            />
          </div>
          <div className="form-group col-md-12 mt-4">
            <button
              className="btn btn-block btn-primary"
              //onClick={buscarTitularApellido}
              data-toggle="modal"
              data-target=".modlist"
            >
              Enviar Solicitud
            </button>
          </div>{" "}
          {/* {errores && (
            <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
              {errores}
            </div>
          )} */}
        </div>
      </div>
    </form>
  );
};

export default FormSolicitud;
