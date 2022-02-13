import React, { useEffect, useLayoutEffect, useState } from "react";
import Papa from "papaparse";
import { usePapaParse } from "react-papaparse";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Scatter, Chart } from "react-chartjs-2";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [1, 8, 85, 196, 185, 138, 796, -158, 962, 97, 960, 785];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      type: "scatter",
      data: [5, 8, 90, 765, 162, 140, 800, -150, 1000, 100, 950, 780],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      type: "line",
      data: [1, 8, 85, 196, 185, 138, 796, -158, 962, 97, 960, 785],
      borderColor: "rgb(0, 0, 0 , 1)",
      backgroundColor: "rgba(0, 0, 0, 0.0)",
    },
  ],
};

export default function ChartPlot(props) {
  console.log("this is the real data", props.data);
  const [study1, setStudy1] = useState("");
  const [study2, setStudy2] = useState("");

  const [datastudy1, setdataStudy1] = useState([]);
  const [datastudy2, setdataStudy2] = useState([]);

  useEffect(() => {
    if (props.data.length !== 0) {
      console.log("got it ");
      setStudy1(props.data[0][0]);
      setStudy2(props.data[0][0]);

      props.data.map((r) => {
        console.log("the r =>", r, "the data = >", r[0]);
        setTimeout(() => {
          setdataStudy1([...datastudy1, r[0]]);
        }, 100);
      });

      props.data.map((r) => {
        setTimeout(() => {
          setdataStudy2([...datastudy2, r[0]]);
        }, 100);
      });
    } else {
      console.log("test again");
    }
  }, [props.data]);

  const handleChange_1 = (event) => {
    setStudy1(event.target.value);
  };

  const handleChange_2 = (event) => {
    setStudy2(event.target.value);
  };

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <React.Fragment>
      {props.data.length == 0 ? null : (
        <div className="">
          <div className="w-full h-[50px] flex">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={study1}
                onChange={handleChange_1}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>{props.data[0][0]}</em>
                </MenuItem>
                {props.data[0].map((r) => {
                  return <MenuItem value={r}>{r}</MenuItem>;
                })}
              </Select>
              <FormHelperText>Without label</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={study2}
                onChange={handleChange_2}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>{props.data[0][0]}</em>
                </MenuItem>
                {props.data[0].map((r) => {
                  return <MenuItem value={r}>{r}</MenuItem>;
                })}
              </Select>
              <FormHelperText>Without label</FormHelperText>
            </FormControl>
          </div>
          <Chart options={options} data={data} />
        </div>
      )}
    </React.Fragment>
  );
}
