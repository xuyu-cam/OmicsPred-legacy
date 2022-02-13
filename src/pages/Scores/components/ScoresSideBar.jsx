import react from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";

import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Footer from "../../Home/components/Footer";

import { NavLink } from "react-router-dom";

import ScoresHtext from "./components/ScoresHtext";
const pages = ["SOMALOGIC", "OLINK", "METABOLON", "ILLUMINA_RNASEQ"];
const ScoreSideBar = () => {
  const activestyle = {
    color: "blue",
  };
  return (
    <div className="w-auto h-screen overflow-hidden bg-white w-[20%] border-r border-slate-300">
      <div
        style={{ background: "white" }}
        className="pt-[100px]  bg-white "
        color="white"
      >
        <NavLink to={"/Scores"}>
          <ScoresHtext text="Scores" />
        </NavLink>

        <div className="bg-white w-full">
          {pages.map((p) => {
            return (
              <div className="m-3 p-2 rounded bg-white shadow-md flex cursor-pointer hover:bg-indigo-600  group ">
                <ChevronRightIcon className="w-10 h-10 ml-2 mt-2 text-indigo-600 group-hover:text-white" />
                <NavLink
                  to={"/Scores/" + p}
                  style={({ isActive }) => (isActive ? activestyle : {})}
                  className=" pt-3 text-slate-800  text-[12px]  pl-6 py-2 group-hover:text-white"
                >
                  {p}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      ;
      <Footer />
    </div>
  );
};

export default ScoreSideBar;
