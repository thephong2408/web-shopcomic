"use client";
import React from "react";
import { FaCheck, FaHandPointRight } from "react-icons/fa";
import Button from "./Button";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { useState } from "react";
interface PosterProps {
  text: string; // Nội dung của nút
  onClick?: () => void; // Hàm xử lý sự kiện khi bấm nút (tùy chọn)
  className?: string; // Các lớp CSS tùy chỉnh (tùy chọn)
  icon?: React.ReactNode; // Icon cho nút (tùy chọn)
  iconClassName?: string; // Các lớp CSS tùy chỉnh cho icon (tùy chọn)
  show?: boolean;
}
export default function Postermucsic({
  text = "POPS đề cử",
  onClick,
  className,
  icon,
  iconClassName,
  show = true,
}: PosterProps) {
  const [like, setLike] = useState<boolean>(false);
  return (
    <div className="w-full py-[35px] flex flex-col ">
      {/* img */}
      <span className="flex items-center space-x-[5px] mb-5">
        {/* <div className="w-[8px] h-[40px] rounded-full bg__title"></div> */}
        <span className="relative ">
          <FaHandPointRight className="text-50 text-[#f47213]" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-18 font-bold text-white">
            %
          </span>
        </span>
        <span className="text-36 font-bold text-white ">{text}</span>
      </span>
      <div className="lg:flex-row flex-col flex lg:space-x-5 space-x-0">
        <div className="lg:w-[50%] w-full">
          <div className="lg:h-[385px] h-auto rounded-md overflow-hidden shadow-lg">
            <img
              src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_assets/thumb_ngang_1920x1080_notext-75ac83d4baa5-1710817279196-thWolNWJ.jpg?v=0&maxW=1400&format=webp"
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-[50%] w-full flex flex-col relative lg:top-[-10px] mt-5 ">
          <span className="text-36 font-medium">Phong Max - Bồ Công Anh</span>
          <span className="text-16 flex space-x-1 items-center mt-3">
            <span className="text-[#909092]">Năm phát hành : </span>
            <span>2024</span>
          </span>
          <ul className={`space-x-[15px] flex mt-7`}>
            <Button
              text={"XEM NGAY"}
              className={"text-white bg__button"}
              icon={<MdOutlineSlowMotionVideo />}
            />

            <Button
              onClick={() => setLike(!like)}
              text={`${!like ? "YÊU THÍCH" : "ĐÃ tHÍCH"}`}
              icon={like ? <FaCheck /> : <IoIosAdd />}
              iconClassName="text-25"
              className={` bg-white hover:text-[#f47213] ${
                !like ? "text-black" : "text-[#f47213]"
              }`}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
