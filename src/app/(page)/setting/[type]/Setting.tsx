"use client";
import React, { useState } from "react";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
export default function Setting1() {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <span>
      <span className="text-[30px] font-bold">Cài đặt chung</span>
      <span className=" space-x-[105px] flex">
        <ul>
          <li className="text-[16px] font-bold">Tự động mở video tiếp theo</li>
          <li className="text-[14px] text-[#eaeaea]">
            Video tiếp theo sẽ tự động được mở
          </li>
        </ul>
        <span>
          <button onClick={() => setIsOn(!isOn)} className="text-white">
            {isOn ? (
              <BsToggleOff className="w-10 h-10 scale-115 text-white" />
            ) : (
              <BsToggleOn className="w-10 h-10 scale-115 text-[#ff7632]" />
            )}
          </button>
        </span>
      </span>
    </span>
  );
}
