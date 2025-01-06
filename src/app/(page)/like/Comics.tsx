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
      <div className=" grid lg:grid-cols-7 grid-cols-2  gap-5 py-[30px]">
        {data.map((item: any, index: number) => (
          <Card key={index} shop={false} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}
