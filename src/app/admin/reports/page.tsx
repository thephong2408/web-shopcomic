"use client";

import React from "react";
import AlertImgErorr from "@/app/components/AlertImgErorr";

type Comment = {
  id: number;
  avatar: string;
  name: string;
  time: string;
  comment: string;
};

const comments: Comment[] = [
  {
    id: 1,
    avatar:
      "https://nano-ceramic.vn/wp-content/uploads/2024/12/300-hinh-anh-anime-cute-de-thuong-lam-hinh-nen-cuc-chat.jpg", // Đường dẫn đến ảnh avatar
    name: "John Doe",
    time: "2025-01-06 14:30",
    comment: "This is the first comment!",
  },
  {
    id: 2,
    avatar:
      "https://nano-ceramic.vn/wp-content/uploads/2024/12/300-hinh-anh-anime-cute-de-thuong-lam-hinh-nen-cuc-chat.jpg",
    name: "Jane Smith",
    time: "2025-01-06 14:35",
    comment: "Great work on the report!",
  },
  {
    id: 3,
    avatar:
      "https://nano-ceramic.vn/wp-content/uploads/2024/12/300-hinh-anh-anime-cute-de-thuong-lam-hinh-nen-cuc-chat.jpg",
    name: "Alice Johnson",
    time: "2025-01-06 14:40",
    comment: "There’s a typo in the second paragraph.",
  },
];

export default function Page() {
  return (
    <div className="p-5">
      <div>
        <h1 className="text-3xl font-bold">Report</h1>
      </div>
      <div className="mt-5 space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="border border-gray-300 rounded-md p-4 m-5"
          >
            <div className="flex space-x-3 items-start ">
              <img
                src={comment.avatar}
                alt={`${comment.name}'s avatar`}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="font-semibold">{comment.name}</h2>
                  <span className="text-sm text-gray-500">{comment.time}</span>
                </div>
                <p className="text-gray-700">{comment.comment}</p>
              </div>
            </div>
            <div className="flex justify-center space-x-3 mt-5">
              <AlertImgErorr />
              <AlertImgErorr />
              <AlertImgErorr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
