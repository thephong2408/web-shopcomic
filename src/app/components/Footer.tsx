"use client";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#1f1f1f] z-30  text-white pb-[50px] w-full px-[100px]">
      <div className=" flex py-[50px] border-b-[1px] border-[#6a5c55]">
        <div className="flex flex-col w-[25%] space-y-[15px] text-[18px]">
          <div className="w-[120px] ">
            <img
              src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
              alt=""
              className="w-auto"
            />
          </div>

          <span>
            Mạng xã hội chia sẻ các nội dung video giải trí chất lượng cao, phù
            hợp mọi độ tuổi và an toàn cho trẻ em.
          </span>
          <span className="w-full flex justify-between">
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
        <div className="flex-2 flex justify-between mx-[80px] flex-grow-2 w-[50%]">
          <div className="flex w-full ">
            <nav className="w-[50%] space-y-[15px]">
              <span
                className="
            text-[16px] font-bold text-[#7b8180]"
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
            <ul className="w-[25%] space-y-[15px]">
              <li
                className="
            text-[16px] font-bold text-[#7b8180]"
              >
                POPS KIDS
              </li>
              <li>Trang Chủ</li>
              <li>Âm nhạc</li>
              <li>Giải Trí</li>
              <li>Giáo Dục</li>
              <li>Blog Thiếu Nhi</li>
            </ul>
            <ul className="w-[25%] space-y-[15px]">
              <li
                className="
            text-[16px] font-bold text-[#7b8180]"
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
        <div className=" w-[25%] flex flex-col space-y-[15px]  ">
          <span className="text-[16px] font-bold text-[#7b8180] ">
            CÔNG TY CỔ PHẦN PHONG PHÚ SẮC VIỆT
          </span>
          <span className="text-[14px]">
            <strong>Địa chỉ:</strong>: Tầng 4, Block A, Viettel Complex Tower,
            285 Cách Mạng Tháng Tám, Phường 12, Quận 10, Thành phố Hồ Chí Minh
          </span>
          <span className="text-[14px]">
            <strong>Điện thoại:</strong>: +84 (28) 62921652
          </span>
          <span className="text-[14px] flex">
            <strong>Email : </strong>{" "}
            <span className="text-[#f47213]">popsapp-support@popsww.com</span>
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
        <span>
          © 2018 POPS Worldwide. Mọi bản quyền thuộc về POPS Worldwide.
        </span>
      </div>
    </div>
  );
}
