import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CircleChart(props) {
  console.log("the data on the circle 1", props.study_1);
  console.log("the data on the circle  2 ", props.study_2);

  const data = {
    labels: [">= 0.3", ">= 0.1 && <= 0.3", "<= 0.1"],
    options: {
      scales: {
        y: {
            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, ticks) {
                    return '$' + value;
                }
            }
        },
      plugins: {
        
        subtitle: {
          display: true,
          text: "Custom Chart Subtitle",
        },
      },
    },
  } ,
    datasets: [
      {
        label: "# of study 2",
        data: [
          Object.values(props.study_1).filter((e) => {
            return e <= 0.1;
          }).length,
          Object.values(props.study_1).filter((e) => {
            return (e >= 0.1) & (e <= 0.3);
          }).length,
          Object.values(props.study_1).filter((e) => {
            return e >= 0.3;
          }).length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },

      {
        label: "# of study 2",
        data: [
          Object.values(props.study_2).filter((e) => {
            return e <= 0.1;
          }).length,
          Object.values(props.study_2).filter((e) => {
            return (e >= 0.1) & (e <= 0.3);
          }).length,
          Object.values(props.study_2).filter((e) => {
            return e >= 0.3;
          }).length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}
