"use client";
import React from "react";
import Zero from "./Zero";
import Card from "@/app/components/Card";
import { useState } from "react";

export default function Comics() {
  const [data, setData] = useState<any>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 7, 5,
  ]);
  if (data.length === 0) {
    return (
      <div>
        <Zero message="Chưa có truyện nào là lưu" />
      </div>
    );
  }

  return (
    <div className=" grid grid-cols-7 gap-5 py-[30px]">
      {data.map((item: any, index: number) => (
        <Card shop={false} />
      ))}
    </div>
  );
}
