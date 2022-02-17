import React from "react";

import twitter from "..//..//..//Assets/icons/twitter.png";
import copy from "..//..//..//Assets/icons/copy.png";
import link from "..//..//..//Assets/icons/link.png";

export default function Footer() {
  return (
    <div
      className="grid place-items-center  mt-10 w-full h-[50px] bg-white"
      style={{ "border-top": "1px solid rgb(240, 244, 248)" }}
    >
      <div
        className="grid place-items-center lg:flex  my-2 w-full h-[50px] bg-white"
      >
        <div className="w-auto lg:mx-6 lg:w-[90%] flex space-x-10">
          <a href="https://twitter.com/CamBakerSGI">
            <img className="h-[25px]" src={twitter} />
          </a>
          <a href="http://www.inouyelab.org/">
            <img className="h-[25px]" src={link} />
          </a>
          <img className="h-[25px]" src={copy} />
        </div>
        <div className="w-auto lg:mx-6 lg:w-[90%] flex space-x-10" >
          <h1 className="h-full text-left">
            developed by{" "}
            <a
              href="https://www.linkedin.com/in/fiberx01/"
              className="text-blue-600"
            >
              Mohamed Chouichou
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
