import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./components/Slide";
import Htext from "./components/Htext";

import logo from "../../../Assets/landing.jpg";
import rna_img from "../../../Assets/rna.png";
import soma_img from "../../../Assets/Somalogic.png";
import meta_img from "../../../Assets/Metabolon.png";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import Href from "./components/Href";




const Platforms = () => {
  return (
    <div className="w-screen bg-white px-[5%] py-[20px] overflow-visible">
      <Htext text="Platforms with Genetic Scores" />
      <Swiper
        navigation={true}
        spaceBetween={0}
        slidesPerView={3}
        style={{ overflow: "visible" }}
        className=" py-[20px] my-[20px] px-[20px] overflow-visible "
      >
        <SwiperSlide className="w-[100%] h-[100%] overflow-visible py-1">
          <Slide
            logo={soma_img}
            text="Proteomics (plasma) "
            discription={<div> 2,384 protein genetic scores, validated on the  <Href text="FENLAND cohort" href = "/" ></Href> </div>}
          />
        </SwiperSlide>
        <SwiperSlide className="w-[100%] h-[100%] py-1">
          {" "}
          <Slide
            logo={soma_img}
            text="Proteomics (plasma)"
            discription={<div>308 protein genetic scores, validated on the  <Href text="NSPHS cohort" href = "/" ></Href> and  <Href text="ORCADES cohort" href = "/" ></Href> </div>}
          />
        </SwiperSlide>
        <SwiperSlide className="w-[100%] h-[100%] py-1">
          {" "}
          <Slide
            logo={meta_img}
            text="Metabolomics (plasma)"
            discription={<div>726 metabolite genetic scores, validated on a withheld subset of <Href text="INTERVAL" href = "/" ></Href> and  <Href text="ORCADES cohort" href = "/" ></Href> </div>}
           
          />{" "}
        </SwiperSlide>
        <SwiperSlide className="w-[100%] h-[100%] py-1">
          {" "}
          <Slide
            logo={meta_img}
            text="Metabolomics (serum)"
            discription={<div>141 metabolite genetic scores, validated on <Href text="UK Biobank" href = "/" ></Href>  , <Href text="ORCADES cohort" href = "/" ></Href>   and  <Href text="VIKING cohort" href = "/" ></Href> </div>}

          />
        </SwiperSlide>
        <SwiperSlide className="w-[100%] h-[100%] py-1">
          {" "}
          <Slide
            logo={rna_img}
            text="Transcriptomics (whole blood)"
            discription="13,668 gene expression genetic scores, validated on a withheld subset of INTERVAL."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Platforms;
