import React from "react";
import { CgAddR } from "react-icons/cg";
import { useState } from "react";

export default function CardMusic() {
  const [show, setShow] = useState(false);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="w-[775px] relative flex flex-col my-10 bg-[#1f1f1f] p-[30px] rounded-xl">
      <div
        className={`w-full   ${show ? "overflow-y-auto max-h-[700px]" : ""}`}
      >
        {arr.map((item: any, index: number) => (
          <ul
            key={index}
            className="lg:h-[170px] h-auto flex lg:space-x-5 space-x-2 justify-start items-center border-b-[1px] lg:py-[70px] py-[10px] "
          >
            <li className=" flex items-center ">
              <div className="relative lg:h-[145px] lg:w-[275px] h-[80px] w-[150px] bg-white rounded-md overflow-hidden">
                <img
                  src="https://i.ytimg.com/vi/ur91Ht45a8I/maxresdefault.jpg"
                  alt=""
                />
              </div>
            </li>
            <li className="lg:h-[145px] text-25 font-bold relative">
              Mỹ Tâm - Official MV - Vì Em Tất Cả
              <CgAddR className="absolute bottom-0 right-0 text-20" />
            </li>
          </ul>
        ))}
      </div>
      <ul
        onClick={() => setShow(!show)}
        className="flex justify-center items-center mt-[20px]  text-20 font-medium cursor-pointer"
      >
        {!show ? "Thu gọn" : "Xem thêm"}
      </ul>
    </div>
  );
}
