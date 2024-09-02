"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Card from "./Card";
import { AiFillFire } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";

import { Navigation, Autoplay } from "swiper/modules";

export default function Swiper1() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const title = [
    "Combo 10 Chương Tiết kiệm",
    "Combo 5 Chương Tiết kiệm",
    "Combo Truyện Chọn Bộ",
    "Combo 3 Truyện Mới",
    "Combo 100 Chương Truyện Tiết Kiệm",
    "Combo Sale 50%",
    "Combo 5 Chương Tiết kiệm",
    "Combo 5 Chương Tiết kiệm",
    "Combo 5 Chương Tiết kiệm",
    "Combo 5 Chương Tiết kiệm",
  ];

  return (
    <div className="w-full  overflow-hidden mt-[100px] px-[100px]">
      {title.map((item: any, index: number) => (
        <div key={index} className="mb-10">
          <div>
            <span className="flex items-center space-x-[5px] ">
              {/* <div className="w-[8px] h-[40px] rounded-full bg__title"></div> */}
              <span className="relative ">
                <FaHandPointRight className="text-[50px] text-[#f47213]" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18px] font-bold text-white">
                  %
                </span>
              </span>
              <span className="text-[36px] font-bold text-white">{item}</span>
            </span>
            <Swiper
              spaceBetween={15} // Thay đổi khoảng cách giữa các slide
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
                  <Card card={false} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ))}
    </div>
  );
}
