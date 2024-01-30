// Chart Component
import React from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";

const chatOpt: AgChartOptions = {
  data: [
    { month: "Jan", avgTemp: 2.3, iceCreamSales: 162000 },
    { month: "Mar", avgTemp: 6.3, iceCreamSales: 302000 },
    { month: "May", avgTemp: 16.2, iceCreamSales: 800000 },
    { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254000 },
    { month: "Sep", avgTemp: 14.5, iceCreamSales: 950000 },
    { month: "Nov", avgTemp: 8.9, iceCreamSales: 200000 },
  ],
  series: [{ type: "bar", xKey: "month", yKey: "iceCreamSales" }],
};

const ShipmentChart = () => {
  return (
    <div
      data-sal="zoom-in"
      data-sal-delay="200"
      data-sal-duration="900"
      data-sal-easing="ease"
      data-sal-repeat
    >
      <AgChartsReact options={chatOpt} />
    </div>
  );
};

export default ShipmentChart;
