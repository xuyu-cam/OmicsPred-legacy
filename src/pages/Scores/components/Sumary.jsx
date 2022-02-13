import react from "react";

import Htext from "./components/Htext";
import LinkIcon from "@mui/icons-material/Link";

const Sumary = (props) => {
  return (
    <div className="min-h-fit w-full ">
      <Htext text="Sumarry" />
      <div className="w-auto h-full pl-12">
        {props.data.map((e) => {
          return (
            <div className="min-h-auto">
              <div className="w-[200px] p-4 rounded-md shadow-md float-left my-5 mr-5">
                <h1
                  key={props.data.title}
                  className="text-xl text-gray-600 text-justify"
                >
                  <h1 className="text-sm h-full grid place-items-center">
                    {e.title}
                  </h1>
                  <h1 className="text-[15px] w-full text-center  py-3 font-extrabold text-indigo-600">
                    {e.type == "Link" ? (
                      <a href="#">
                        {" "}
                        <LinkIcon className="text-blue-300 mx-2" />
                        {e.value}
                      </a>
                    ) : (
                      <span>{e.value}</span>
                    )}
                  </h1>
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sumary;
