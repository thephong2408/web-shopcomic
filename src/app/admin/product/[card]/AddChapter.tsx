"use client";
import React, { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";

export default function AddChapter() {
  const [newChapterName, setNewChapterName] = useState(""); // Tên chapter mới
  const [newChapterImages, setNewChapterImages] = useState<string[]>([]); // Danh sách ảnh mới

  // Hàm xử lý khi thay đổi tên chương mới
  const handleNewChapterNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewChapterName(e.target.value);
  };

  // Hàm xử lý thêm ảnh vào chapter mới
  const handleAddNewChapterImages = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newImages = files.map((file) => URL.createObjectURL(file));
      setNewChapterImages((prev) => [...prev, ...newImages]);
    }
  };

  // Hàm xử lý xóa ảnh trong chapter mới
  const handleDeleteNewChapterImage = (index: number) => {
    setNewChapterImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Hàm thêm chapter mới
  const handleAddNewChapter = () => {
    if (newChapterName && newChapterImages.length > 0) {
      alert("Chương mới đã được tạo!");
      // Logic để thêm chương mới (lưu vào state, API, v.v.)
      setNewChapterName("");
      setNewChapterImages([]);
    } else {
      alert("Vui lòng nhập tên chương và chọn ít nhất một ảnh.");
    }
  };

  return (
    <div className="px-5">
      <h1 className="text-xl font-bold mb-4">Thêm chương mới</h1>
      <form action="">
        {/* Tạo chương mới */}
        <div className="mb-4">
          <h2 className="text-lg font-bold">Nhập tên chương mới</h2>
          <input
            type="text"
            className="w-full p-2 border rounded-md mt-2"
            value={newChapterName}
            onChange={handleNewChapterNameChange}
            placeholder="Nhập tên chương mới"
          />
        </div>

        {/* Danh sách ảnh chương mới */}
        <div className="mb-4">
          <h2 className="text-lg font-bold">Ảnh của chương mới</h2>
          <div className="grid grid-cols-3 gap-4">
            {newChapterImages.map((image, index) => (
              <div
                key={index}
                className="relative w-[150px] h-[200px] border rounded-md overflow-hidden"
              >
                <img
                  src={image}
                  alt={`New Chapter Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full"
                  onClick={() => handleDeleteNewChapterImage(index)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Thêm ảnh mới cho chương mới */}
        <div className="mb-4">
          <label
            htmlFor="addNewChapterImages"
            className="inline-block p-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700"
          >
            <LuPencilLine className="inline-block mr-2" />
            Chọn ảnh cho chương mới
          </label>
          <input
            type="file"
            id="addNewChapterImages"
            className="hidden"
            multiple
            accept="image/*"
            onChange={handleAddNewChapterImages}
          />
        </div>

        {/* Nút lưu */}
        <button
          type="button"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={handleAddNewChapter}
        >
          Tạo chương mới
        </button>
      </form>
    </div>
  );
}
