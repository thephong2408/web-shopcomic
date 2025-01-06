"use client";
import React from "react";
import Link from "next/link";

export default function Nav() {
  const link = [
    { name: "Chỉnh sửa thông tin truyện", link: "/admin/product/edit-story" },
    { name: "Quản lý chương truyện", link: "/admin/product/manage-chapters" },
    { name: "Thêm chương mới", link: "/admin/product/add-chapter" },
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
