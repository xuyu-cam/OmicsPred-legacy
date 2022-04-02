import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import { LinkIcon } from "@heroicons/react/outline";
import Htext from "./components/Htext";

import Href from "./components/Href";
import _ from "underscore";
//import { DataGrid } from "@mui/x-data-grid";
//import { DataGridPro } from "@mui/x-data-grid-pro";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography } from "@mui/material";

import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Link } from "react-router-dom";

import Download from "../Scores/components/Download";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink } from "react-router-dom";
import ScoresHtext from "./components/ScoresHtext";
import Sumary from "../Scores/components/Sumary";

import data from "./data/metabolon_plot.json";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

// added new
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFixedColumns,
  TableBandHeader,
  VirtualTable,
  TableColumnResizing,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";

/// for next type
import DataGrid, {
  Column,
  ColumnChooser,
  ColumnFixing,
} from "devextreme-react/data-grid";

import { PagingState, IntegratedPaging } from "@devexpress/dx-react-grid";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function Applications() {
  const [f, setFiltredRows] = useState([]);
  const [r, setRows] = useState([]);

  const names = data.map((e) => {
    return e.name;
  });

  const columns = names.map((e) => {
    if (e !== "Download") {
      return {
        name: e,
        align: "center",
        headerAlign: "center",
        title: e,
        width: 250,
      };
    } else {
      return {
        name: e,
        align: "center",
        headerAlign: "center",
        title: e,
        width: 250,
        renderCell: (params) => {
          return (
            <a href={params.value}>
              <CloudDownloadIcon className="text-indigo-600" />{" "}
            </a>
          );
        },
      };
    }
  });

  useEffect(() => {
    const rowsBefore = data.map((e) => {
      let val = Object.values(e.data);

      console.log("the link is", val[val.length - 1]);
      return val;
    });

    const rowsAfter = _.zip.apply(_, rowsBefore);

    var rows = [];
    var l = 0;
    rowsAfter.map((e, i) => {
      // e[e.length - 1] = <a href={e[e.length - 1]}>Link</a>;

      let obj = {};
      obj["ID"] = i;
      l++;
      for (var i = 0, c = names[0]; i < e.length; i++, c = names[i]) {
        obj[c] = e[i];
      }
      rows.push(obj);
      obj = {};
    });

    setRows(rows);
    setFiltredRows(rows);
  }, [data]);

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const dt = [
    {
      title: "Number of phenotypes scanned : ",
      type: "Text",
      value: "1123",
    },
    {
      title: " Cohort : ",
      type: "Text",
      value: " UK Biobank",
    },
    {
      title: "  Ancestry : ",
      type: "Text",
      value: " White British",
    },
    {
      title: "Testing Model for disease : ",
      type: "Text",
      value:
        " Age as the time scale Cox regression models (y ~ omics genetic score* + strat(sex) + genotyping array + 10PCs)",
    },
    {
      title: " Selection criterion : ",
      type: "Text",
      value: " FDR-adjusted p-value < 0.05",
    },
  ];

  /** 
  <Htext text="Sumarry" />
         
           
    
    


  

            <div className="w-full float-left pr-12">
              <h1 className="text-sm text-gray-600 text-justify">
                * Only traits that had a r2 {" > "}0.01 in internal validation
                were considerred in the association tests.
              </h1>
            </div>
         
            <div>
                    <Htext text="Download" ></Htext>
                    <div className="w-full">
                        <div className="w-[50%] h-[100px] shadow-sm">

                        </div>
                    </div>
           </div>


*/

  const handleSearch = (event) => {
    let value = event.target.value.toUpperCase();

    let result = [];
    result = r.filter((d) => {
      return Object.values(d).join("").toUpperCase().includes(value) !== false;
    });

    console.log(result);

    if (event.target.value.length === 0) {
      result = r;
    }
    setFiltredRows(result);
  };

  const [leftColumns] = useState([names[0], names[1]]);

  console.log("the f is ", f);

  const TableRef = useRef(null);

  function cellRender(data) {
    return (
      <a href={data.value}>
        <CloudDownloadIcon className="text-indigo-600" />{" "}
      </a>
    );
  }

  const [open, setOpen] = useState(true);
  const [leftpanel, setLeftpanel] = useState("lg:w-[20vw]");
  const [pl, setPl] = useState("lg:pl-[20vw]");
  const [rightpanel, setRightpanel] = useState(" w-[100vw] lg:w-[80vw]");
  const [icon, setIcon] = useState("right-12 mr-[-50px] ");

  const handlefold = () => {
    if (open) {
      setLeftpanel("lg:w-0");
      setPl("lg:pl-0");
      setRightpanel("w-screen");
      setOpen(false);
      setIcon("right-12 mr-[-100px] p-5 shadow-lg");
    } else {
      setLeftpanel("lg:w-[20vw]");
      setPl("lg:pl-[20vw]");
      setRightpanel("w-[80vw] ");
      setOpen(true);
      setIcon("right-12 mr-[-50px] shadow-none");
    }
  };

  return (
    <div>
      <div className=" w-full mt-[48px]  md:mt-[70px] overflow-x-hidden">
        <div className=" lg:flex block w-screen bg-white absolute overflow-x-hidden">
          <div
            id="leftpanel"
            className={
              "w-screen   lg:shadow-none  lg:max-h-screen  bg-white lg:fixed transition-all ease-in-out delay-0 " +
              leftpanel
            }
          >
            <div
              id="leftpanel"
              className=" overflow-y-scroll max-h-screen mt-[-130px] pt-[150px]"
            >
              <div className="bg-white w-full">
                <div className="w-full h-10 hidden md:block ">
                  <div
                    className={
                      "absolute cursor-pointer p-2 bg-white rounded-r-full " +
                      icon
                    }
                  >
                    <MenuOpenIcon
                      onClick={handlefold}
                      className={" text-slate-500"}
                    />
                  </div>
                </div>

                <Accordion
                  expanded={expanded === "index1"}
                  onChange={handleChange("index1")}
                  className="shadow-none"
                  sx={{ boxShadow: "none", border: "none" }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <ScoresHtext text="Summary" />
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <Sumary data={dt}></Sumary>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "index2"}
                  onChange={handleChange("index2")}
                  className="shadow-none"
                  sx={{ boxShadow: "none", border: "none" }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <ScoresHtext text="Download" />
                  </AccordionSummary>
                  <AccordionDetails>
                    <div></div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>

          <div className={"overflow-y-scroll overflow-x-hidden h-auto  " + pl}>
            <div
              className={
                "min-h-max px-0  grid place-items-center flex-1  bg-white overflow-y-scroll overflow-x-hidden max-w-[100vw]  border-l border-slate-300 transition-width ease-in-out delay-10  " +
                rightpanel
              }
            >
              <div className=" max-w-[100vw] lg:max-w-[80vw] w-[100vw] h-[100%] bg-white">
                <div className="pl-5">
                  <Htext text="Explore and download omics genetic score-phenotype associations" />
                </div>
                <div className="w-full h-auto lg:px-12">
                  <div className="w-full h-auto p-2 rounded-md   my-5 mr-5">
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 2px",
                        display: "flex",
                        alignItems: "center",
                        width: 700,
                      }}
                      className="mt-8 mb-2 shadow-none max-w-[90%] w-[400px]"
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Find your row quickly"
                        onChange={(e) => handleSearch(e)}
                        inputProps={{ "aria-label": "search google maps" }}
                      />
                      <IconButton
                        type="submit"
                        sx={{ p: "10px" }}
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>
                    </Paper>

                    <DataGrid
                      id="gridContainer"
                      dataSource={f}
                      keyExpr="ID"
                      allowColumnReordering={true}
                      allowColumnResizing={true}
                      columnAutoWidth={true}
                      showBorders={true}
                      className="max-h-[700px]"
                    >
                      <ColumnChooser enabled={true} />
                      <ColumnFixing enabled={true} />

                      {columns.map((c) => {
                        if (c.name == names[0] || c.name == names[1]) {
                          return (
                            <Column
                              key={c.name}
                              alignment="center"
                              dataField={c.name}
                              fixed={true}
                            />
                          );
                        } else {
                          if (c.name == "Download") {
                            return (
                              <Column
                                key={c.name}
                                alignment="center"
                                dataField={c.name}
                                cellRender={cellRender}
                              />
                            );
                          } else {
                            return (
                              <Column
                                key={c.name}
                                alignment="center"
                                dataField={c.name}
                              />
                            );
                          }
                        }
                      })}
                    </DataGrid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
