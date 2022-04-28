<<<<<<< HEAD
import React, { useState } from "react";
=======
import * as React from "react";
>>>>>>> a8a2cd03182ec680883b6b5aa5f25ba7179763c4
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

<<<<<<< HEAD


import {about} from "./data/about";
import {home} from "./data/home";

import {Iscore} from "./data/score_Illumina RNAseq";
import {Mscore} from "./data/score_metabolon";
import {Nscore} from "./data/score_nightingale";
import {Oscore} from "./data/score_olink";
import {Sscore} from "./data/score_somalogic";

import {scores} from "./data/scores";

import {cohorot} from "./data/cohorots";
import {application} from "./data/applications";
import {faq} from "./data/faq";


export default function Find() {
  var data = [
    {
      title: "Home",
      link: "/",
      text: home
    },
    {
      title: "Scores",
      link: "/Scores",
      text: scores,

    },
    {
      title: "Scores Somalogic",
      link: "/Scores/Somalogic",
      text: Sscore,
    },
    {
      title: "Scores Olink",
      link: "/Scores/Olink",
      text: Oscore,
    },
    {
      title: "Scores Metabolon",
      link: "/Scores/Metabolon",
      text: Mscore,
    },
    {
      title: "Scores RNAseq",
      link: "/Scores/Illumina_RNAseq",
      text: Iscore ,
    },
    {
      title: "Scores Nightingale",
      link: "/Scores/Nightingale",
      text: Nscore,
    },

    {
      title: "Applications",
      link: "/Applications",
      text: application,
    },
    {
      title: "FAQs",
      link: "/FAQs",
      text: faq
    },
    {
      title: "Cohorts",
      link: "/Cohorts",
      text: cohorot
    },
    {
      title: "About",
      link: "/About",
      text: about
    },
  ];



=======
const data = [
  {
    title: "Home",
    link: "/",
    text: "home main index website start OMICSPRED is a resource for predicting multi-omics data (proteomics, metabolomics, transcriptomics etc.) directly from genotypes. To do this, we have used a single cohort (INTERVAL) with extensive multi-omics data to train genetic scores using machine learning. Here, you can explore and download the genetic scores for a wide range of biomolecular traits in human blood as well as the summary statistics of their associations with key traits and diseases in the UK Biobank.",
  },
  {
    title: "Scores",
    link: "/Scores",
    text: "A genetic score, also called a polygenic score (PGS), polygenic risk score (PRS), genetic risk score, or genome-wide score, is a number that summarises the estimated effect of many genetic variants (usually SNPs) on an individual’s phenotype, typically calculated as a weighted sum of trait-associated alleles",
  },
  {
    title: "Scores Somalogic",
    link: "/Scores/Somalogic",
    text: "FENLAND MEC JHS Somalogic Scores",
  },
  {
    title: "Scores Olink",
    link: "/Scores/Olink",
    text: "ORCADES NSPHS Scores Olink",
  },
  {
    title: "Scores Metabolon",
    link: "/Scores/Metabolon",
    text: "ORCADES Metabolon Scores",
  },
  {
    title: "Scores RNAseq",
    link: "/Scores/Illumina_RNAseq",
    text: "Illumina RNAseq Scores",
  },
  {
    title: "Scores Nightingale",
    link: "/Scores/Nightingale",
    text: "UKB VIKING ORCADES MEC Nightingale Scores",
  },

  {
    title: "Applications",
    link: "/Applications",
    text: "Applications Testing Model for disease :Age as the time scale Cox regression models Testing Model for continuous trait Ordinary least squares Number of phenotypes scanned  criterion :FDR-adjusted p-value  0.05 UK Biobank  ",
  },
  {
    title: "FAQs",
    link: "/FAQs",
    text: "These genetic score models can be used to predict levels of biomelecular traits in genotyped cohorts Following the link, you will be directed to a cloud drive page where we hosted model files of all the considerred traits for the platform The selection of BR is based on the results in one of our previous studies that benchmarked the performance of a variety of representative genetic scoring methods for the construction of numerous continuous molecullar traits, and demonstrated BR was the top performing method in terms of both efficacy and efficiency",
  },
  {
    title: "Cohorts",
    link: "/Cohorts",
    text: "INTERVAL Study NSPHS ORCADES UK Biobank VIKING Health Study MEC JHS",
  },
  {
    title: "About",
    link: "/About",
    text: "The Omics Atlas development was led by Yu Xu, under the supervison of Michael Inouye at the Department of Public Health and Primary Care, University of Cambridge. Collaborators Acknowledgements",
  },
];

export default function Find() {
>>>>>>> a8a2cd03182ec680883b6b5aa5f25ba7179763c4
  const [filteredData, setFilteredData] = React.useState(data);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = data.filter((d) => {
      return d.text.toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);

<<<<<<< HEAD
    
  };
=======
    console.log(result);
  };

>>>>>>> a8a2cd03182ec680883b6b5aa5f25ba7179763c4
  return (
    <div className=" w-screen h-screen overflow-scroll pt-[100px]">
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
        className="m-auto my-8"
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          onChange={(e) => handleSearch(e)}
          placeholder="where is my page ?"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
      <div className="w-full grid place-items-center ">
<<<<<<< HEAD
      


      {filteredData.map((e) => {
          return (
            <div className="shadow-sm rounded-md p-2 px-5 w-[90%] lg:w-[50%] my-2 ">
              <a href={e.link} className="text-indigo-600 font-bold">{e.title}</a>
              <h1 className="text-gray-400 line-clamp-5">  {e.text}</h1>
            </div>
          );
        })}

=======
        {filteredData.map((e) => {
          return (
            <div className="shadow-sm rounded-md p-2 px-5 w-[90%] lg:w-[50%] my-2 ">
              <a href={e.link} className="text-indigo-600 font-bold">{e.title}</a>
              <h1 className="text-gray-400">  {e.text}</h1>
            </div>
          );
        })}
>>>>>>> a8a2cd03182ec680883b6b5aa5f25ba7179763c4
      </div>
    </div>
  );
}
