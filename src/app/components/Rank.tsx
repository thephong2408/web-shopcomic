"use client";
import Image from "next/image";
import React from "react";

export default function Rank() {
  const arr = [1, 2, 3];
  const arr1 = [1, 2, 3, 4];
  return (
    <div className="px-100">
      <nav className="flex lg:flex-row flex-col lg:space-x-[15px]">
        {arr1.map((item: any, index: number) => (
          <ul
            key={index}
            className="flex-1 rounded-md overflow-hidden space-y-[1px]"
          >
            {arr.map((item: any, index: number) => (
              <li key={index}>
                {/* Sử dụng một thuộc tính duy nhất như item.id */}
                <div className="lg:w-[325px] w-full lg:h-[110px] h-[60px] bg-[#2c2c2c] flex justify-start items-center space-x-[18px] px-[20px] my-5">
                  <span
                    className={`font-bold text-36  ${
                      index < 4 ? "text-[#ed6b14]" : ""
                    }`}
                  >
                    {index + 1}
                  </span>
                  <div className="lg:size-[60px] size-[40px] overflow-hidden rounded-md">
                    {" "}
                    <img
                      src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/chedothuhai_thumb_640x960-df260d60880d-1597805018450-c1qkoanR.jpg?v=0&maxW=260&format=webp"
                      alt=""
                    />
                  </div>
                  <ul className="flex flex-col text-18 space-y-[10px]">
                    <li className="font-bold text-white truncate-lines-1">
                      Kiếp Văn Phòng
                    </li>
                    <li className="text-[#6e6356] truncate-lines-1 ">
                      Đời Thường / Văn Phòng
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </div>
  );
}
