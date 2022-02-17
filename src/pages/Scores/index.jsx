import React from "react";
import Sumary from "./components/Sumary";
import Download from "./components/Download";
import Validation from "./components/Validation";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogRoutes from "../../BlogRoutes";
import ScoresSideBar from "./components/ScoresSideBar";
import ScoresHome from "./components/Scores";


import RoutesData  from "./RoutesData" ;




var data = [
  { title: "Number of traits :", type: "Number", value: "141" },
  { title: "Training cohort: ", type: "Link", value: "INTERVAL" },
  { title: "Training cohort: ", type: "Link", value: "INTERVAL" },
  {
    title: "Number of traits externally validated ",
    type: "Link",
    value: "INTERVAL",
  },
  { title: "Training cohort: ", type: "Link", value: "INTERVAL" },
  { title: "Training cohort: ", type: "Link", value: "INTERVAL" },
  { title: "Training cohort: ", type: "Link", value: "INTERVAL" },
  { title: "Training cohort: ", type: "Link", value: "INTERVAL" },
  { title: "Training cohort: ", type: "Link", value: "INTERVAL" },
  { title: "Training cohort: ", type: "Link", value: "INTERVAL" },
];

var data2 = [
  { title: "Download results ", type: "Number", value: "141" },
  { title: "Download model files", type: "Link", value: "INTERVAL" },
];

var data3 = [];

var data4 = [
  {
    index: "(a1)",
    description:
      "Spearman correlation performance comparison between internal and external validation (INTERVAL withheld subset);",
  },
  {
    index: "(b1)",
    description:
      "Spearman correlation performance comparison between internal and external validation (INTERVAL withheld subset);",
  },
  {
    index: "(b1)",
    description:
      "The number of traits whose genetic scores are in different performance ranges in terms of explained variance (R2) between internal and external validation.",
  },
  {
    index: "(c1)",
    description:
      "Spearman correlation performance comparison between internal and external validation (INTERVAL withheld subset);",
  },
];







export default function Scores(props) {
  return (
    <>
      <div className="lg:flex block w-screen bg-white">
        <ScoresSideBar />
        <div className="h-screen lg:px-3 bg-indigo-100 lg:pt-[80px]  grid place-items-center w-screen lg:w-[80%] bg-white overflow-y-scroll ">
          <div className="max-w-[98vw] md:w-[98%] h-[98%] bg-white rounded-lg">
            <div className="w-full rounded-t-md border-b-[1px] border-gray-200  grid place-items-center h-16">
              <h1
                className="h-auto w-full text-left uppercase font-bold text-[15px] pl-8"
                style={{
                  color: " rgb(33, 33, 33)",
                  "font-weight": 500,
                  "font-family": "Roboto, sans-serif",
                }}
              >
                {props.name}
              </h1>
            </div>

            {props.name == "Scores" ? (
              <>
                <ScoresHome />
              </>
            ) : (
              <>
                <Sumary data={RoutesData[props.name].sumarry_data} />
                <Download data={RoutesData[props.name].download_data} />
                <Validation data={RoutesData[props.name].plot_data} />
                <Explore data={RoutesData[props.name].table_data} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
