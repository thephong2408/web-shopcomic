import React from "react";
import { IoStar } from "react-icons/io5";
import Link from "next/link";

interface CardProps {
  shop?: boolean;
  card?: boolean;
}

export default function Card({ shop = true, card = true }: CardProps) {
  return (
    <div>
      <Link href={card ? "/card" : "/cardshop"}>
        <div
          className={`flex flex-col items-center justify-between ${
            shop ? "h-[330px]" : "h-[300px]"
          }`}
        >
          <div className="h-[260px] w-full rounded-md overflow-hidden   transition-shadow duration-300">
            <img
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/640x960-7d51d818e4c5-1723540695951-LYxlaIwe.jpg?v=0&maxW=260&format=webp"
              alt={`Slide `} // Cung cấp mô tả hình ảnh cho accessibility
              className="transform transition-transform duration-300 hover:scale-110 " // Đảm bảo hình ảnh hiển thị đúng kích thước
            />
          </div>
          <ul className="w-full flex flex-col justify-between">
            <span className="text-[20px] text-white font-bold overflow-hidden whitespace-nowrap text-ellipsis">
              Chương 101 - 110 | TÊN TRUYỆN
            </span>

            {shop && (
              <button className="text-[16px] justify-start ">
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
