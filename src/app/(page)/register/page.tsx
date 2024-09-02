"use client";
import React from "react";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-[100vh] relative flex justify-center py-[40px] text-white ">
      {/* background */}
      <div className="w-full h-full absolute left-0 top-0 opacity-50 ">
        <img
          src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_assets/1920x1080__1_-7918f066dd66-1714798322752-GVQmKQ8o.png?v=0&maxW=1400&format=webp"
          alt=""
        />
      </div>
      {/* logo */}
      <div className="absolute h-[70px] flex justify-start items-center top-0 left-0 px-[100px]">
        <Link href="/">
          <div className="w-[120px] ">
            <img
              src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
              alt=""
            />
          </div>
        </Link>
      </div>
      {/* register */}
      <div className="w-[520px] py-[55px] px-[70px] flex flex-col  items-center z-10 rounded-xl overflow-hidden bg-[#242424] space-y-[25px]">
        <span className="text-[36px] font-bold">Đăng Ký</span>
        <span className="text-[18px] text- font-medium text-center">
          Tạo tài khoản mới hoặc bạn có thể đăng nhập bằng tài khoản POPS Kids.
        </span>
        <form className="space-y-[10px] w-full">
          {/* <!-- Input Tên --> */}
          <div className="w-full h-[45px] rounded-md bg-[#343434] flex  items-center px-[15px]">
            <input type="text" placeholder="Tên" className="w-full" />
          </div>

          {/* <!-- Input Email --> */}
          <div className="w-full h-[45px] rounded-md bg-[#343434] flex justify-between items-center px-[15px]">
            <input type="email" placeholder="Email" className="w-full" />
            <FaEye className="text-[24px] cursor-pointer" />
          </div>

          {/* <!-- Input Mật khẩu --> */}
          <div className="w-full h-[45px] rounded-md bg-[#343434] flex justify-between items-center px-[15px]">
            <input type="password" placeholder="Mật khẩu" className="w-full" />
            <FaEye className="text-[24px] cursor-pointer" />
          </div>

          {/* <!-- Nút Đăng Ký --> */}
          <button
            type="submit"
            className="w-full h-[45px] bg-[#929292] text-[18px] font-bold rounded-md] rounded-md mt-1"
          >
            ĐĂNG KÝ
          </button>
        </form>
        <span className="text-center flex flex-col text-[#6c6c6c] text-[16px] px-[10px]">
          <span>Bằng cách chọn "Đăng ký tài khoản"</span>
          <span>
            bạn đồng ý với <u className="text-[#cc662f]">Điều khoản sử dụng</u>{" "}
            và <u className="text-[#cc662f]">Chính sách riêng tư</u> của POPS
          </span>
        </span>
        <span className="w-full flex space-x-3 items-center">
          <div className="flex-1 h-[1.5px] bg-[#6c6c6c]"></div>
          <span className="text-[#6c6c6c] text-[18px]">hoặc Tiêp tục với </span>
          <div className="flex-1 h-[1.5px] bg-[#6c6c6c]"></div>
        </span>
        <span className="flex space-x-10">
          <div className="size-[65px] rounded-full p-4 bg-white overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt=""
            />
          </div>
          <div className=" rounded-full overflow-hidden flex justify-center items-center size-[65px] bg-white">
            <FcGoogle className="text-[40px]" />
          </div>
        </span>
        <span className="text-[#6c6c6c]">
          Đã có tài khoản ?{" "}
          <strong className="text-[#cc662f]">
            <Link href={"/login"}>Đăng Nhập</Link>
          </strong>
        </span>
      </div>
    </div>
  );
}
