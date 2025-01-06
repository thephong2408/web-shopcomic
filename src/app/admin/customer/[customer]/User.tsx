"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LuPencilLine } from "react-icons/lu";

export default function User() {
  const [selected, setSelected] = useState("Nam");

  return (
    <div className="w-full h-full text-white space-y-[25px]">
      {/* Avatar */}
      <div className="space-y-[15px]">
        <span className="text-28 font-semibold">
          Thông tin cá nhân của: Phạm Thế Phong
        </span>
        <div className="flex space-x-10 it">
          <div className="lg:size-[100px] size-[60px] rounded-full relative">
            <img
              className="rounded-full"
              src="https://products.popsww.com/api/v2/containers/file2/profiles/Adult-01.png?maxW=120&format=webp"
              alt="Avatar"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="size-[60px]">
              <img
                src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
                alt=""
              />
            </div>
            <span className="text-[45px] font-bold text-[#ff7118]">3</span>
          </div>
        </div>
      </div>

      {/* Information */}
      <div className="space-y-[18px]">
        <span className="text-22 space-y-[15px]">Hello, bạn là:</span>

        <div className="flex">
          <div className="w-[50%]">
            <ul className="w-full px-5 space-y-3">
              {/* User Info */}
              <li className="space-y-[5px]">
                <label className="text-18">Tên tài khoản:</label>
                <p className="text-16 bg-[#343434] p-[12px] rounded-md">
                  Phạm Thế Phong
                </p>
              </li>

              <li className="space-y-[5px]">
                <label className="text-18">Giới tính:</label>
                <p className="text-16 bg-[#343434] p-[12px] rounded-md">
                  {selected}
                </p>
              </li>

              <li className="space-y-[5px]">
                <label className="text-18">Ngày sinh nhật:</label>
                <p className="text-16 bg-[#343434] p-[12px] rounded-md">
                  01/01/1990
                </p>
              </li>

              <li className="space-y-[5px]">
                <label className="text-18">Gmail:</label>
                <p className="text-16 bg-[#343434] p-[12px] rounded-md">
                  phamthephong_t65@hus.edu.vn
                </p>
              </li>

              <li className="space-y-[5px]">
                <label className="text-18">Số điện thoại:</label>
                <p className="text-16 bg-[#343434] p-[12px] rounded-md">
                  0123456789
                </p>
              </li>
            </ul>
          </div>
          <div className="w-[50%]">
            <ul className="w-full px-5 space-y-3">
              {" "}
              <li className="space-y-[5px]">
                <label className="text-18">Tỉnh/Thành:</label>
                <p className="text-16 bg-[#343434] p-[12px] rounded-md">
                  Hà Nội
                </p>
              </li>
              <li className="space-y-[5px]">
                <label className="text-18">Số CMND / Hộ chiếu:</label>
                <p className="text-16 bg-[#343434] p-[12px] rounded-md">
                  012345678
                </p>
              </li>
              <li className="space-y-[5px]">
                <label className="text-18">Ngày cấp:</label>
                <p className="text-16 bg-[#343434] p-[12px] rounded-md">
                  01/01/2015
                </p>
              </li>
              <li className="space-y-[5px]">
                <label className="text-18">Nơi cấp:</label>
                <p className="text-16 bg-[#343434] p-[12px] rounded-md">
                  Hà Nội
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
