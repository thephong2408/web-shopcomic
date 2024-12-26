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
    <div className=" grid grid-cols-4 gap-10 py-[30px]">
      {data.map((item: any, index: number) => (
        <Card1
          shop={false}
          textCard="K-ICM ft. Văn Mai Hương, Lê Bống"
          height={200}
        />
      ))}
    </div>
  );
}
