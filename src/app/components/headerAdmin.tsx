"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderAdmin() {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại
  const navItems = [
    { name: "Thông số", path: "/admin" },
    { name: "Danh sách truyện", path: "/admin/product" },
    { name: "Khách hàng", path: "/admin/customer" },
    { name: "Lịch sử nạp thẻ", path: "/admin/history-card" },
    { name: "Báo cáo lỗi", path: "/admin/reports" },
    // { name: "Đánh giá", path: "/admin/reviews" },
    { name: "Cài đặt", path: "/admin/settings" },
  ];

  return (
    <div className="bg-[#000000] min-h-screen border-r-[1px] border-r-[#ccc]">
      <nav>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`px-10 py-5 hover:bg-gray-700 border-b-[1px] border-b-[#ccc] text-white ${
                pathname === item.path ? "bg-[#ff3a08] font-bold" : ""
              }`}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
