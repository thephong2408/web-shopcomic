"use client";
import React from "react";
import Zero from "./Zero";
import Card from "@/app/components/Card";
import { useState } from "react";

export default function Comics() {
  const [data, setData] = useState<any>([]);
  if (data.length === 0) {
    return (
      <div>
        <Zero message="Chưa có truyện nào là lưu" />
      </div>
    );
  }

  return (
    <div className=" grid lg:grid-cols-7 grid-cols-2  gap-5 py-[30px]">
      {data.map((item: any, index: number) => (
        <Card key={index} shop={false} />
      ))}
    </div>
  );
}
