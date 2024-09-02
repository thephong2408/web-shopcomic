"use client"; // Đặt đúng vị trí đầu tiên

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Card from "./Card";
import { FaHandPointRight } from "react-icons/fa";
import { Navigation, Autoplay } from "swiper/modules";

// Định nghĩa các props cho component
interface Swiper2Props {
  text: string; // Nội dung của nút
  className?: string; // Các lớp CSS tùy chỉnh (tùy chọn)
  shop?: boolean;
  icon?: React.ReactNode; // Icon cho nút (tùy chọn)
  iconClassName?: string; // Các lớp CSS tùy chỉnh cho icon (tùy chọn)
  card?: boolean;
}

export default function Swiper2({
  card = true,
  text = "Default Text",
  className = "",
  shop = true,
  icon = <FaHandPointRight />, // Sử dụng giá trị mặc định là FaHandPointRight
  iconClassName = "text-[50px] text-[#f47213]", // Giá trị mặc định cho iconClassName
}: Swiper2Props) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div>
        <span className="flex items-center space-x-[5px]">
          <span className="relative">
            {/* Đảm bảo icon được render với các class được truyền từ iconClassName */}
            {React.cloneElement(icon as React.ReactElement, {
              className: iconClassName,
            })}
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18px] font-bold text-white">
              %
            </span>
          </span>
          <span className="text-[36px] font-bold text-white">{text}</span>
        </span>
        <Swiper
          spaceBetween={15}
          slidesPerView={7}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper h-full mt-5"
        >
          {arr.map((item) => (
            <SwiperSlide key={item}>
              <Card card={card} shop={shop} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
