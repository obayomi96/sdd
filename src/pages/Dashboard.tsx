import React, { useState, useEffect } from "react";
import { getIpAddressAndNetworkInfo } from "geo-ipify";

import DashboardLayout from "../components/DashboardLayout";
import NewsUpdateCard from "../components/NewsUpdateCard";
import ProductUpdateCard from "../components/ProductUpdateCard";
import ShipmentChart from "../components/ShipmentChart";
import LogisticsChart from "../components/LogisticsSummary";
import IntroCard from "../components/IntroCard";

function Dashboard() {
  const [networkStatus, setNetworkStatus] = useState<boolean>(false);
  const [networkProvider, setNetworkProvider] = useState<string>("");

  const handleFetch = async () => {
    const response: any = await getIpAddressAndNetworkInfo(
      process.env.REACT_APP_GEO_API_KEY as string
    );
    console.log(response);
    if (response.data) {
      setNetworkStatus(true);
      setNetworkProvider(response?.data?.isp);
    } else {
      setNetworkStatus(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <DashboardLayout>
      {networkStatus && (
        <div className="w-full px-4 text-center mt-[1.25rem] italic text-base">
          If your internet is bad, please reset your connection or switch from{" "}
          {networkProvider}
        </div>
      )}
      <div className="p-4 mt-[20px]">
        <IntroCard />
        <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-between mt-10 mb-20">
          <div className="w-full lg:w-[45%] h-[250px]">
            <p className="font-bold text-[#2e2d2d] my-2">Shipment Summary </p>
            <ShipmentChart />
          </div>
          <div className="w-2" />
          <div className="w-full lg:w-[45%] h-[250px]">
            <p className="font-bold text-[#2e2d2d] my-2">Logistics Summary </p>
            <LogisticsChart />
          </div>
        </div>
        <div className="h-6" />
        <div className="w-full h-auto mt-[50px]">
          <p className="font-[700] text-[20px] pb-4">Product updates</p>
          <div className="w-full flex flex-wrap lg:flex-nowrap justify-start items-center">
            <ProductUpdateCard
              title=" Easy to use"
              description="Lorem ipsum dolor sit amet consectetur. Consectetur pretium proin
          integer dui et. Ac aliquam sit tellus nunc odio interdum."
              srcUrl="/assets/images/easy2use.png"
            />
            <ProductUpdateCard
              title="Track shipment easily"
              description="Lorem ipsum dolor sit amet consectetur. Consectetur pretium proin
          integer dui et. Ac aliquam sit tellus nunc odio interdum."
              srcUrl="/assets/images/trackshipment.png"
            />
            <ProductUpdateCard
              title="Generate reports"
              description="Lorem ipsum dolor sit amet consectetur. Consectetur pretium proin
          integer dui et. Ac aliquam sit tellus nunc odio interdum."
              srcUrl="/assets/images/generalship.png"
            />
          </div>
        </div>

        <div className="w-full h-auto mt-[50px]">
          <p className="font-[700] text-[20px] pb-4">News updates</p>
          <div className="w-full flex flex-wrap lg:flex-nowrap justify-start items-center">
            <NewsUpdateCard
              title="Lorem ipsum dolor sit amet consectetur. Consectetur pretium proin integer dui et"
              description="Lorem ipsum dolor sit amet consectetur. Consectetur pretium proin integer dui et. Ac aliquam sit tellus nunc odio interdum. "
              srcUrl="/assets/images/newu1.png"
            />
            <NewsUpdateCard
              title="Lorem ipsum dolor sit amet consectetur. Consectetur pretium proin integer dui et"
              description="Lorem ipsum dolor sit amet consectetur. Consectetur pretium proin integer dui et. Ac aliquam sit tellus nunc odio interdum. "
              srcUrl="/assets/images/newu2.png"
            />
            <NewsUpdateCard
              title="Lorem ipsum dolor sit amet consectetur. Consectetur pretium proin integer dui et"
              description="Lorem ipsum dolor sit amet consectetur. Consectetur pretium proin integer dui et. Ac aliquam sit tellus nunc odio interdum. "
              srcUrl="/assets/images/newu3.png"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
