"use client";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#1f1f1f] z-30  text-white pb-[50px] w-full md:px-[100px] px-[10px] text-16">
      <div className=" xl:flex  py-[50px] border-b-[1px] xl:space-y-0 space-y-[40px] border-[#6a5c55]">
        <div className="flex flex-col xl:w-[25%] w-full space-y-[15px] text-18">
          <div className="w-[120px]   ">
            <img
              src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
              alt=""
              className="w-auto"
            />
          </div>

          <span className="w-full">
            Mạng xã hội chia sẻ các nội dung video giải trí chất lượng cao, phù
            hợp mọi độ tuổi và an toàn cho trẻ em.
          </span>
          <span className=" xl:w-full flex xl:justify-between space-x-3">
            {" "}
            <div className="w-[90px] h-[30px] ">
              <img
                src="https://cdn.popsww.com/popsapp/assets/images/icons/smartTV.png?format=webp"
                alt=""
              />{" "}
            </div>
            <div className="w-[90px] h-[30px] ">
              <img
                src="https://cdn.popsww.com/popsapp/assets/images/icons/googleplay.png?format=webp"
                alt=""
              />{" "}
            </div>
            <div className="w-[90px] h-[30px] ">
              <img
                src="https://cdn.popsww.com/popsapp/assets/images/icons/appstore.png?format=webp"
                alt=""
              />{" "}
            </div>
          </span>
        </div>
        <div className="xl:flex-2  flex justify-between xl:mx-[80px] xl:flex-grow-2 xl:w-[50%]">
          <div className="sm:flex w-full sm:space-y-0  space-y-5">
            <nav className="xl:w-[50%] w-full space-y-[15px]">
              <span
                className="
             font-bold text-[#7b8180]"
              >
                NỘI DUNG NGƯỜI LỚN
              </span>
              <div className="flex justify-between">
                <ul className="w-full space-y-[15px]">
                  <li>TRang Chủ</li>
                  <li>Truyện Tranh</li>
                  <li>Originals</li>
                  <li>Anime</li>
                  <li>Show</li>
                </ul>
                <ul className="w-full space-y-[15px]">
                  <li>Âm nhạc</li>
                  <li>Series</li>
                  <li>Thiếu nhi</li>
                  <li>Blog</li>
                  <li>Shop</li>
                </ul>
              </div>
            </nav>
            <ul className="xl:w-[25%] w-full space-y-[15px]">
              <li
                className="
             font-bold text-[#7b8180]"
              >
                POPS KIDS
              </li>
              <li>Trang Chủ</li>
              <li>Âm nhạc</li>
              <li>Giải Trí</li>
              <li>Giáo Dục</li>
              <li>Blog Thiếu Nhi</li>
            </ul>
            <ul className="xl:w-[25%] w-full space-y-[15px]">
              <li
                className="
             font-bold text-[#7b8180]"
              >
                HỖ TRỢ
              </li>
              <li>FAQs</li>
              <li>Chính Sách Riêng Tư</li>
              <li>Chính Sách về Quyền Riêng Tư</li>
              <li>Điều Khoản Và Điều Kiện Sử Dụng </li>
              <li>Điều KHoản Thanh Toán</li>
              <li>Blog Thiếu Nhi</li>
            </ul>
          </div>
        </div>
        <div className=" xl:w-[25%] w-full flex flex-col space-y-[15px]  ">
          <span className=" font-bold text-[#7b8180] ">
            CÔNG TY CỔ PHẦN PHONG PHÚ SẮC VIỆT
          </span>
          <span className="text-14">
            <strong>Địa chỉ:</strong>: Tầng 4, Block A, Viettel Complex Tower,
            285 Cách Mạng Tháng Tám, Phường 12, Quận 10, Thành phố Hồ Chí Minh
          </span>
          <span className="text-14">
            <strong>Điện thoại:</strong>: +84 28 62921652
          </span>
          <span className="text-14 flex space-x-1">
            <strong>Email : </strong>{" "}
            <span className="text-[#f47213]"> popsapp-support@popsww.com</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-10 space-y-3">
        <span>Người chịu trách nhiệm nội dung: Đinh Thị Hồng Hoa</span>
        <span>
          Giấy chứng nhận đăng ký kinh doanh số 0305709591 do Sở Kế hoạch và Đầu
          tư TP. Hồ Chí Minh cấp ngày 21/05/2008
        </span>
        <span>
          Giấy phép thiết lập mạng xã hội số 63/GP-BTTTT cấp bởi Bộ Thông tin &
          Truyền thông cấp ngày 22/02/2019
        </span>
        <span>2018 POPS Worldwide. Mọi bản quyền thuộc về POPS Worldwide.</span>
      </div>
    </div>
  );
}
