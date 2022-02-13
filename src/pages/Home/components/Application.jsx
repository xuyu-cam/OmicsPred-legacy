import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Htext from "./components/Htext";

import logo from "../../../Assets/landing.jpg";
import rna_img from "../../../Assets/rna.png";
import soma_img from "../../../Assets/Somalogic.png";
import ukb_img from "../../../Assets/ukb.png";

import meta_img from "../../../Assets/Metabolon.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";


import Href from "./components/Href";

function Slide(props) {
  return (
    <div className="w-[100%] flex  shadow-md rounded-md">
      <div className="w-[40%] h-[220px] grid place-items-center ">
        <img className="w-[90%] h-[90%] " src={props.logo} />
      </div>
      <div className="w-[60%]   rounded grid place-items-center  text-left ">
        <div className="w-[100%]  rounded grid place-items-center  text-left">
          <h1 className=" text-xl tracking-tight font-bold font-sans text-indigo-600 sm:text-xl md:text-2xl w-[90%] text-left uppercase">
            Associations with phenotypes in UK biobank
          </h1>
          <h6 className="py-0 my-0 mx-2 xl:inline text-gray-600 w-[90%] text-md text-left">
            Genetic scores in OMICSPRED have been applied to <Href text="UK biobank" href="/"></Href>  to test
            for associations with various complex phenotypes. 
          </h6>
        </div>
        <div className="w-[40%] mt-3 sm:mt-0 sm:ml-3 ">
          <a
            href="#"
            className=" w-full flex items-center justify-center px-4 py-1 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg md:px-4"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

const Application = () => {
  return (
    <div className="w-screen bg-white px-[5%] py-[20px] ">
      <Htext text="Application of Genetic Scores" />
      <div className="mySwiper py-[20px] my-[20px] overflow-visible rounded-sm">
        <Slide
          logo={ukb_img}
          text="Proteomics (plasma)"
          discription="2,384 protein genetic scores, validated on the FENLAND cohort."
        />
      </div>
    </div>
  );
};
export default Application;
