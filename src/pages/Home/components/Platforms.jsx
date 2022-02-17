import React from "react";
import { Swiper, SwiperSlide as div } from "swiper/react";
import Slide from "./components/Slide";
import Htext from "./components/Htext";

import logo from "../../../Assets/landing.jpg";
import rna_img from "../../../Assets/rna.png";
import soma_img from "../../../Assets/Somalogic.png";
import olink_img from "../../../Assets/Olink.png";

import meta_img from "../../../Assets/Metabolon.png";
import night_img from "../../../Assets/Nightingale.png";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import Href from "./components/Href";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Platforms = () => {
  return (
    <div className="w-screen bg-white px-[5%] py-[20px] overflow-hidden">
      <Htext text="Platforms with Genetic Scores" />

      <div className="max-w-full py-[20px] px-[5px] overflow-x-scroll flex">
        <div className="min-w-[345px] h-[100%]  px-5">
          <Slide
            logo={soma_img}
            text="Proteomics (plasma) "
            discription={
              <div>
                {" "}
                2,384 protein genetic scores, validated on the{" "}
                <Href
                  text="FENLAND cohort"
                  href="https://www.mrc-epid.cam.ac.uk/research/studies/fenland/"
                ></Href>{" "}
              </div>
            }
          />
        </div>
        <div className="min-w-[345px] h-[100%]  px-5">
          {" "}
          <Slide
            logo={olink_img}
            text="Proteomics (plasma)"
            discription={
              <div>
                308 protein genetic scores, validated on the{" "}
                <Href
                  text="NSPHS cohort"
                  href="https://pubmed.ncbi.nlm.nih.gov/20568910/"
                ></Href>{" "}
                and{" "}
                <Href
                  text="ORCADES cohort"
                  href="https://www.ed.ac.uk/viking/about-us/our-studies"
                ></Href>{" "}
              </div>
            }
          />
        </div>
        <div className="min-w-[345px] h-[100%]  px-5">
          {" "}
          <Slide
            logo={meta_img}
            text="Metabolomics (plasma)"
            discription={
              <div>
                726 metabolite genetic scores, validated on a withheld subset of
                INTERVAL and{" "}
                <Href
                  text="ORCADES cohort"
                  href="/https://www.ed.ac.uk/viking/about-us/our-studies"
                ></Href>{" "}
              </div>
            }
          />{" "}
        </div>
        <div className="min-w-[345px] h-[100%]  px-5">
          {" "}
          <Slide
            logo={night_img}
            text="Metabolomics (serum)"
            discription={
              <div>
                141 metabolite genetic scores, validated on{" "}
                <Href
                  text="UK Biobank"
                  href="https://www.ukbiobank.ac.uk/"
                ></Href>{" "}
                ,{" "}
                <Href
                  text="ORCADES cohort"
                  href="https://www.ed.ac.uk/viking/about-us/our-studies"
                ></Href>{" "}
                and{" "}
                <Href
                  text="VIKING cohort"
                  href="https://www.ed.ac.uk/viking/about-us/our-studies"
                ></Href>{" "}
              </div>
            }
          />
        </div>
        <div className="min-w-[345px] h-[100%]  px-5">
          {" "}
          <Slide
            logo={rna_img}
            text="Transcriptomics (whole blood)"
            discription="13,668 gene expression genetic scores, validated on a withheld subset of INTERVAL."
          />
        </div>
      </div>
    </div>
  );
};
export default Platforms;
