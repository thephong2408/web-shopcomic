"use client";
import React, { useState } from "react";
import Layout1 from "@/app/layout/Layout1";
import Comics from "./Comics";
import Video from "./Video";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("tat-ca"); // Sử dụng state để lưu tên tab đang chọn
  const [user, setUser] = useState<boolean>(false);

  return (
    <Layout1>
      <div className="min-h-screen mt-[100px] px-[100px]">
        <span className="flex text-[20px] cursor-pointer">
          <span
            onClick={() => setActiveTab("tat-ca")}
            className={`p-[20px] border-b-[3px] ${
              activeTab === "tat-ca"
                ? "border-[#ed4d2d] text-[#ed4d2d]"
                : "border-transparent"
            }`}
          >
            Tất cả (4)
          </span>
          <span
            onClick={() => setActiveTab("truyen-tranh")}
            className={`p-[20px] border-b-[3px] ${
              activeTab === "truyen-tranh"
                ? "border-[#ed4d2d] text-[#ed4d2d]"
                : "border-transparent"
            }`}
          >
            Truyện tranh (4)
          </span>
          <span
            onClick={() => setActiveTab("videos")}
            className={`p-[20px] border-b-[3px] ${
              activeTab === "videos"
                ? "border-[#ed4d2d] text-[#ed4d2d]"
                : "border-transparent"
            }`}
          >
            Videos
          </span>
        </span>
        {user && (
          <span className="w-full flex flex-col text-center mt-[110px] space-y-[10px]">
            <span className="text-[32px] font-bold">
              Ơ ấy ơi, bạn chưa đăng nhập.
            </span>
            <span className="text-[20px]">
              Tính năng chỉ dành cho thành viên. Vui lòng đăng nhập hoặc đăng ký
              tài khoản mới để sử dụng nhé!
            </span>
          </span>
        )}

        {activeTab === "tat-ca" && <Comics />}
        {activeTab === "truyen-tranh" && <Comics />}
        {activeTab === "videos" && <Video />}
      </div>
    </Layout1>
  );
}
