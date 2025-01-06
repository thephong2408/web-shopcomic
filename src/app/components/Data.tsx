// Dữ liệu giả lập
"use client";
import React from "react";
export const hourlyData = {
  labels: Array.from({ length: 24 }, (_, i) => `${i}:00`), // 24 giờ
  datasets: [
    {
      label: "Doanh thu theo giờ",
      data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 1000)), // Random doanh thu
      borderColor: "#4F46E5", // Màu đường
      backgroundColor: "rgba(79, 70, 229, 0.5)", // Màu nền
      tension: 0.3, // Độ cong của đường
    },
  ],
};

export const monthlyData = {
  labels: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  datasets: [
    {
      label: "Doanh thu theo tháng",
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 10000)),
      borderColor: "#10B981",
      backgroundColor: "rgba(16, 185, 129, 0.5)",
      tension: 0.3,
    },
  ],
};

export const yearlyData = {
  labels: [
    new Date().getFullYear() - 3,
    new Date().getFullYear() - 2,
    new Date().getFullYear() - 1,
    new Date().getFullYear(),
  ],
  datasets: [
    {
      label: "Doanh thu theo năm",
      data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100000)),
      borderColor: "#EF4444",
      backgroundColor: "rgba(239, 68, 68, 0.5)",
      tension: 0.3,
    },
  ],
};
