import React, { useState } from "react";
import validarSolicitud from "../../validacion/validarSolicitud";
import useValidacion from "../../hooks/useValidacion";
import axios from "axios";
import toastr from "toastr";
import moment from "moment-timezone";
import Router from "next/router";

const STATE_INICIAL = {
  apellido: "",
  nombre: "",
  dni: "",
  mail: "",
  telefono: "",
};

const FormSolicitud = ({ responsive }) => {
  let socioRef = React.createRef();
  let noSocioRef = React.createRef();
  let referidoRef = React.createRef();
  let apellidoRef = React.createRef();

  const [checkerror, guardarCheckerror] = useState(null);
  const [socio, guardarSocio] = useState(null);
  const [valuesocio, guardarValueSocio] = useState(false);
  const [nosocio, guardarNoSocio] = useState(null);
  const [valuenosocio, guardarValueNoSocio] = useState(false);
  const [referido, guardarReferido] = useState(null);
  const [valuereferido, guardarValueReferido] = useState(false);

  const handleChecked = (e) => {
    if (e.target.name === "socio") {
      const socio = e.target.name;
      guardarSocio(socio);
      const valuesocio = e.target.value;
      guardarValueSocio(valuesocio);
    } else if (e.target.name === "nosocio") {
      const nosocio = e.target.name;
      guardarNoSocio(nosocio);
      const valuenosocio = e.target.value;
      guardarValueNoSocio(valuenosocio);
    } else if (e.target.name === "referido") {
      const referido = e.target.name;
      guardarReferido(referido);
      const valuereferido = e.target.value;
      guardarValueReferido(valuereferido);
    }
  };

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarSolicitud, enviarSolicitud);

  const { apellido, nombre, dni, mail, telefono } = valores;

  async function enviarSolicitud() {
    try {
      const solicitud = {
        apellido: apellido,
        nombre: nombre,
        dni: dni,
        mail: mail,
        telefono: telefono,
        socio: valuesocio,
        nosocio: valuenosocio,
        referido: valuereferido,
        fecha_solicitud: moment().format("YYYY-MM-DD"),
      };

      if (socio === null && nosocio === null && referido === null) {
        const checkerror = "Debes seleccionar tu estado";
        guardarCheckerror(checkerror);
      } else {
        guardarCheckerror(checkerror);
        console.log(solicitud);

        await axios
          .post(
            "https://clubwerchow.com:5001/api/clubwerchow/socios/nuevasol",
            solicitud
          )
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
              toastr.success("Tu solicitud fue enviada con exito", "ATENCION");
              document.getElementById("form").reset();
              if (responsive) {
                Router.push("/");
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {}
  }

  return (
    <form className="formstyle" id="form" onSubmit={handleSubmit}>
      <div className="col-12">
        <h3 className="heading text-center">Datos Del Solicitante</h3>
        <div className="heading-underline"></div>
      </div>
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
            name="apellido"
            value={apellido}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={apellidoRef}
          />
          {errores.apellido && (
            <div className="mt-2 form-group  alert alert-danger">
              {errores.apellido}
            </div>
          )}
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
            name="nombre"
            value={nombre}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.nombre && (
            <div className="mt-2 form-group  alert alert-danger">
              {errores.nombre}
            </div>
          )}
        </div>
        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> DNI: </u>
            </strong>
          </label>
          <input
            type="number"
            className="form-control border border-dark"
            placeholder="DNI"
            name="dni"
            value={dni}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.dni && (
            <div className="mt-2 form-group  alert alert-danger">
              {errores.dni}
            </div>
          )}
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
            name="mail"
            value={mail}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.mail && (
            <div className="mt-2 form-group  alert alert-danger">
              {errores.mail}
            </div>
          )}
        </div>
        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> Telefono: </u>
            </strong>
          </label>
          <input
            type="number"
            className="form-control border border-dark"
            placeholder="Telefono"
            name="telefono"
            value={telefono}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.telefono && (
            <div className="mt-2 form-group  alert alert-danger">
              {errores.telefono}
            </div>
          )}
        </div>
        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> Usted es: </u>
            </strong>
          </label>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="socio"
              name="socio"
              value="op1"
              ref={socioRef}
              onChange={(e) => {
                handleChecked({
                  target: {
                    name: e.target.name,
                    value: e.target.checked,
                  },
                });
              }}
            />
            <label className="form-check-label" htmlFor="socio">
              Es afiliado de Werchow
            </label>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="nosocio"
              name="nosocio"
              value="op2"
              ref={noSocioRef}
              onChange={(e) => {
                handleChecked({
                  target: {
                    name: e.target.name,
                    value: e.target.checked,
                  },
                });
              }}
            />
            <label className="form-check-label" htmlFor="nosocio">
              No es afiliado de Werchow
            </label>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="referido"
              name="referido"
              ref={referidoRef}
              onChange={(e) => {
                handleChecked({
                  target: {
                    name: e.target.name,
                    value: e.target.checked,
                  },
                });
              }}
            />
            <label className="form-check-label" htmlFor="referido">
              Es conocido o pariente de un afiliado de werchow (Referido)
            </label>
          </div>
          {checkerror && (
            <div className="mt-2 form-group  alert alert-danger">
              {checkerror}
            </div>
          )}
        </div>
        <div className="form-group col-md-12 mt-4">
          <button
            className="btn btn-secondary btn-md mt-4 mb-4 btn-block"
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
    </form>
  );
};

export default FormSolicitud;
