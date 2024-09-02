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
            className="absolute top-10 right-5 text-[#ffffff] text-[30px]"
          />
          <Comment />
        </div>
      )}
      {isVisible && (
        <span className="w-full px-10 flex  items-center justify-between bg-[#141414] z-10 h-[70px]  fixed top-0">
          <div className="w-[120px] ">
            <Link href={"/"}>
              {" "}
              <img
                src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
                alt=""
              />
            </Link>
          </div>
          <span className="flex items-center space-x-2 font-medium text-[22px] absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 hover:text-[#d16428]">
            <Link href={"/card"}>
              <span className="hover:text-[#d16428] cursor-pointer">
                Bệ Hạ Kiếp Này Ta Sẽ Hết Lòng Chăm Sóc Người
              </span>{" "}
            </Link>
            <HiChevronRight />
            <span>Chương 1</span>
          </span>
          <span className="flex space-x-2">
            <span>1</span>
            <BiSolidLike className="text-[20px]" />
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
        <span className="w-full flex  items-center justify-end bg-[#141414] z-10 h-[70px] space-x-4 px-20 fixed bottom-0">
          <HiChevronLeft className="text-[30px]" />
          <HiChevronRight className="text-[30px]" />
          <span className=" relative">
            {showChapter && (
              <div className="absolute bottom-[155%] right-0 w-[375px]  shadow-md rounded-md overflow-hidden bg-[#141414] ">
                <li className=" flex items-center pl-[20px] h-[45px] bg-[#242424]">
                  Danh sách chương
                </li>
                <ul className="max-h-[500px] overflow-y-auto ">
                  {chapters.map((item: any, index: number) => (
                    <li
                      className=" flex items-center pl-[20px] h-[50px] border-b-[1px] border-b-[#686868]"
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
              className={`text-[30px] ${showChapter ? "text-[#d16428]" : ""}`}
            />
          </span>
          <FaCommentAlt
            onClick={handleClickShowComment}
            className="text-[30px]"
          />
        </span>
      )}
    </div>
  );
}
