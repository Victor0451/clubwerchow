export default function validarAltaPrestamo(valores) {
  let errores = {};

  if (!valores.apellido) {
    errores.apellido = "El apellido es obligatorio";
  }
  if (!valores.nombre) {
    errores.nombre = "El nombre es obligatorio";
  }

  if (!valores.dni) {
    errores.dni = "El dni es obligatorio";
  } else if (valores.dni.length !== 8) {
    errores.dni = "La dni debe ser de hasta 8 digitos";
  }

  if (!valores.telefono) {
    errores.telefono = "El telefono es obligatorio";
  }

  if (!valores.mail) {
    errores.mail = "El mail es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.mail)) {
    errores.mail = "EL mail no es válido";
  }

  return errores;
}
