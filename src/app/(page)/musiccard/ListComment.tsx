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

export default function ListComment() {
  const [show, setShow] = useState<boolean>(false);
  const [showTb, setShowtb] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(true);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="lg:w-[775px] w-full relative flex flex-col lg:my-10 my-5 bg-[#1f1f1f] lg:p-[30px] p-[15px] rounded-xl">
      {/* comment */}
      <div className="w-[100%] flex justify-between items-center">
        {/* avatar */}
        <ImCool2 className="text-40" />
        {/* input */}
        <div className="flex-1 ml-3 lg:h-[45px] h-[35px] rounded-xl bg-[#343434] flex items-center justify-between lg:px-5 px-3">
          {" "}
          <input type="text" className="flex-1 " placeholder="Gửi bình luận" />
          <TiGift className="text-30 text-[#f47213] mr-4" />
          <IoIosPaperPlane className="text-30" />
        </div>
      </div>
      {/* list comment */}
      <div className="relative max-h-[800px] min-h-[200px] overflow-y-auto mt-[30px] px-[30px]">
        {arr.length === 0 && (
          <span className="text-18 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Không có bình luận nào
          </span>
        )}
        <nav className="lg:space-y-[30px] space-y-[15px]">
          <ul className="lg:space-y-[30px] space-y-[15px]">
            {arr.slice(0, 1).map((item: any, index: number) => (
              <li key={index} className="text-18  flex justify-between">
                {/* avt */}
                <div className="size-[35px] rounded-full bg-[#f47213]"></div>
                {/* input */}
                <div className="flex-1">
                  <div className="w-full  ml-3 bg-[#4b4b4b] rounded-lg lg:p-5 p-2 text-16">
                    <span className="font-bold">Name</span>
                    <p>comment</p>
                  </div>
                  <div className="text-14 lg:space-y-[20px] space-y-[5px]">
                    {/* thích bình luận và chọn  */}
                    <div className="flex justify-between items-center">
                      <div className="flex ml-3 space-x-3 mt-2 cursor-pointer ">
                        <span className="text-[#ccc]">30/07/2024 </span>
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
                          onMouseEnter={() => setShowtb(true)}
                          onMouseLeave={() => setShowtb(false)}
                          className="flex items-center relative"
                        >
                          <IoEllipsisHorizontal
                            onClick={() => setShowtb(true)}
                            className="text-20 cursor-pointer"
                          />
                          {showTb && (
                            <div className="absolute top-[100%] left-0 w-[140px] shadow-sm rounded-sm h-[45px] pl-4  bg-[#343434] flex items-center ">
                              <span>Báo cáo</span>
                            </div>
                          )}
                        </span>
                      </div>

                      <span className="text-[#ccc] flex items-center space-x-2">
                        <span>1</span>
                        <div className="p-1 bg-[#f47213] rounded-full">
                          <AiFillLike className="text-14 text-white  rounded-full" />
                        </div>
                      </span>
                    </div>
                    {/* trả lời bình luận */}
                    {show && (
                      <div className="flex-1 ml-3">
                        <ul className="lg:space-y-[30px] space-y-[15px]">
                          <li className="text-18  flex justify-between">
                            {/* avt */}
                            <div className="size-[35px] rounded-full bg-[#f47213]"></div>
                            {/* input */}
                            <div className="flex-1">
                              <div className="w-full  ml-3 bg-[#4b4b4b] rounded-lg lg:p-5 p-2 text-16">
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
                    <div className="ml-3 flex items-center cursor-pointer ">
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
        </nav>
      </div>
    </div>
  );
}
