"use client";
import React from "react";
import { BiSortDown } from "react-icons/bi";
import { IoIosLock } from "react-icons/io";
import { useState } from "react";

export default function ListChap() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [show, setShow] = useState(true);
  return (
    <div className="lg:w-[775px] w-full relative flex justify-between my-10 bg-[#1f1f1f] lg:p-[30px] p-[15px] rounded-xl">
      <nav className="w-full flex flex-col ">
        <ul className="flex justify-between">
          <li className="flex flex-col">
            <span className="text-20 font-bold">77 chương</span>
            <span className="text-18 text-[#b0b0b0]">
              Truyện phát hành thứ 3, 5, 7
            </span>
          </li>
          <li className="text-16 font-bold text-white flex items-center">
            <span>Sắp xếp</span> <BiSortDown className="ml-2 text-25" />
          </li>
        </ul>
        {/* danh sách cương */}
        <div
          className={`w-full   ${show ? "overflow-y-auto max-h-[700px]" : ""}`}
        >
          {arr.map((item: any, index: number) => (
            <ul
              key={index}
              className="lg:h-[170px] flex justify-between items-center border-b-[1px] lg:py-[70px] py-[20px] "
            >
              <li className="w-[50%] flex items-center space-x-5">
                <div className="relative lg:size-[125px] size-[70px] bg-white rounded-md overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/1-3e509675c539-1710410485211-iNWFijYP.jpg?v=0&maxW=200&format=webp"
                    alt=""
                  />
                  {item >= 3 && (
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
                      <IoIosLock className="text-40 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-25 font-bold">Chương 0{item}</span>
                  <span className="text-[#cacaca] whitespace-nowrap text-16">
                    March 16,2024{" "}
                  </span>
                </div>
              </li>
              <li className="text-20 font-normal text-[#e97131]">MIỄN PHÍ</li>
            </ul>
          ))}
        </div>
        <ul
          onClick={() => setShow(!show)}
          className="flex justify-center items-center mt-[20px]  text-20 font-medium cursor-pointer"
        >
          {!show ? "Thu gọn" : "Xem thêm"}
        </ul>
      </nav>
    </div>
  );
}
