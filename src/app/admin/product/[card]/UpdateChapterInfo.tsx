"use client";
import React from "react";
import Link from "next/link";
import Chapter from "./Chapter";
export default function UpdateChapterInfo() {
  const arr = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  return (
    <div className="p-5 ">
      {" "}
      <h1 className="text-[20px] font-bold mb-5">Hộ vệ biến thành quỷ</h1>
      <div className="grid grid-cols-6 gap-3">
        {arr.map((item, index) => (
          <div key={index} className="h-[50px]  bg-slate-400">
            <Link href={"manage-chapters-1"}>
              <div className="flex">
                <div className="size-[50px] bg-white"></div>
                <div className="flex flex-1 flex-col justify-between">
                  <span className="px-2">chapter1</span>
                  <span className=" truncate-lines-1 w-full px-2 ">
                    hãy yêu kkkk đj kkkkkj
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
