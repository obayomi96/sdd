import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";

const charOpt: AgChartOptions = {
  data: [
    { asset: "China", amount: 60000 },
    { asset: "Cocoa exports", amount: 40000 },
    { asset: "West Africa", amount: 7000 },
    { asset: "Ghana", amount: 5000 },
    { asset: "Europe ", amount: 30000 },
  ],
  title: {
    text: "Quick overview of your logistics",
  },
  series: [
    {
      type: "pie",
      angleKey: "amount",
      legendItemKey: "asset",
    },
  ],
};

const LogisticsChart = () => {
  return (
    <div
      data-sal="zoom-in"
      data-sal-delay="200"
      data-sal-duration="900"
      data-sal-easing="ease"
      data-sal-repeat
    >
      <AgChartsReact options={charOpt} />
    </div>
  );
};

export default LogisticsChart;
