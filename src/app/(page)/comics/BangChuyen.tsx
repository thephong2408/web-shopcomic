"use client";
import React from "react";
import Button from "@/app/components/Button";
import Swiper2 from "@/app/components/Swiper1";

export default function Bangchuyen() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div className="w-full bg_img relative">
      <div className="absolute bottom-0 w-full px-[100px] z-10  ">
        {" "}
        <Swiper2 text={"Chương Mới - Xem Ngay!"} shop={false} className="" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg_img"></div>
      <div className="absolute bottom-1/2 transform -translate-y-1/2  h-[180px] w-full px-[100px] flex flex-col justify-between z-10 ">
        <span>
          <Button
            text={"KHÁM PHÁ NGAY"}
            className={"bg__button font-normal text-white h-auto"}
          />
        </span>
        {/* danh sách ảnh */}
        <div className="flex justify-end space-x-5  ">
          {arr.map((item: any, index: number) => (
            <div
              key={index}
              className="size-[60px] rounded-md bg-slate-100  overflow-hidden"
            >
              <img
                src="https://popsimg.akamaized.net/api/v2/containers/file2/cms_assets/1920x1080__1_-7918f066dd66-1714798322752-GVQmKQ8o.png?v=0&maxW=200&format=webp"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      {/* ảnh nềnn */}
      <div>
        <img
          src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_assets/thumb_ngang-f5fd47e24171-1710499423594-yHlgo55c.jpg?v=0&maxW=1400&format=webp"
          alt=""
        />
      </div>
      {/* ảnh băng chuyền ảnh  */}
    </div>
  );
}
