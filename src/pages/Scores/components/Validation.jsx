import React, { useState, useEffect, Suspense } from "react";

import Htext from "./components/Htext";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import design from "../../../Assets/graphs/Metabolon_validation.png";

import ChartPlot from "./components/Chart";
import CsvData from "../data/toplot/Somalogic.csv";
import { usePapaParse } from "react-papaparse";

const Validation = (props) => {
  const { readRemoteFile } = usePapaParse();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    readRemoteFile(CsvData, {
      complete: (results) => {
        console.log("fetch data");
        console.log("results => ", results);
        results.data.filter((r) => {
          r.splice(0, 5);
        });
        setRows(results.data);
      },
    });
  }, []);

  return (
    <div className="h-auto w-full">
      <Htext text="Validation performance of genetic scores" />
      <div className="w-full px-12 ">
        <Suspense
          fullback={<div className="h-[300px] w-full bg-red-600"></div>}
        >
          <ChartPlot data={rows} />
        </Suspense>
      </div>
    </div>
  );
};
export default Validation;
