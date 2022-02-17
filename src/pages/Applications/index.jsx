import React from "react";
import "./styles.css";

import { LinkIcon } from "@heroicons/react/outline";
import Htext from "./components/Htext";

import Href from "./components/Href";
import _ from "underscore";
import { DataGrid } from "@mui/x-data-grid";
import { DataGridPro } from '@mui/x-data-grid-pro';


import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography } from "@mui/material";

import data from "./data/metabolon_plot.json";

export default function Applications() {
  const names = data.map((e) => {
    return e.name;
  });

  const columns = names.map((e) => {
    return { field: e, headerName: e, width: 150 };
  });

  const rowsBefore = data.map((e) => {
    let val = Object.values(e.data);

    console.log("the link is", val[val.length - 1]);
    return val;
  });

  const rowsAfter = _.zip.apply(_, rowsBefore);

  var rows = [];
  var l = 0;

  rowsAfter.map((e) => {
   // e[e.length - 1] = <a href={e[e.length - 1]}>Link</a>;

    let obj = {};
    obj["id"] = l;
    l++;
    for (var i = 0, c = names[0]; i < e.length; i++, c = names[i]) {
      obj[c] = e[i];
    }
    rows.push(obj);
    obj = {};
  });

  return (
    <div>
      <div className=" w-full  pt-[50px] pb-20 mb-20 mt-12">
        <Htext text="Sumarry" />
        <div className="w-auto h-auto px-5 lg:pl-16 text-lg  text-justify md:block float-left lg:place-items-stretch">
          <div className="">
            <div className="w-full my-5 ">
              <h1 className="text-xl  text-gray-600 ">
                <h1 className="text-sm font-extrabold text-indigo-600">
                  Number of phenotypes scanned :
                  <snap className="text-sm text-gray-600 font-normal ">
                    1123
                  </snap>
                </h1>
              </h1>
            </div>
          </div>

          <div className="">
            <div className="w-full my-5 ">
              <h1 className="text-xl  text-gray-600 ">
                <h1 className="text-sm font-extrabold text-indigo-600">
                  Cohort :
                  <snap className="text-sm text-gray-600 font-normal ">
                    UK Biobank
                  </snap>
                </h1>
              </h1>
            </div>
          </div>

          <div className="">
            <div className="w-full my-5 ">
              <h1 className="text-xl  text-gray-600 ">
                <h1 className="text-sm font-extrabold text-indigo-600">
                  Ancestry :
                  <snap className="text-sm text-gray-600 font-normal ">
                    White British
                  </snap>
                </h1>
              </h1>
            </div>
          </div>

          <div className="">
            <div className="w-full my-5 ">
              <h1 className="text-xl  text-gray-600 ">
                <h1 className="text-sm font-extrabold text-indigo-600">
                  Testing Model for disease :
                  <snap className="text-sm text-gray-600 font-normal ">
                    Age as the time scale Cox regression models (y ~ omics
                    genetic score* + strat(sex) + genotyping array + 10PCs)
                  </snap>
                </h1>
              </h1>
            </div>
          </div>

          <div className="">
            <div className=" my-5 ">
              <h1 className="text-xl  text-gray-600 ">
                <h1 className="text-sm font-extrabold text-indigo-600">
                  Selection criterion :
                  <snap className="text-sm text-gray-600 font-normal ">
                    FDR-adjusted p-value{" < "}0.05
                  </snap>
                </h1>
              </h1>
            </div>
          </div>

          <div className="w-full float-left pr-12">
            <h1 className="text-sm text-gray-600 text-justify">
              * Only traits that had a r2 {" > "}0.01 in internal validation
              were considerred in the association tests.
            </h1>
          </div>
        </div>
        <Htext text="Explore and download omics genetic score-phenotype associations" />

        <div className="h-auto w-full py-10 my-20">
          <div className="w-full  lg:px-12">
            <div className="w-full h-[400px] p-4 rounded-md   my-5 mr-5">
              <DataGrid
                rows={rows}
                columns={columns}
    
                pageSize={40}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
