"use client";
import React, { useEffect, useState } from "react";
import Button from "@/app/components/Button";
import Swiper2 from "@/app/components/Swiper1";

export default function Bangchuyen() {
  const arr = [1, 2, 3, 1, 2];
  const [number, setNumber] = useState(6); // Số lượng mặc định

  useEffect(() => {
    // Kiểm tra nếu đang ở phía client
    if (typeof window !== "undefined") {
      const updateNumber = () => {
        if (window.innerWidth >= 1024) {
          setNumber(8); // Desktop
        } else if (window.innerWidth >= 768) {
          setNumber(4); // Tablet
        } else {
          setNumber(2); // Mobile
        }
      };

      // Gọi hàm khi tải trang và khi thay đổi kích thước
      updateNumber();
      window.addEventListener("resize", updateNumber);

      return () => {
        window.removeEventListener("resize", updateNumber);
      };
    }
  }, []); // Mảng phụ thuộc rỗng để chỉ chạy một lần khi mount

  return (
    <div className="w-full bg_img relative">
      <div className="absolute top-0 left-0 w-full h-full bg_img lg:block hidden"></div>
      <div className="absolute bottom-1/2 transform-translate-y-1/2  h-[180px] w-full px-100 flex flex-col justify-between z-10 ">
        <span className="hidden lg:block">
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
              className="lg:size-[60px] size-[35px] rounded-md bg-slate-100  overflow-hidden"
            >
              <img
                src="https://popsimg.akamaized.net/api/v2/containers/file2/cms_assets/1920x1080__1_-7918f066dd66-1714798322752-GVQmKQ8o.png?v=0&maxW=200&format=webp"
                alt=""
                className="h-full w-full"
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
      <div className="lg:absolute bottom-0 w-full px-100 z-10  ">
        {" "}
        <Swiper2 number={number} text={"Chương Mới - Xem Ngay!"} shop={false} />
      </div>
      {/* ảnh băng chuyền ảnh  */}
    </div>
  );
}
