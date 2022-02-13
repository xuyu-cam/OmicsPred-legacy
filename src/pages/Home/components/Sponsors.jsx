import React from "react";

import DPHPC from "..//..//..//Assets/sponsors/DPHPC.png";
import HDRuk from "..//..//..//Assets/sponsors/HDRuk.png";
import Baker from "..//..//..//Assets/sponsors/Baker.png";
import Htext from "./components/Htext" ;

export default function Sponsors() {
  return (
    <div
       className="w-screen bg-white px-[5%] py-[20px] overflow-visible"
    >
          <Htext text="Supported by " />
      <div    className=" pb-[50px] my-[20px] px-[20px] lg:flex md:grid sm:grid md:place-items-center overflow-visible "   >
        <img style={{"box-shadow":" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" , padding :"15px" ,"borderRadius" :"10px"  , float :"left" }} className="h-[100px] mr-10 mb-10" src={DPHPC} />
        <img style={{"box-shadow":" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" , padding :"15px" ,"borderRadius" :"10px" , float :"left" }} className="h-[100px] mr-10 mb-10" src={HDRuk} />
        <img style={{"box-shadow":" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" , padding :"15px" ,"borderRadius" :"10px" , float :"left" }} className="h-[100px] mr-10 mb-10" src={Baker} />
      </div>
    </div>
  );
}