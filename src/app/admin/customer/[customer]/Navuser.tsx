"use client";
import React from "react";
import Link from "next/link";

export default function Navuser() {
  const link = [
    { name: "Thông tin cá nhân", link: "/admin/customer/user1" },
    { name: "Lịch sử nạp thẻ", link: "/admin/customer/user1-history" },
    { name: "Lịch sử mua truyện", link: "/admin/customer/user1-purchase" },
    // { name: "Danh sách đánh giá", link: "/admin/product/manage-reviews" },
  ];
  return (
    <nav className="w-full bg-[#484848]">
      <ul className="flex space-x-10">
        {link.map((item, index) => (
          <li key={index} className="p-5 border-b-2">
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
