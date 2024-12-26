"use client";
import React, { useState } from "react";

import Video from "./Video";
import Information from "./Information";
import Layout1 from "@/app/layout/Layout1";
import ListMusic from "./ListMusic";
import ListComment from "./ListComment";
import CardMusic from "./CardMusic";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("chapter");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <Layout1>
      <div className="min-h-screen">
        <Video />
        <Information />
        <div className="h-[60px] text-20 bg-[#232323] z-10 flex justify-center items-center">
          <span
            onClick={() => handleTabClick("chapter")}
            className={`h-full lg:px-10 border-2 border-transparent flex items-center cursor-pointer ${
              activeTab === "chapter"
                ? "border-b-[#f47213] text-[#f47213]"
                : "border-transparent"
            }`}
          >
            Tập
          </span>
          <span
            onClick={() => handleTabClick("more")}
            className={`h-full lg:px-10 px-7 border-2 border-transparent flex items-center cursor-pointer ${
              activeTab === "more"
                ? "border-b-[#f47213] text-[#f47213]"
                : "border-transparent"
            }`}
          >
            Xem Thêm
          </span>
          <span
            onClick={() => handleTabClick("comments")}
            className={`h-full lg:px-10 border-2 border-transparent flex items-center cursor-pointer ${
              activeTab === "comments"
                ? "border-b-[#f47213] text-[#f47213]"
                : "border-transparent"
            }`}
          >
            Bình Luận (5)
          </span>
        </div>
        <div className="flex justify-center">
          {activeTab === "chapter" && <ListMusic />}
          {activeTab === "comments" && <ListComment />}
          {activeTab === "more" && <CardMusic />}
          {/* You can add the logic for the "Xem Thêm" tab if there's specific content to display */}
        </div>
      </div>
    </Layout1>
  );
}
