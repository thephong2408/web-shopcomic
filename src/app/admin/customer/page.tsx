"use client";
import React from "react";
import Search from "@/app/components/Search";
import Link from "next/link";
export default function User() {
  const arr = [1, 2, 3, 4, 5, 5, 6, 4, 3, 3, 3];
  return (
    <div className="p-5 max-h-screen overflow-auto">
      <div>
        <Search />
        <h1 className="py-5 text-[20px] font-bold">DANH SÁCH TÀI KHOẢN</h1>
        {/* danh sách tài khoản */}
        <div className="space-y-5 max-h-[50vh] overflow-auto">
          {arr.map((item, index) => (
            <div key={index}>
              <Link href={`/admin/customer/user${index}`}>
                <div className="w-full bg-slate-500 h-[80px] flex space-x-5">
                  <div className="size-[80px] rounded bg-white"></div>
                  <div className="flex-1 flex flex-col justify-between ">
                    <span className="font-bold">Name: Naruto</span>
                    <span>id: #kjsbekgjbwelh</span>
                    <span>Cảnh giới: trúc cơ </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
