import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
} from "react";
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
import annotationPlugin from 'chartjs-plugin-annotation';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircleChart from "./doughnut";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  annotationPlugin,
  Title,
  Tooltip,
  Legend
);

const ChartWithData = (props) => {
  console.log("data to plot 1 : ", props.data_1);
  console.log("data to plot  2 : ", props.data_2);
const d = Object.values(props.data_1)
  const ChartRef = useRef(null);




  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      subtitle: {
        display: true,
        text: 'Custom Chart Subtitle'
    },
      annotation: {
        annotations: {
          box1: {
            // Indicates the type of annotation
            type: 'line',
            xMin: 0,
            xMax: Math.max(...d),
            yMin: 0,
            yMax: Math.max(...d),
            backgroundColor: 'rgba(255, 99, 132, 0.25)'
          } ,
        
        }
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  
  const labels = [...d];

  const data = {
    
    labels,
    datasets: [
      {
        label: props.name_2,
        type: "scatter",
        elements: {
          point: {
            radius: 0.5,
          },
          title : {
            color : "red"
          }
        },
        data: Object.values(props.data_2),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  var i = false ;

  const plugins = [
    {
      afterDraw: (chart) => {
        // eslint-disable-next-line no-underscore-dangle
        if(!i){
          const { ctx } = chart;
          // draw vertical line
          
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(100, 100);
          ctx.lineWidth = 20;
          ctx.strokeStyle = '#1C2128';
          ctx.stroke();
          ctx.restore();
          i  = true ;
        }
          // find coordinates of tooltip
         
      
      },
    },
  ];




  return <Chart id="canvas" ref={ChartRef} options={options} data={data}  />;
};

export default function ChartPlot(props) {
  console.log("this is the real data", props.data);
  const [study1, setStudy1] = useState(props.data[0].name);
  const [study2, setStudy2] = useState(props.data[0].name);

  const [datastudy1, setdataStudy1] = useState(props.data[0].data);
  const [datastudy2, setdataStudy2] = useState(props.data[0].data);

  const handleChange_1 = (event) => {
    setStudy1(event.target.value);
    props.data.map((e) => {
      if (e.name == event.target.value) {
        setdataStudy1(e.data);
      }
    });
  };

  const handleChange_2 = (event) => {
    setStudy2(event.target.value);
    props.data.map((e) => {
      if (e.name == event.target.value) {
        setdataStudy2(e.data);
      }
    });
  };

  return (
    <React.Fragment>
      <div className="">
        <div className="w-full h-[50px] flex">
          <FormControl hiddenLabel="helo" sx={{ m: 1, minWidth: 120 }}>

            <Select
              value={study1}
              onChange={handleChange_1}
              displayEmpty
              
            >
              <MenuItem value="">
                <em>{props.data[0].name}</em>
              </MenuItem>
              {props.data.map((r) => {
                return <MenuItem value={r.name}>{r.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={study2}
              onChange={handleChange_2}
              displayEmpty
              inputProps={{ "aria-label": "study 2" }}
            >
              <MenuItem value="">
                <em>{props.data[0].name}</em>
              </MenuItem>
              {props.data.map((r) => {
                return <MenuItem value={r.name}>{r.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
        <Suspense fallback={<div>data is comming !</div>}>
          <ChartWithData
            data_1={datastudy1}
            data_2={datastudy2}
            name_1={study1}
            name_2={study2}
          />
          <div className="align-center py-5 w-full grid place-items-center"> 
                {study1}
          </div>
          <div className="w-full grid place-items-center pt-10">
            <div className="w-[50%] ">
              <CircleChart study_1={datastudy1} study_2={datastudy2} />
            </div>
          </div>
        </Suspense>
      </div>
    </React.Fragment>
  );
}
