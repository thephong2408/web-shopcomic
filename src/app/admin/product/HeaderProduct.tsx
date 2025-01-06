"use client";
import React from "react";

import { FaSearch } from "react-icons/fa";
import Search from "@/app/components/Search";

export default function HeaderProduct() {
  return (
    <div className="w-full flex justify-center py-5">
      {/* <div className=" flex overflow-hidden rounded-full ">
        <div className="rounded-l-full w-[400px] border-[1px] border-[#f0f0f0]">
          <input className="py-2 pl-5" type="text" placeholder="Tìm kiếm" />
        </div>
        <div className="h-full w-[60px] flex justify-center items-center text-black bg-[#ccc] hover:opacity-40 rounded-r-full">
          <FaSearch />
        </div>
      </div> */}
      <Search />
    </div>
  );
}
