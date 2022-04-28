import React from "react";

import FlashOnIcon from "@mui/icons-material/FlashOn";

export default function Htext(props) {
  return (
    <div className="py-6 w-full float-left">
      <h1
        style={{ "font-family": "Poppins", fontWeight: "1000px" }}
        className="text-xl  md:pl-10 tracking-tight font-extrabold font-sans text-gray-900 sm:text-4xl md:text-3xl"
      >
        <span className=" text-indigo-600 inline">
          <FlashOnIcon className="mx-2"></FlashOnIcon>
        </span>
        {props.text}
      </h1>
    </div>
  );
}
