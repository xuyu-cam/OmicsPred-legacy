import React from "react";
import Sumary from "./components/Sumary";
import Download from "./components/Download";
import Validation from "./components/Validation";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogRoutes from "../../BlogRoutes";
import ScoresSideBar from "./components/ScoresSideBar";
import ScoresHome from "./components/Scores";


import Particles from "react-tsparticles";

const data = [
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

const data2 = [
  { title: "Download results ", type: "Number", value: "141" },
  { title: "Download model files", type: "Link", value: "INTERVAL" },
  {
    title: "All genetic scores are provided under a CC-BY license",
    type: "Link",
    value: "INTERVAL",
  },
];

const data3 = [];

const data4 = [
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

const particlesInit = (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
  console.log(container);
};

export default function Scores(props) {
  return (
    <>
      <div className="flex w-screen bg-white">
        <ScoresSideBar />
        <div className="h-screen px-3 bg-indigo-100 pt-[80px]  grid place-items-center w-[80%] bg-white overflow-scroll ">
          <div className="w-[98%] h-[98%] bg-white rounded-lg">
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
                <Sumary data={data} />
                <Download data={data2} />
                <div>
                  <Validation data={data4} />
                </div>
                <Explore />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
