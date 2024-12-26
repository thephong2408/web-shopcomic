"use client";
import React, { useState } from "react";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
export default function Setting1() {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <span>
      <span className="text-30 font-bold">Cài đặt chung</span>
      <nav className=" lg:space-x-[105px] space-x-4 flex lg:justify-start lg:items-start items-center">
        <ul className="">
          <li className="text-16 font-bold">Tự động mở video tiếp theo</li>
          <li className="text-14 text-[#eaeaea]">
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
      </nav>
    </span>
  );
}
