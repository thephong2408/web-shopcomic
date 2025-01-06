"use client";
import React from "react";
import { useState, useEffect } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { BiSolidLike } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import Comment from "./Comment";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

import Link from "next/link";

export default function Chapter() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showChapter, setShowChapter] = useState<boolean>(false);
  const [showComment, setShowComment] = useState<boolean>(false);
  const chapters = [
    { id: 1, name: "Chương 1: Bắt đầu cuộc hành trình" },
    { id: 2, name: "Chương 2: Đối mặt với thử thách" },
    { id: 3, name: "Chương 3: Gặp gỡ đồng minh" },
    { id: 4, name: "Chương 4: Kẻ thù xuất hiện" },
    { id: 5, name: "Chương 5: Chiến đấu sinh tử" },
    { id: 6, name: "Chương 6: Phát hiện bí mật" },
    { id: 7, name: "Chương 7: Chạy đua với thời gian" },
    { id: 8, name: "Chương 8: Tìm kiếm giải pháp" },
    { id: 9, name: "Chương 9: Đối đầu quyết định" },
    { id: 10, name: "Chương 10: Kết thúc và khởi đầu mới" },
  ];

  // Hàm để xử lý sự kiện click
  const handleToggle = () => {
    setIsVisible(!isVisible);
    setShowChapter(false);
  };
  const handleClickShowChapter = () => {
    setShowChapter(!showChapter);
    setIsVisible(true);
  };

  const handleClickShowComment = () => {
    setShowComment(true);
    setIsVisible(false);
    setShowChapter(false);
  };

  return (
    <div className="text-white flex  ">
      {/* bình luận */}
      {showComment && (
        <div className=" fixed bottom-10 right-10">
          <IoClose
            onClick={() => setShowComment(false)}
            className="absolute top-10 right-5 text-[#ffffff] text-30"
          />
          <Comment />
        </div>
      )}
      {isVisible && (
        <span className="w-full lg:px-10 px-[10px] flex  items-center justify-between bg-[#141414] z-10 h-[70px]  fixed top-0">
          <div className="lg:w-[120px] w-[50px] ">
            <Link href={"/"}>
              {" "}
              <img
                src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
                alt=""
              />
            </Link>
          </div>
          <span className="flex items-center space-x-2 font-medium text-20 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 hover:text-[#d16428]">
            <Link href={"/card"}>
              <span className="hover:text-[#d16428] cursor-pointer line-clamp-1">
                Bệ Hạ Kiếp Này Ta Sẽ Hết Lòng Chăm Sóc Người
              </span>{" "}
            </Link>
            <HiChevronRight className="text-[25px]" />
            <span className="whitespace-nowrap">Chương 1</span>
          </span>
          <span className=" space-x-2 whitespace-nowrap flex items-center">
            <span>1</span>
            <BiSolidLike className="text-20" />
          </span>
        </span>
      )}
      <div onClick={handleToggle} className="flex justify-center w-full">
        <div className="min-h-screen w-[700px]">
          <img
            src="https://cdn.hivetoon.com/wp-content/uploads/2024/08/01_1_11zon-32.webp"
            alt=""
          />
        </div>
      </div>
      {isVisible && (
        <span className="w-full flex  items-center justify-end bg-[#141414] z-10 lg:h-[70px] py-[15px] space-x-4 px-20 fixed bottom-0">
          <HiChevronLeft className="text-30" />
          <HiChevronRight className="text-30" />
          <span className=" relative">
            {showChapter && (
              <div className="absolute lg:bottom-[155%] lg:right-0 lg:w-[375px] w-[200px] right-[0] bottom-[155%]  shadow-md rounded-md overflow-hidden bg-[#141414] ">
                <li className=" flex items-center text-20 pl-[20px] h-[45px] bg-[#242424]">
                  Danh sách chương
                </li>
                <ul className="max-h-[500px] h-[350px] overflow-y-auto ">
                  {chapters.map((item: any, index: number) => (
                    <li
                      className=" flex items-center pl-[20px] h-[50px] border-b-[1px] border-b-[#686868] text-20"
                      key={index}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <HiMiniRectangleStack
              onClick={handleClickShowChapter}
              className={`text-30 ${showChapter ? "text-[#d16428]" : ""}`}
            />
          </span>
          <FaCommentAlt
            onClick={handleClickShowComment}
            className="text-30 lg:flex hidden"
          />
        </span>
      )}
    </div>
  );
}
