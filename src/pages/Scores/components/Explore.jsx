import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import Htext from "./components/Htext";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "ID", width: 70 },
  { field: "help", headerName: "ID", width: 70 },
  { field: "shit", headerName: "ID", width: 70 },
  { field: "man", headerName: "ID", width: 70 },
  { field: "mhen", headerName: "ID", width: 70 },
  { field: "ttg", headerName: "ID", width: 70 },
  { field: "mgfdhen", headerName: "ID", width: 70 },
  { field: "zer", headerName: "ID", width: 70 },



  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName:  "Snow" , "name" : "qziefiquaiuergiaeurgiuerhgiue", "ttg" : "qziefiquaiuergiaeurgiuerhgiue", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister" , "name" : "qziefiquaiuergiaeurgiuerhgiue", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", "name" : "qziefiquaiuergiaeurgiuerhgiue", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark" , "name" : "qziefiquaiuergiaeurgiuerhgiue", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", "name" : "qziefiquaiuergiaeurgiuerhgiue", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", "name" : "qziefiquaiuergiaeurgiuerhgiue", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Explore() {
  return (
    <div className="h-auto w-full py-12">
      <Htext text="Download" />
      <div className="w-full px-12">
      <div className="w-full h-[400px] p-4 rounded-md   my-5 mr-5">

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        </div>
      </div>
    </div>
  );
}
