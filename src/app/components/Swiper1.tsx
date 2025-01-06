"use client"; // Đặt đúng vị trí đầu tiên

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Card from "./Card";
import { FaHandPointRight } from "react-icons/fa";
import { Navigation, Autoplay } from "swiper/modules";
import Card1 from "./Card1";

// Định nghĩa các props cho component
interface Swiper2Props {
  text: string; // Nội dung của nút
  className?: string; // Các lớp CSS tùy chỉnh (tùy chọn)
  shop?: boolean;
  icon?: React.ReactNode; // Icon cho nút (tùy chọn)
  iconClassName?: string; // Các lớp CSS tùy chỉnh cho icon (tùy chọn)
  card?: string;
  img?: string;
  textCard?: string;
  cardNumber?: boolean;
  number?: number;
  music?: boolean;
}

export default function Swiper2({
  card = "card",
  text = "Default Text",
  className = "",
  cardNumber = true,
  img = "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/640x960-7d51d818e4c5-1723540695951-LYxlaIwe.jpg?v=0&maxW=260&format=webp",
  shop = true,
  music = false,
  number = 7,
  textCard = "Chương 101 - 110 | TÊN TRUYỆN",
  icon = <FaHandPointRight />, // Sử dụng giá trị mặc định là FaHandPointRight
  iconClassName = "lg:text-50 text-[35px] text-[#f47213]", // Giá trị mặc định cho iconClassName
}: Swiper2Props) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div>
        <span className="flex items-center space-x-[5px]">
          <span className="relative ">
            {/* Đảm bảo icon được render với các class được truyền từ iconClassName */}
            {React.cloneElement(icon as React.ReactElement, {
              className: iconClassName,
            })}
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-18 font-bold text-white"></span>
          </span>
          <span className="text-36 font-bold text-white">{text}</span>
        </span>
        <Swiper
          spaceBetween={20}
          slidesPerView={number}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper h-full"
        >
          {arr.map((item) => (
            <SwiperSlide key={item} className="py-5">
              {cardNumber ? (
                <Card
                  card={card}
                  shop={shop}
                  img={img}
                  textCard={textCard}
                  music={music}
                />
              ) : (
                <Card1 card={card} shop={shop} img={img} textCard={textCard} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
