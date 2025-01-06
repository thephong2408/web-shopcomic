"use client";
import React, { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";

export default function Chapter() {
  const [chapterName, setChapterName] = useState("Tên chương mặc định"); // Tên chapter
  const [chapterImages, setChapterImages] = useState<string[]>([
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150/0000FF",
    "https://via.placeholder.com/150/FF0000",
  ]); // Danh sách ảnh chapter

  // Hàm xử lý khi thay đổi tên chương
  const handleChapterNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChapterName(e.target.value);
  };

  // Hàm xử lý thêm ảnh mới
  const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newImages = files.map((file) => URL.createObjectURL(file)); // Tạo URL tạm thời
      setChapterImages((prev) => [...prev, ...newImages]); // Thêm vào danh sách ảnh
    }
  };

  // Hàm xử lý xóa ảnh
  const handleDeleteImage = (index: number) => {
    setChapterImages((prev) => prev.filter((_, i) => i !== index)); // Xóa ảnh theo index
  };

  return (
    <div className="px-5">
      <form action="">
        {/* Chỉnh sửa tên chương */}
        <div className="mb-4">
          <h2 className="text-lg font-bold">Chỉnh sửa tên chương</h2>
          <input
            type="text"
            className="w-full p-2 border rounded-md mt-2"
            value={chapterName}
            onChange={handleChapterNameChange}
            placeholder="Nhập tên chương mới"
          />
        </div>

        {/* Danh sách ảnh chương */}
        <div className="mb-4">
          <h2 className="text-lg font-bold">Ảnh của chương</h2>
          <div className="grid grid-cols-8 gap-4">
            {chapterImages.map((image, index) => (
              <div
                key={index}
                className="relative w-[150px] h-[200px] border rounded-md overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Chapter Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full"
                  onClick={() => handleDeleteImage(index)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Thêm ảnh mới */}
        <div className="mb-4">
          <h2 className="text-lg font-bold">Thêm ảnh mới</h2>
          <label
            htmlFor="addImages"
            className="inline-block p-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700"
          >
            <LuPencilLine className="inline-block mr-2" />
            Chọn ảnh
          </label>
          <input
            type="file"
            id="addImages"
            className="hidden"
            multiple
            accept="image/*"
            onChange={handleAddImages}
          />
        </div>

        {/* Nút lưu */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Lưu
        </button>
      </form>
    </div>
  );
}
