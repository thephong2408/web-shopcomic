"use client";
import React from "react";
import Layout1 from "@/app/layout/Layout1";
import { useState } from "react";
import Comics from "./Comics";
import Video from "./Video";

export default function page() {
  const [show, setShow] = useState<boolean>(true);
  const [user, setUser] = useState<boolean>(false);

  return (
    <Layout1>
      <div className="min-h-screen mt-[100px] px-[100px]">
        <span className="text-[32px] font-bold">Yêu thích</span>
        <span className="flex text-[20px] cursor-pointer">
          <span
            onClick={() => setShow(true)}
            className={`p-[20px] border-b-[3px]  ${
              show ? "border-[#ed4d2d]" : "border-transparent"
            }`}
          >
            Truyện tranh
          </span>
          <span
            onClick={() => setShow(false)}
            className={`p-[20px]  border-b-[3px] ${
              !show ? "border-[#ed4d2d]" : "border-transparent"
            }`}
          >
            Videos
          </span>
        </span>
        {user && (
          <span className="w-full flex flex-col text-center mt-[110px] space-y-[10px] ">
            <span className="text-[32px] font-bold">
              Ơ ấy ơi, bạn chưa đăng nhập.
            </span>
            <span className="text-[20px]">
              Tính năng chỉ dành cho thành viên. Vui lòng đăng nhập hoặc đăng ký
              tài khoản mới để sử dụng nhé!
            </span>
          </span>
        )}
        {show && <Comics />}
        {!show && <Video />}
      </div>
    </Layout1>
  );
}
