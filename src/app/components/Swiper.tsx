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
    <div className="w-full   mt-[100px] px-100">
      {title.map((item: any, index: number) => (
        <div key={index} className="mb-10">
          <div>
            <span className="flex items-center space-x-[5px] ">
              {/* <div className="w-[8px] h-[40px] rounded-full bg__title"></div> */}
              <span className="relative ">
                <FaHandPointRight className="text-50 text-[#f47213]" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-18 font-bold text-white"></span>
              </span>
              <span className="text-36 font-bold text-white">{item}</span>
            </span>
            <Swiper
              spaceBetween={15} // Thay đổi khoảng cách giữa các slide
              breakpoints={{
                320: {
                  slidesPerView: 2, // Hiển thị 2 slide trên màn hình nhỏ (điện thoại)
                  spaceBetween: 10, // Giảm khoảng cách giữa các slide
                },
                768: {
                  slidesPerView: 4, // Hiển thị 4 slide trên màn hình tablet
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 6, // Hiển thị 6 slide trên màn hình desktop nhỏ
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 7, // Hiển thị 7 slide trên màn hình desktop lớn
                  spaceBetween: 25,
                },
              }}
              navigation
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper h-full "
            >
              {arr.map((item) => (
                <SwiperSlide key={item} className="py-5">
                  <Card card={"cardshop"} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ))}
    </div>
  );
}
