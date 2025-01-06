"use client";
import React from "react";
import Search from "@/app/components/Search";

export default function HistoryCard() {
  const rechargeHistory = [
    {
      id: "001",
      name: "Phạm Thế Phong",
      avatar:
        "https://products.popsww.com/api/v2/containers/file2/profiles/Adult-01.png?maxW=120&format=webp",
      amount: 500000,
      coins: 5000,
      timestamp: "2025-01-05 14:30:00",
    },
    {
      id: "002",
      name: "Phạm Thế Phong",
      avatar:
        "https://products.popsww.com/api/v2/containers/file2/profiles/Adult-01.png?maxW=120&format=webp",
      amount: 500000,
      coins: 5000,
      timestamp: "2025-01-05 14:30:00",
    },
    {
      id: "003",
      name: "Phạm Thế Phong",
      avatar:
        "https://products.popsww.com/api/v2/containers/file2/profiles/Adult-01.png?maxW=120&format=webp",
      amount: 500000,
      coins: 5000,
      timestamp: "2025-01-05 14:30:00",
    },
  ];

  return (
    <div className="w-full h-full text-white space-y-[25px] p-5">
      <Search />

      <div className="space-y-[15px]">
        <span className="text-28 font-semibold">Lịch sử nạp tiền</span>
        <ul className="space-y-[10px]">
          {rechargeHistory.map((entry) => (
            <li
              key={entry.id}
              className="flex items-center bg-[#343434] p-[15px] rounded-md space-x-[15px]"
            >
              <div className="w-[60px] h-[60px]">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src={entry.avatar}
                  alt={entry.name}
                />
              </div>
              <div className="flex-1">
                <span className="block text-18 font-semibold">
                  {entry.name}
                </span>
                <span className="block text-16 text-[#8f8f8f]">
                  Mã ID: {entry.id}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-16">
                  Số tiền: {entry.amount.toLocaleString()} VNĐ
                </span>
                <span className="block text-16">Quy đổi: {entry.coins} xu</span>
                <span className="block text-14 text-[#8f8f8f]">
                  {entry.timestamp}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
