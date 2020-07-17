import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";

const ListadosComercios = ({ listado }) => {
  if (!listado) return <div>CARGANDO...</div>;

  console.log(listado);

  // const selcaso = (index) => {
  //   campana;
  //   const caso = campana[index];
  //   guardarCaso(caso);

  //   getGestionCaso(caso.idcaso);
  // };

  // const handleChange = (value, flag) => {
  //   if (flag === "accion") {
  //     const accion = value.value;
  //     guardarAccion(accion);
  //   } else if (flag === "nuevaaccion") {
  //     const nuevaaccion = value.value;
  //     guardarNuevaAccion(nuevaaccion);
  //   }
  // };

  return (
    <div className="listado mt-4">
      <ReactTable
        data={listado}
        filterable
        defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
        columns={[
          {
            Header: "Comercios",
            columns: [
              {
                Header: "Rubro",
                id: "rubro",
                accessor: (d) => d.rubro,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["rubro"] }),
                filterAll: true,
                width: 150,
              },
              {
                Header: "Comercio",
                id: "comercio",
                accessor: (d) => d.comercio,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["comercio"] }),
                filterAll: true,
                width: 200,
              },
              {
                Header: "Beneficio",
                id: "beneficio",
                accessor: (d) => d.beneficio,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["beneficio"] }),
                filterAll: true,
                width: 500,
              },

              {
                Header: "Direccion",
                id: "direccion",
                accessor: (d) => d.direccion,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["direccion"] }),
                filterAll: true,
                width: 200,
              },
            ],
          },
        ]}
        defaultPageSize={25}
        className="-striped -highlight"
      />
    </div>
  );
};

export default ListadosComercios;
