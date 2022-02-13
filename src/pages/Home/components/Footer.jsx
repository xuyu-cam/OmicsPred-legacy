import React from "react";

import twitter from "..//..//..//Assets/icons/twitter.png";
import copy from "..//..//..//Assets/icons/copy.png";
import link from "..//..//..//Assets/icons/link.png";

export default function Footer() {
  return (
    <div
      className="grid place-items-center  mt-10 w-full h-[70px] bg-white"
      style={{ "border-top": "1px solid rgb(240, 244, 248)" }}
    >
      <div className="w-[90%] flex space-x-10" >
        <img className="h-[40px]" src={twitter} />
        <img className="h-[40px]" src={link} />
        <img className="h-[40px]" src={copy} />
      </div>
    </div>
  );
}
