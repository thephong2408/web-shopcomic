"use client";
import React, { useState } from "react";
import Layout1 from "@/app/layout/Layout1";
import Comics from "./Comics";
import Video from "./Video";
import AlertZero from "@/app/components/AlertZero";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("tat-ca"); // Sử dụng state để lưu tên tab đang chọn
  const [user, setUser] = useState<boolean>(false);
  const [data, setData] = useState<any>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 7, 5,
  ]);
  if (data.length === 0) {
    return (
      <Layout1>
        <div>
          <AlertZero message="Chưa có truyện nào là lưu" />
        </div>
      </Layout1>
    );
  }

  return (
    <Layout1>
      <div className="lg:min-h-screen h-auto mt-[100px] xl:px-[100px] px-[10px]">
        <span className="flex text-20 cursor-pointer">
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
            <span className="text-30 font-bold">
              Ơ ấy ơi, bạn chưa đăng nhập.
            </span>
            <span className="text-20">
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
