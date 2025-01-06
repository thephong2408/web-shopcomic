"use client";
import React from "react";

export default function Purchase() {
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
      name: "Nguyễn Văn A",
      avatar: "https://via.placeholder.com/100",
      amount: 1000000,
      coins: 10000,
      timestamp: "2025-01-04 10:15:00",
    },
    {
      id: "003",
      name: "Trần Thị B",
      avatar: "https://via.placeholder.com/100",
      amount: 200000,
      coins: 2000,
      timestamp: "2025-01-03 09:00:00",
    },
  ];

  const purchaseHistory = [
    {
      id: "001",
      storyName: "One Piece",
      purchasedChapters: "Chapters 1-10",
      coinsSpent: 500,
      remainingCoins: 4500,
      timestamp: "2025-01-05 15:00:00",
    },
    {
      id: "001",
      storyName: "Naruto",
      purchasedChapters: "Combo Chapters 1-50",
      coinsSpent: 2000,
      remainingCoins: 2500,
      timestamp: "2025-01-05 16:00:00",
    },
  ];

  return (
    <div className="w-full h-full text-white space-y-[25px]">
      <div className="space-y-[15px]">
        <span className="text-28 font-semibold">Lịch sử mua truyện</span>
        <ul className="space-y-[10px]">
          {purchaseHistory.map((entry, index) => (
            <li
              key={index}
              className="flex justify-between bg-[#343434] p-[15px] rounded-md "
            >
              <div>
                <span className="block text-18 font-semibold">
                  Tên truyện: {entry.storyName}
                </span>
                <span className="block text-16">
                  Chap đã mua: {entry.purchasedChapters}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-16">
                  Giá xu: -{entry.coinsSpent} xu
                </span>
                <span className="block text-16">
                  Số xu còn lại: {entry.remainingCoins} xu
                </span>
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
