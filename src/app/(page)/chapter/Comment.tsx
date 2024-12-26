"use client";
import React from "react";
import { IoIosPaperPlane } from "react-icons/io";
import { ImCool2 } from "react-icons/im";
import { TiGift } from "react-icons/ti";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";

import { AiFillLike } from "react-icons/ai";

export default function Comment() {
  const [show, setShow] = useState<boolean>(false);
  const [showTb, setShowTb] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(true);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className=" w-[450px] rounded-md  min-h-[200px]  mt-[30px] px-[30px] py-[10px] bg-[#1d1d1d] shadow-md shadow-[#141414]">
      {arr.length === 0 && (
        <span className="text-18 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Không có bình luận nào
        </span>
      )}
      <nav className="space-y-[20px]">
        <li className="text-28 font-medium w-full text-center ">Bình luận</li>
        <ul className="space-y-[30px] max-h-[400px] w-full overflow-y-auto">
          {arr.slice(0, 10).map((item: any, index: number) => (
            <li
              key={index}
              className="text-18 flex items-start justify-between"
            >
              {/* avt */}
              <div className="w-[35px] h-[35px] rounded-full bg-[#f47213] shrink-0"></div>
              {/* input */}
              <div className="flex-1 ">
                <div className=" ml-3 bg-[#4b4b4b] rounded-lg p-5 text-16">
                  <span className="font-bold">Name</span>
                  <p>comment</p>
                </div>
                <div className="text-14 space-y-[10px]">
                  {/* thích bình luận và chọn */}
                  <div className="flex justify-between items-center">
                    <div className="flex ml-3 space-x-3 mt-2 cursor-pointer">
                      <span className="text-[#ccc]">30/07/2024</span>
                      {like ? (
                        <span onClick={() => setLike(!like)}>Thích</span>
                      ) : (
                        <span
                          onClick={() => setLike(!like)}
                          className="text-[#f47213]"
                        >
                          Đã Thích
                        </span>
                      )}
                      <span>Trả lời</span>
                      <span
                        onMouseEnter={() => setShowTb(true)}
                        onMouseLeave={() => setShowTb(false)}
                        className="flex items-center relative"
                      >
                        <IoEllipsisHorizontal
                          onClick={() => setShowTb(true)}
                          className="text-20 cursor-pointer"
                        />
                        {showTb && (
                          <div className="absolute top-[100%] left-0 w-[140px] shadow-sm rounded-sm h-[45px] pl-4 bg-[#343434] flex items-center">
                            <span>Báo cáo</span>
                          </div>
                        )}
                      </span>
                    </div>

                    <span className="text-[#ccc] flex items-center space-x-2">
                      <span>1</span>
                      <div className="p-1 bg-[#f47213] rounded-full">
                        <AiFillLike className="text-14 text-white rounded-full" />
                      </div>
                    </span>
                  </div>
                  {/* trả lời bình luận */}
                  {show && (
                    <div className=" ml-3">
                      <ul className="space-y-[30px]">
                        <li className="text-18 flex items-start justify-between">
                          {/* avt */}
                          <div className="w-[35px] h-[35px] rounded-full bg-[#f47213] shrink-0"></div>
                          {/* input */}
                          <div className="flex-1">
                            <div className=" ml-3 bg-[#4b4b4b] rounded-lg p-5 text-16">
                              <span className="font-bold">Name</span>
                              <p>comment</p>
                            </div>
                          </div>
                        </li>
                        {/* trả lời bình luận */}
                        <li className="flex-1"></li>
                      </ul>
                    </div>
                  )}
                  <div className="ml-3 flex items-center cursor-pointer">
                    {!show ? (
                      <span
                        onClick={() => setShow(!show)}
                        className="flex space-x-2 items-center"
                      >
                        <span>Xem câu trả lời</span>
                        <HiChevronDown />
                      </span>
                    ) : (
                      <span
                        onClick={() => setShow(!show)}
                        className="flex space-x-2 items-center"
                      >
                        <span>Ẩn câu trả lời</span>
                        <HiChevronUp />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-[100%] flex justify-between items-center py-[10px]">
          {/* avatar */}
          <ImCool2 className="text-40" />
          {/* input */}
          <div className="flex-1 ml-3 h-[45px] rounded-xl bg-[#343434] flex items-center justify-between px-5">
            {" "}
            <input
              type="text"
              className="flex-1 "
              placeholder="Gửi bình luận"
            />
            <TiGift className="text-30 text-[#f47213] mr-4" />
            <IoIosPaperPlane className="text-30" />
          </div>
        </div>
      </nav>
    </div>
  );
}
