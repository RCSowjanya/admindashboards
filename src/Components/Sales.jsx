import React from "react";
import ConversionRateChart from "./ConversionRateChart";
import TotalCommissionChart from "./TotalCommissionChart";
import AverageDealChart from "./AverageDealChart";
import TotalLeadsChart from "./TotalLeadsChart";
import AverageTimeChart from "./AverageTimeChart";
import OutstandingInvoicesChart from "./OutstandingInvoicesChart";
const Sales = () => {
  const data = [
    {
      id: 1,
      icon: "/Images/users-icon.png",
      number: 200,
      description: "Total Users",
      bgColor: "#DCFCE7",
      iconBgColor: "#3CD856",
    },
    {
      id: 2,
      icon: "/Images/installer-icon.png",
      number: 300,
      description: "Solar Installers",
      bgColor: "#F3E8FF",
      iconBgColor: "#BF83FF",
    },
    {
      id: 3,
      icon: "/Images/quote-icon.png",
      number: 5,
      description: "Total Quotes Submitted",
      bgColor: "#FFE2F5",
      iconBgColor: "#FA5A7D",
    },
    {
      id: 4,
      icon: "/Images/proposals-icon.png",
      number: 8,
      description: "Total Proposals Dispatched",
      bgColor: "#FFF4DE",
      iconBgColor: "#FF947A",
    },
  ];

  return (
    <div>
      {/*---Today's Sales----*/}
      <div className="space-y-3 mt-11 ml-5 mb-3">
        <h2 className="text-[20px] font-[600] ad"> Today&apos;s Sales</h2>
        <p className="text-[16px] font-[400]">Sales Summary</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {data.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.bgColor }}
            className="text-white p-4 rounded-lg flex items-center"
          >
            <div
              style={{ backgroundColor: item.iconBgColor }}
              className="p-3 rounded-full text-white mr-4 text-2xl"
            >
              <img src={item.icon} alt="item-icons" />
            </div>
            <div>
              <div className="text-[20px] font-[600] ad text-[#151D48]">
                {item.number}
              </div>
              <div className="text-[14px] text-[#425166] font-[400]">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*---Today's Sales----*/}
      <div className="flex gap-2 justify-center mt-9 pb-20">
        <div className="w-1/3">
          <ConversionRateChart />
        </div>
        <div className="w-1/3">
          <TotalCommissionChart />
        </div>
        <div className="w-1/3">
          <AverageDealChart />
        </div>
      </div>
      <div className="flex gap-2 justify-center mt-[6%] pb-[8%]">
        <div className="w-1/3">
          <TotalLeadsChart />
        </div>
        <div className="w-1/3">
          <AverageTimeChart />
        </div>
        <div className="w-1/3">
          <OutstandingInvoicesChart />
        </div>
      </div>
    </div>
  );
};

export default Sales;
