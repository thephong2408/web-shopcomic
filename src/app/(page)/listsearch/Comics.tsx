"use client";
import React from "react";
import AlertZero from "@/app/components/AlertZero";
import Card from "@/app/components/Card";
import { useState } from "react";
import Pagination from "@/app/components/Pagination";

export default function Comics() {
  const [data, setData] = useState<any>([]);
  if (data.length === 0) {
    return (
      <div>
        <AlertZero message="Chưa có truyện nào là lưu" />
      </div>
    );
  }

  return (
    <div>
      <div className=" grid xl:grid-cols-7 md:grid-cols-5 grid-cols-2 lg:gap-5 gap-2 lg:py-[30px] py-[15px]">
        {data.map((item: any, index: number) => (
          <Card shop={false} key={index} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}
