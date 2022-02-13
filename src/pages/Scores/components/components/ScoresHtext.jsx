import React from "react";

import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
export default function ScoresHtext(props) {
  return (
    <div className="py-2 w-full float-left">
      <h1
        style={{ "font-family": "Poppins", fontWeight: "1000px" }}
        className="text-2xl pl-10 tracking-tight font-extrabold font-sans text-gray-900 sm:text-4xl md:text-3xl"
      >
        <span className="block text-indigo-600 xl:inline">
          <DataSaverOffIcon className="mx-2 "></DataSaverOffIcon>
        </span>
        {props.text}
      </h1>
    </div>
  );
}