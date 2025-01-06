"use client";
import React, { useState } from "react";
import AlertZero from "@/app/components/AlertZero";
import Card from "../card/page";
import Card1 from "@/app/components/Card1";
import Pagination from "@/app/components/Pagination";

export default function Video() {
  const [data, setData] = useState<any>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 7, 5,
  ]);
  if (data.length === 0) {
    return (
      <div>
        <AlertZero message="Chưa có video nào được lưu nào là lưu" />
      </div>
    );
  }
  return (
    <div>
      <div className=" grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-2 lg:py-[30px] py-[10px]">
        {data.map((item: any, index: number) => (
          <Card1
            key={index}
            shop={false}
            textCard="K-ICM ft. Văn Mai Hương, Lê Bống"
            height={150}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
}
