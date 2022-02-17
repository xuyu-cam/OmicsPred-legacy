import React, { useState, useEffect, Suspense } from "react";

import Htext from "./components/Htext";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import design from "../../../Assets/graphs/Metabolon_validation.png";

import ChartPlot from "./components/Chart";
import CircleChart from "./components/doughnut";

import Data from "../../../data/toplot/data.json";

const Validation = (props) => {
  console.log("data got by validation :", props.data);
  return (
    <div className="h-auto w-full">
      <Htext text="Validation performance of genetic scores" />
      <div className="w-full px-0 lg:px-12 ">
        <Suspense
          fullback={<div className="h-[600px] w-full bg-red-600"></div>}
        >
          <ChartPlot data={props.data} />
        </Suspense>
      </div>
    </div>
  );
};
export default Validation;
