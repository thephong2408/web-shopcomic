"use client";
import React from "react";
import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";

export default function User() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Chọn");

  const options = ["Chọn", "Nam", "Nữ", "Khác"];
  return (
    <div className="w-full h-full text-white space-y-[25px]">
      {/* avt */}
      <div className="space-y-[15px]">
        <span className="text-28 font-semibold">
          Thay đổi thông tin tài khoản
        </span>
        <div className="lg:size-[100px] size-[60px] rounded-full relative">
          <img
            className="rounded-full"
            src="https://products.popsww.com/api/v2/containers/file2/profiles/Adult-01.png?maxW=120&format=webp"
            alt=""
          />
          <span className="absolute bottom-0 right-0 lg:p-[10px] p-[5px] bg-white border-[1px] rounded-full">
            <LuPencilLine className="text-[#ea6017] text-16" />
          </span>
        </div>
      </div>
      {/* information */}
      <div className="space-y-[18px]">
        <span className="text-22 space-y-[15px] ">Hello, bạn là</span>
        <form action="">
          <div className="w-full flex lg:flex-row flex-col lg:space-x-[20px]">
            <div className="lg:w-[50%] w-full space-y-[15px]">
              {/* các thông tin */}
              <div className="space-y-[5px]">
                <label className="text-18" htmlFor="">
                  Tên tài khoản
                </label>
                <div className="lg:p-[12px] p-[8px] text-16 w-full bg-[#343434] rounded-md overflow-hidden">
                  <input
                    className="w-full"
                    placeholder="Tối đa 20 kí tự"
                    type="text"
                  />
                </div>
                {/* <span className="text-16 text-red-500 font-semibold">
                  Tên tài khoản không hợp lí
                </span> */}
              </div>
              <div className="relative space-y-[5px] w-full">
                <label className="text-18" htmlFor="">
                  Giới tính
                </label>
                {/* Nút hiển thị giá trị được chọn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex justify-start lg:p-[12px] p-[8px] text-16 bg-[#343434] text-white rounded shadow focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <span> {selected}</span>
                </div>

                {/* Danh sách các tùy chọn */}
                {isOpen && (
                  <ul className="absolute z-10 w-full bg-[#343434] rounded shadow">
                    {options.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelected(option);
                          setIsOpen(false);
                        }}
                        className="lg:p-[12px] p-[8px] text-16 text-white hover:bg-orange-500 cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="space-y-[5px]">
                <label className="text-18" htmlFor="">
                  Ngày sinh nhật
                </label>
                <div className="lg:p-[12px] p-[8px] text-16 w-full bg-[#343434] rounded-md overflow-hidden">
                  <input
                    className="w-full"
                    placeholder="Chọn ngày sinh nhật của bạn"
                    type="date"
                  />
                </div>
                {/* <span className="text-16 text-red-500 font-semibold">
                  Vui lòng chọn ngày sinh nhật
                </span> */}
              </div>
              <div className="space-y-[5px]">
                <label className="text-18" htmlFor="">
                  Gmail
                </label>
                <div className=" flex justify-center lg:p-[12px] p-[8px] text-16 w-full bg-[#343434] rounded-md overflow-hidden">
                  <span className="text-[#8f8f8f]">
                    phamthephong_t65@hus.edu.vn
                  </span>
                </div>
              </div>
              <div className="space-y-[5px]">
                <label className="text-18" htmlFor="">
                  Số điện thoại
                </label>
                <div className="lg:p-[12px] p-[8px] text-16 w-full bg-[#343434] rounded-md overflow-hidden">
                  <input
                    className="w-full"
                    placeholder="số điện thoại"
                    type="text"
                  />
                </div>
                {/* <span className="text-16 text-red-500 font-semibold">
                  Vui lòng nhập số điện thoại
                </span> */}
              </div>
            </div>
            <div className="lg:w-[50%] w-full space-y-[15px]">
              <div className="space-y-[5px]">
                <label className="text-18" htmlFor="">
                  Tỉnh/ thành
                </label>
                <div className="lg:p-[12px] p-[8px] text-16 w-full bg-[#343434] rounded-md overflow-hidden">
                  <input
                    className="w-full"
                    placeholder="Nhập tên Tỉnh/Thành"
                    type="text"
                  />
                </div>
                {/* <span className="text-16 text-red-500 font-semibold">
                  Tên tình thành không tồn tại
                </span> */}
              </div>

              <div className="space-y-[5px]">
                <label className="text-18" htmlFor="">
                  Số CMND / Hộ chiếu
                </label>
                <div className="lg:p-[12px] p-[8px] text-16 w-full bg-[#343434] rounded-md overflow-hidden">
                  <input
                    className="w-full"
                    placeholder="Số CMND / Hộ chiếu"
                    type="text"
                  />
                </div>
                {/* <span className="text-16 text-red-500 font-semibold">
                  Số CMND / Hộ chiếu không hợp lệ
                </span> */}
              </div>
              <div className="space-y-[5px]">
                <label className="text-18" htmlFor="">
                  Ngày Cấp
                </label>
                <div className="lg:p-[12px] p-[8px] text-16 w-full bg-[#343434] rounded-md overflow-hidden">
                  <input
                    className="w-full"
                    placeholder="Chọn ngày sinh nhật của bạn"
                    type="date"
                  />
                </div>
              </div>
              <div className="space-y-[5px]">
                <label className="text-18" htmlFor="">
                  Nơi cấp
                </label>
                <div className="lg:p-[12px] p-[8px] text-16 w-full bg-[#343434] rounded-md overflow-hidden">
                  <input className="w-full" placeholder="Nơi cấp" type="text" />
                </div>
                {/* <span className="text-16 text-red-500 font-semibold">
                  Vui lòng ghi nơi cấp
                </span> */}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-[5px] text-16 mt-4">
              <span>
                (*) Nếu bạn chưa đủ 14 tuổi, vui lòng nhập thông tin người giám
                hộ
              </span>
              <span>
                (*) POPS sẽ chọn ngẫu nhiên những bạn nhận quà sinh nhật hàng
                tháng!
              </span>
              <span className="flex items-center space-x-2">
                <input className="size-[20px]" type="checkbox" />
                <span>
                  Bạn cam kết chịu trách nhiệm trước pháp luật những thông tin
                  bạn đã đăng ký
                </span>
              </span>
            </div>
            <button
              type="submit"
              className="lg:w-[200px] w-[120px] lg:h-[50px] h-[35px] mt-4 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500"
            >
              LƯU
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
