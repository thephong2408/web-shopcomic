"use client";
import React from "react";

import ChartComponent from "../components/ChartComponent";
import { hourlyData, monthlyData, yearlyData } from "../components/Data";
import Link from "next/link";
export default function Admin() {
  const overviewStatistics = [
    "Tổng doanh thu",
    "Doanh thu hôm nay",
    "Tổng số truyện",
    "Số khách hàng",
  ];
  return (
    <div className="p-5">
      {overviewStatistics.map((item: any, index: number) => (
        <span
          className="text-18 font-bold flex flex-col w-full py-5"
          key={index}
        >
          {item} :
        </span>
      ))}
      <div className="flex flex-col space-y-4">
        {/* Biểu đồ giờ */}
        <ChartComponent data={hourlyData} title="Biểu đồ 24 giờ" />

        {/* Biểu đồ tháng */}
        <ChartComponent data={monthlyData} title="Biểu đồ 12 tháng" />

        {/* Biểu đồ năm */}
        <ChartComponent data={yearlyData} title="Biểu đồ 4 năm gần nhất" />
      </div>
    </div>
  );
}
