"use client";
import React from "react";
import { IoStar } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  shop?: boolean;
  card?: string;
  img?: string;
  textCard?: string;
  showTextCard?: boolean;
  music?: boolean;
}

export default function Card({
  shop = true,
  showTextCard = true,
  music = false,
  card = "card",
  textCard = "Chương 101 - 110 | TÊN TRUYỆN",
  img = "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/640x960-7d51d818e4c5-1723540695951-LYxlaIwe.jpg?v=0&maxW=260&format=webp",
}: CardProps) {
  return (
    <div>
      <Link href={`/${card}`}>
        <div
          className={`flex flex-col items-center rounded-md  justify-between ${
            shop ? "" : ""
          }`}
        >
          <div
            className={`${
              music ? "" : ""
            } w-full rounded-md overflow-hidden  border-shadow   transition-shadow duration-300`}
          >
            <img
              src={img}
              alt={`Slide `} // Cung cấp mô tả hình ảnh cho accessibility
              className="transform transition-transform duration-300 hover:scale-110  " // Đảm bảo hình ảnh hiển thị đúng kích thước
            />
          </div>
          <ul className="w-full flex flex-col justify-between">
            <span className="text-20px text-white font-bold overflow-hidden whitespace-nowrap text-ellipsis">
              {textCard}
            </span>

            {shop && (
              <button className="text-16 justify-start ">
                <span className="text-[#f47213]">MUA NGAY</span>{" "}
                <IoStar className=" text-[#ffe32c]" />{" "}
              </button>
            )}
          </ul>
        </div>
      </Link>
    </div>
  );
}
