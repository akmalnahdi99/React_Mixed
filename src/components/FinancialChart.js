// need maintainance
import React from "react";
import ChartistGraph from "react-chartist";
// import { AppContext } from "../context/settings";
//TASK This file need to be written the hooks way

export default function LineChart({ labels,  Incomes, Expenses, netProfit }) {

  var data = {
    labels: labels,
    series: [Incomes, Expenses, netProfit],
  };

  var options = {
    fullWidth: true,
    height: "220px",
    chartPadding: {
      right: 30,
      left: 10,
      top: 20,
    },
  };

  var type = "Line";

  return (
    <div>
      <ChartistGraph data={data} options={options} type={type} />
    </div>
  );
}
