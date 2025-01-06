"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full lg:space-y-[20px] space-y-[10px] text-16">
      <ul className="text-28 font-medium">Thông tin ứng dụng</ul>
      <ul>
        <li className="text-[#bcbcbc]">Phiên bản 4.48.1</li>
        <li className="text-[#bcbcbc]">https://pops.vn</li>
        <li className="text-[#bcbcbc]">Email: popsapp-support@popsww.com</li>
        <li className="text-[#bcbcbc]">2018 Bản quyền của POPS Worldwide</li>
      </ul>
      <ul className="text-28 font-medium">Về POPS</ul>
      <ul>
        <li className="text-[#bcbcbc]">CÔNG TY CỔ PHẦN PHONG PHÚ SẮC VIỆT</li>
        <li className="text-[#bcbcbc]">
          Địa chỉ: Tầng 4, Block A, Tòa nhà Viettel, 285 Cách Mạng Tháng 8,
          P.12, Q.10, HCMC, Việt Nam.
        </li>
        <li className="text-[#bcbcbc]">Điện thoại: +84 (28) 6292 1652</li>
        <li className=" flex text-[#bcbcbc]">
          <span>Email : </span>{" "}
          <span className="text-[#f47213]">popsapp-support@popsww.com</span>
        </li>
        <li className="text-[#bcbcbc]">
          Giấy chứng nhận kinh doanh: GCNĐKKD số 0305709591 do SKH&ĐT Tp. Hồ Chí
          Minh cấp ngày 21/05/2008
        </li>
      </ul>
      <li className="text-[#bcbcbc]">
        <u>Điều khoản và điều kiên sử dụng</u>
      </li>
    </nav>
  );
}
