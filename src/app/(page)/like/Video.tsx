"use client";
import React from "react";
import Zero from "./Zero";
import { useState } from "react";
import Card1 from "@/app/components/Card1";

export default function Video() {
  const [data, setData] = useState<any>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 7, 5,
  ]);
  if (data.length === 0) {
    return (
      <div>
        <Zero message="Chọn video nào là lưu" />
      </div>
    );
  }
  return (
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
  );
}
