import react from "react";

import Htext from "./components/Htext";
import LinkIcon from "@mui/icons-material/Link";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Download = (props) => {
  return (
    <div className="h-auto w-full">
      <Htext text="Download" />
      <div className="w-full pl-12">
        {props.data.map((e) => {
          return (
            <div className="w-[200px] p-4 rounded-md shadow-md float-left my-5 mr-5">
              <a href={e.value}>
                {" "}
                <h1
                  key={e.title}
                  className="text-xl text-gray-600 text-justify"
                >
                  <h1 className="text-sm h-full grid place-items-center">
                    {e.title}
                  </h1>
                  <div className="text-[15px] w-full text-center  py-3 font-extrabold text-indigo-600">
                    <CloudDownloadIcon className="text-green-500 mx-2 " />
                  </div>
                </h1>
              </a>
            </div>
          );
        })}
      </div>
      <div className="w-full pl-12 float-left">
        <h1 className="text-blue-300">
          <a href="https://creativecommons.org/about/cclicenses/">
            <LinkIcon></LinkIcon>
            All genetic scores are provided under a CC-BY license
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Download;
