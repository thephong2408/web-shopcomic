"use client";
import React from "react";
import Layout1 from "@/app/layout/Layout1";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

import { IoCheckbox } from "react-icons/io5";
import { MdOutline4gPlusMobiledata } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { RiFeedbackFill, RiUserSettingsFill } from "react-icons/ri";

import { FaHospitalUser } from "react-icons/fa";
import Setting1 from "./Setting";
import Navbar from "./Nav";
import FeedbackForm from "./Comment";
import User from "./User";
import { PiHandDepositFill } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";

export default function Setting() {
  const pathname = usePathname();
  // Tách đường dẫn thành mảng các phần tử
  const pathParts = pathname.split("/").filter((part) => part); // Bỏ qua phần tử rỗng do split gây ra

  // Lấy phần tử cuối cùng của mảng
  const lastPart = pathParts[pathParts.length - 1];
  console.log(lastPart);
  return (
    <Layout1>
      <div className="lg:py-[25px] mt-[60px] lg:px-[100px] px-0  flex justify-center items-center bg-[#141414]">
        <div className="min-h-[620px] flex flex-col lg:justify-center  lg:flex-row w-full bg-[#292929] lg:rounded-lg overflow-hidden">
          {/* cài đặt */}
          <div className=" lg:w-[410px] w-full flex-2 lg:border-r-[1px]">
            <div className="  text-16">
              {/* khi chưa đăng nhập */}
              {/* <div
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
                <ul className="space-y-[3px] font-medium text-14">
                  <li className="text-14 font-bold">Đăng Kí Ngay</li>
                  <li>để nhận phần quà và ưu đãi hấp dẫn</li>
                  <li> thành viên</li>
                </ul>
              </div> */}
              {/* khi chưa đăng nhập */}
              {/* khi đã đăng nhập */}
              <div className="w-full py-[20px] px-[20px] h-[85px] text-12 flex items-center justify-between space-x-5 bg-[#454545]">
                <div className="flex items-center space-x-5">
                  <div className=" w-[60px] h-[60px] rounded-full overflow-hidden">
                    <img
                      src="https://products.popsww.com/api/v2/containers/file2/profiles/Adult-01.png?maxW=120&format=webp"
                      alt=""
                    />
                  </div>
                  <ul className="text-[#ccc]">
                    <li className="text-14 text-white">Phongda</li>
                    <li>User ID: 7uehdwi862h28e</li>
                    <li>Tham gia từ: 28 Aug 2024</li>
                  </ul>
                </div>
                <Link href={"/setting/user"}>
                  <button className="p-[10px] bg-[#555555] rounded-full">
                    <RiUserSettingsFill className="text-20" />
                  </button>
                </Link>
              </div>
              <div className="flex flex-col w-full px-[20px] py-[10px]">
                <span className="text-14 font-bold text-[#787878] pb-[20px]">
                  POSPS STARTS CỦA TÔI
                </span>
                <ul className="W-full flex items-center justify-between">
                  <li className="flex items-center space-x-2 ">
                    <div className="rounded-full w-[40px] h-[40px] bg-[#ea6017] flex items-center justify-center overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
                        alt=""
                      />
                    </div>
                    <span className="text-30 font-bold text-[#ea6017]">0</span>
                  </li>
                  <li>
                    <Link href={"/deposit"}>
                      <button className="bg-[#ea6017] rounded-md px-[20px] py-[10px] space-x-2">
                        <PiHandDepositFill className="text-20" />{" "}
                        <span>Nạp start</span>
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full flex items-center justify-center bg-[#555555] py-[25px]  text-14">
                <span className="font-bold flex items-center space-x-1">
                  <span className="text-[#ea6017] text-18">0</span>{" "}
                  <span>Phiếu đọc</span>
                </span>
                <div className="w-[1px] h-[20px] mx-[20px] bg-[#584646]"></div>
                <ul className=" flex flex-col items-center justify-center">
                  <li className="font-bold">
                    <span className="text-[#ea6017]">0</span> Phiếu thuê
                  </li>
                  <li className="text-12 ">
                    (chỉ áp dụng cho truyeenh Doraemon)
                  </li>
                </ul>
              </div>
              {/* khi đã đăng nhập */}
              <ul className="mt-5 py-[10px] px-[20px] text-[#eaeaea] font-bold ">
                <Link href={"/data3g4g"}>
                  <li className="py-[15px] space-x-2 flex items-center">
                    <MdOutline4gPlusMobiledata className="text-25  font-bold" />
                    <span className="text-14">Miễn phí data</span>
                  </li>
                </Link>
                <Link href={"/like"}>
                  <li className="py-[15px] space-x-2 flex items-center border-b-[1px] border-[#eaeaea]">
                    <IoCheckbox className="text-20  font-bold" />
                    <span className="text-14">Yêu thích</span>
                  </li>
                </Link>
                <Link href={"/setting/setting"}>
                  <li className="py-[15px] space-x-2 flex items-center">
                    <MdSettingsApplications className="text-20  font-bold" />
                    <span className="text-14">Cài đặt chung</span>
                  </li>
                </Link>
                <Link href={"/setting/feedbackform"}>
                  <li className="py-[15px] space-x-2 flex items-center">
                    <RiFeedbackFill className="text-20  font-bold" />
                    <span className="text-14">Phản hồi và ứng dụng</span>
                  </li>
                </Link>
                <Link href={"/setting/cty"}>
                  <li className="py-[15px] space-x-2 flex items-center">
                    <FaHospitalUser className="text-20  font-bold" />
                    <span className="text-14">Về chúng tôi</span>
                  </li>
                </Link>
                <li className="py-[15px] space-x-2 flex items-center border-t-[1px] border-[#eaeaea]">
                  <AiOutlineLogout className="text-20 font-bold" />
                  <span className="text-14">Đăng xuất</span>
                </li>
              </ul>
            </div>
          </div>
          {/* comment cài đặt */}
          <div className="flex-1 py-[30px] lg:px-[45px] px-[20px]  space-y-[30px]">
            {lastPart === "setting" && <Setting1 />}
            {lastPart === "cty" && <Navbar />}
            {lastPart === "feedbackform" && <FeedbackForm />}
            {lastPart === "user" && <User />}
          </div>
        </div>
      </div>
    </Layout1>
  );
}
