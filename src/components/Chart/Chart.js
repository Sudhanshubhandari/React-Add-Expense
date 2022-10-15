import React from "react";
import Chartbar from "./Chartbar";
import './Chart.css'
const Chart = (props) => {
    //To set the maximum value for the bar  
    const dataPointvalue=props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaximum=Math.max(...dataPointvalue)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
