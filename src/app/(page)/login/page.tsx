"use client";
import React from "react";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";

export default function Register() {
  return (
    <div className="min-h-[100vh] relative flex justify-center lg:py-[40px] lg:pt-[60px] text-white ">
      {/* background */}
      <div className="w-full lg:h-full h-screen absolute left-0 top-0 opacity-50 ">
        <img
          src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_assets/1920x1080__1_-7918f066dd66-1714798322752-GVQmKQ8o.png?v=0&maxW=1400&format=webp"
          alt=""
        />
      </div>
      {/* logo */}
      <div className="absolute lg:h-[70px] h-[40px] flex justify-start items-center top-0 left-0 px-100 z-50">
        <Link href={"/"}>
          <div className="lg:w-[120px]  w-[70px]  ">
            <img
              src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
              alt=""
            />
          </div>
        </Link>
      </div>
      {/* register */}
      <div className="lg:w-[520px] lg:py-[55px] lg:px-[70px] w-full py-[15px] px-[15px] flex flex-col  items-center justify-between z-10 rounded-xl overflow-hidden bg-[#242424]  lg:space-y-[25px] space-y-[15px]">
        <span className="text-36 font-bold">Đăng Nhập</span>
        <span className="text-18 text- font-medium text-center">
          Bạn có thể đăng nhập với tài khoản POPS hoặc POPS Kids.
        </span>
        <form className="space-y-[10px] w-full">
          {/* <!-- Input Tên --> */}
          <div className="w-full h-[35px] lg:h-[45px] text-16 rounded-md bg-[#343434] flex  items-center px-[15px]">
            <input
              type="text"
              placeholder="Số điện thoại, email"
              className="w-full"
            />
          </div>

          {/* <!-- Input Email --> */}
          <div className="w-full h-[35px] lg:h-[45px] text-16 rounded-md bg-[#343434] flex justify-between items-center px-[15px]">
            <input type="password" placeholder="Mật khẩu" className="w-full" />
            <FaEye className="text-25 cursor-pointer" />
          </div>

          {/* <!-- Nút Đăng Ký --> */}
          <button
            type="submit"
            className="w-full h-[35px] lg:h-[45px] text-16 bg-[#929292] text-18 font-bold rounded-md] rounded-md mt-1"
          >
            ĐĂNG NHẬP
          </button>
        </form>
        <span className="text-center flex flex-col text-[#6c6c6c] text-16 px-[10px]">
          <span>Bằng cách chọn -Đăng nhập tài khoản</span>
          <span>
            bạn đồng ý với <u className="text-[#cc662f]">Điều khoản sử dụng</u>{" "}
            và <u className="text-[#cc662f]">Chính sách riêng tư</u> của POPS
          </span>
        </span>
        <span className="w-full flex space-x-3 items-center">
          <div className="flex-1 h-[1.5px] bg-[#6c6c6c]"></div>
          <span className="text-[#6c6c6c] text-18">hoặc Tiêp tục với </span>
          <div className="flex-1 h-[1.5px] bg-[#6c6c6c]"></div>
        </span>
        <span className="flex items-center space-x-2">
          <div className="size-[55px] ">
            <img
              src="https://cdn.popsww.com/popsapp/assets/images/account/qr-code.png"
              alt=""
            />
          </div>
          <span className="font-bold text-[#6c6c6c]">
            Đăng nhập nhanh với mã QR
          </span>
        </span>
        <span className="flex space-x-10">
          <div className="lg:size-[65px] size-[50px] rounded-full lg:p-4 p-1 bg-white overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt=""
            />
          </div>
          <div className=" rounded-full overflow-hidden flex justify-center items-center lg:size-[65px] size-[50px] bg-white">
            <FcGoogle className="text-40" />
          </div>
        </span>
        <span className="text-[#6c6c6c]">
          Đã có tài khoản ?{" "}
          <strong className="text-[#cc662f]">
            <Link href={"/register"}>Đăng Ký</Link>{" "}
          </strong>
        </span>
      </div>
    </div>
  );
}
