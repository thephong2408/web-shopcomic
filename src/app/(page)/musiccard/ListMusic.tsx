"use client";
import React from "react";
import { useState } from "react";

import { AiFillCaretDown } from "react-icons/ai";
import { IoIosLock } from "react-icons/io";
import { CgAddR } from "react-icons/cg";

export default function ListChap() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [classify, setClassify] = useState<string>("Live");
  const [show, setShow] = useState<boolean>(true);
  const [show1, setShow1] = useState<boolean>(false);
  const handleCLick = (name: string) => {
    setClassify(name);
    setShow1(false);
  };
  return (
    <div className="w-[775px] relative flex justify-between my-10 bg-[#1f1f1f] p-[30px] rounded-xl">
      <nav className="w-full flex flex-col ">
        <ul>
          <button
            onMouseEnter={() => setShow1(true)}
            onMouseLeave={() => setShow1(false)}
            className=" relative bg-[#242424]  rounded-md px-[20px] py-[10px]"
          >
            <span className="pr-10"> {classify}</span>
            <AiFillCaretDown />
            {show1 && (
              <ul className="absolute bg-[#242424] top-[102%] left-0 w-[200px] z-30 rounded-md ">
                <li
                  onClick={() => handleCLick("Live")}
                  className={`py-[16px] text-20 flex justify-start px-5 ${
                    classify === "Live"
                      ? "border-b-[2px] border-b-[#ed4d2d] text-[#ed4d2d]"
                      : "border-b-[2px] border-b-transparent"
                  }  `}
                >
                  Live
                </li>
                <li
                  onClick={() => handleCLick("Music video")}
                  className={`py-[16px] text-20 flex justify-start px-5 ${
                    classify === "Music video"
                      ? "border-b-[2px] border-b-[#ed4d2d] text-[#ed4d2d]"
                      : "border-b-[2px] border-b-transparent"
                  }`}
                >
                  Music video
                </li>
                <li
                  onClick={() => handleCLick("Lyrics video")}
                  className={`py-[16px] text-20 flex justify-start px-5 ${
                    classify === "Lyrics video"
                      ? "border-b-[2px] border-b-[#ed4d2d] text-[#ed4d2d]"
                      : "border-b-[2px] border-b-transparent"
                  }`}
                >
                  Lyrics video
                </li>
              </ul>
            )}
          </button>
        </ul>
        {/* danh sách cương */}
        <div
          className={`w-full   ${show ? "overflow-y-auto max-h-[700px]" : ""}`}
        >
          {arr.map((item: any, index: number) => (
            <ul
              key={index}
              className="lg:h-[170px] h-auto flex lg:space-x-5 space-x-2 justify-start items-center border-b-[1px] lg:py-[70px] py-[10px] "
            >
              <li className=" flex items-center ">
                <div className="relative lg:h-[145px] lg:w-[275px] h-[80px] w-[150px] bg-white rounded-md overflow-hidden">
                  <img
                    src="https://i.ytimg.com/vi/ur91Ht45a8I/maxresdefault.jpg"
                    alt=""
                  />
                </div>
              </li>
              <li className="lg:h-[145px] text-25 font-bold relative">
                Mỹ Tâm - Official MV - Vì Em Tất Cả
                <CgAddR className="absolute bottom-0 right-0 text-20" />
              </li>
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
