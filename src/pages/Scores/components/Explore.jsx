import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import _ from "underscore";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Htext from "./components/Htext";


export default function Explore(props) {

  const names = props.data.map((e) => {
    return e.name;
  });
  
  

  
  
  
  const columns = names.map((e) => {
    return { field: e, headerName: e, width: 150 };
  });
  
  
  
  const rowsBefore = props.data.map((e) => {
    return Object.values(e.data);
  });
  
  const rowsAfter = _.zip.apply(_, rowsBefore);
  
  
  
  var rows = [];
  var l = 0  ;
  rowsAfter.map((e) => {
    let obj = {} ;
    obj["id"] = l ;
    l++ ;
    for (var i = 0, c = names[0]; i < e.length; i++, c = names[i]) {
      obj[c] = e[i];
    }
    rows.push(obj) ;
    obj = {}
  });



  return (
    <div className="h-auto w-full py-10 my-12">
      <Htext text="Explore traits and their genetic scores:" />
      <div className="w-full py-5 px-0 lg:px-12">
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
