import React from "react";

import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";

export default function ScoresHtext(props) {
  return (
    <div className="py-2 w-full float-left">
      <h1
        style={{ "font-family": "Poppins", fontWeight: "1000px" }}
        className="text-2xl grid place-items-center tracking-tight font-extrabold font-sans text-gray-900 sm:text-4xl md:text-3xl"
      >
        <div>
          <span className="text-indigo-600 inline">
            <DataSaverOffIcon className="mx-2"></DataSaverOffIcon>
          </span>
          {props.text}
        </div>
      </h1>
    </div>
  );
}
