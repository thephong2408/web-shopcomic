"use client";
import React from "react";
import Layout1 from "@/app/layout/Layout1";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

import { IoCheckbox } from "react-icons/io5";
import { MdOutline4gPlusMobiledata } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { RiFeedbackFill } from "react-icons/ri";

import { FaHospitalUser } from "react-icons/fa";
import Setting1 from "./Setting";
import Navbar from "./Nav";
import FeedbackForm from "./Comment";

export default function Setting() {
  const pathname = usePathname();
  // Tách đường dẫn thành mảng các phần tử
  const pathParts = pathname.split("/").filter((part) => part); // Bỏ qua phần tử rỗng do split gây ra

  // Lấy phần tử cuối cùng của mảng
  const lastPart = pathParts[pathParts.length - 1];
  console.log(lastPart);
  return (
    <Layout1>
      <div className="py-[100px] px-[100px]  flex justify-center items-center bg-[#141414]">
        <div className="min-h-[620px] flex w-full bg-[#292929] rounded-lg overflow-hidden">
          {/* cài đặt */}
          <div className=" w-[410px] flex-2 border-r-[1px]">
            <div className=" py-[10px] px-[20px]  text-[16px]">
              <div
                className="w-full h-[90px] bg-no-repeat bg-center bg-cover flex items-center px-[10px] rounded-md"
                style={{
                  backgroundImage:
                    "url('https://cdn.popsww.com/popsapp/assets/images/account/menu-item-bg.png')",
                }}
              >
                <div className="h-[55px] w-[75px] ">
                  <img
                    src="https://cdn.popsww.com/popsapp/assets/images/account/gift.png"
                    alt=""
                  />
                </div>
                <ul className="space-y-[3px] font-medium text-[14px]">
                  <li className="text-[14px] font-bold">Đăng Kí Ngay</li>
                  <li>để nhận phần quà và ưu đãi hấp dẫn</li>
                  <li> thành viên</li>
                </ul>
              </div>
              <ul className="mt-5 text-[#eaeaea] font-bold ">
                <Link href={"/data3g4g"}>
                  <li className="py-[15px] space-x-2 flex items-center">
                    <MdOutline4gPlusMobiledata className="text-[25px]  font-bold" />
                    <span className="text-[14px]">Miễn phí data</span>
                  </li>
                </Link>
                <Link href={"/like"}>
                  <li className="py-[15px] space-x-2 flex items-center border-b-[1px] border-[#eaeaea]">
                    <IoCheckbox className="text-[20px]  font-bold" />
                    <span className="text-[14px]">Yêu thích</span>
                  </li>
                </Link>
                <Link href={"/setting/setting"}>
                  <li className="py-[15px] space-x-2 flex items-center">
                    <MdSettingsApplications className="text-[20px]  font-bold" />
                    <span className="text-[14px]">Cài đặt chung</span>
                  </li>
                </Link>
                <Link href={"/setting/feedbackform"}>
                  <li className="py-[15px] space-x-2 flex items-center">
                    <RiFeedbackFill className="text-[20px]  font-bold" />
                    <span className="text-[14px]">Phản hồi và ứng dụng</span>
                  </li>
                </Link>
                <Link href={"/setting/cty"}>
                  <li className="py-[15px] space-x-2 flex items-center">
                    <FaHospitalUser className="text-[20px]  font-bold" />
                    <span className="text-[14px]">Về chúng tôi</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          {/* comment cài đặt */}
          <div className="flex-1 py-[30px] px-[45px]  space-y-[30px]">
            {lastPart === "setting" && <Setting1 />}
            {lastPart === "cty" && <Navbar />}
            {lastPart === "feedbackform" && <FeedbackForm />}
          </div>
        </div>
      </div>
    </Layout1>
  );
}
