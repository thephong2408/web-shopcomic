"use client";
import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineDash } from "react-icons/ai";
import { BsFillCaretRightFill } from "react-icons/bs";

// Define the type for the props
interface ZeroProps {
  message: string;
}

const Zero: React.FC<ZeroProps> = ({ message }) => {
  return (
    <div className="mt-[100px] w-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <span className="text-[25px] font-bold mb-[20px]">{message}</span>
        <div className="relative h-[215px] w-[425px] border rounded-md flex justify-center items-center">
          <span className="text-[18px] w-[270px] text-center bg-[#141414] z-20 absolute top-[-14px] left-1/2 -translate-x-1/2">
            Cách thêm vào danh sách
          </span>
          <ul className="space-x-[35px] flex">
            <li className="flex items-center flex-col">
              <span>
                <MdOutlineAddBox className="text-[40px]" />
              </span>
              <span>Yêu thích</span>
            </li>
            <li className="flex h-full pt-4 text-[25px] items-center text-[#ea6017]">
              <span>
                <AiOutlineDash />
              </span>
              <span>
                <AiOutlineDash />
              </span>
              <span>
                <AiOutlineDash />
              </span>
              <span>
                <BsFillCaretRightFill />
              </span>
            </li>
            <li className="flex items-center flex-col w-[100px]">
              <span>
                <FaCheckSquare className="text-[40px]" />
              </span>
              <span className="text-center">Đã thêm nội dung</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Zero;
