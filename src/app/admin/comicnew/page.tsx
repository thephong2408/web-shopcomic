"use client";
import React from "react";
import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import Input from "@/app/components/Input";

export default function ComicNews() {
  // State để lưu link ảnh và thông tin từ các thẻ input
  const [backgroundImage, setBackgroundImage] = useState(
    "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-dien-thoai-anime-2.jpg"
  );
  const [avatarImage, setAvatarImage] = useState(
    "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-dien-thoai-anime-2.jpg"
  );

  const [chapterInfo, setChapterInfo] = useState({
    name: "",
    author: "",
    artist: "",
    rank: "",
    content: "",
    age: "",
    description: "",
  });

  // Hàm xử lý chọn ảnh mới
  const handleImageChange = (type: "background" | "avatar") => {
    const newImageUrl = prompt("Nhập link ảnh mới:");
    if (newImageUrl) {
      if (type === "background") setBackgroundImage(newImageUrl);
      if (type === "avatar") setAvatarImage(newImageUrl);
    }
  };

  // Hàm xử lý thay đổi thông tin
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChapterInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Hàm xử lý submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Thông tin chương đã cập nhật:", {
      backgroundImage,
      avatarImage,
      chapterInfo,
    });
    alert("Thông tin đã được lưu!");
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div>
        {/* chỉnh sửa ảnh nền và avt truyện */}
        <h1 className="text-center py-5 text-[20px] font-bold">
          Ảnh nền và avt truyện
        </h1>
        <div className="flex justify-center space-x-4">
          {/* ảnh nền */}
          <div className="w-[150px] h-[200px] bg-white relative">
            <img
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 p-2 rounded-l-full bg-black/50 z-20 text-white"
              onClick={() => handleImageChange("background")}
            >
              <LuPencilLine />
            </button>
          </div>
          {/* ảnh avt truyện */}
          <div className="w-[150px] h-[200px] bg-white relative">
            <img
              src={avatarImage}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 p-2 rounded-l-full bg-black/50 z-20 text-white"
              onClick={() => handleImageChange("avatar")}
            >
              <LuPencilLine />
            </button>
          </div>
        </div>
        {/* chỉnh sủa thông tin về truyện */}
        <h1 className="py-5 text-[20px] pl-5 font-bold">
          Chỉnh sửa các thống tin về truyện
        </h1>
        <div className="p-5 mb-10">
          <div className="flex justify-between space-x-10">
            <div className="w-[50%] space-y-3">
              <Input>
                <input
                  className="w-full  border  focus:outline-none bg-transparent focus:none"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={chapterInfo.name}
                  onChange={handleInputChange}
                />
              </Input>
              <Input>
                <input
                  className="w-full"
                  type="text"
                  placeholder="Tác giả"
                  name="author"
                  value={chapterInfo.author}
                  onChange={handleInputChange}
                />
              </Input>
              <Input>
                <input
                  className="w-full"
                  type="text"
                  placeholder="Họa sĩ"
                  name="artist"
                  value={chapterInfo.artist}
                  onChange={handleInputChange}
                />
              </Input>
            </div>
            <div className="w-[50%] space-y-3">
              <Input>
                <input
                  className="w-full"
                  type="text"
                  placeholder="Nội dung"
                  name="content"
                  value={chapterInfo.content}
                  onChange={handleInputChange}
                />
              </Input>
              <Input>
                <input
                  className="w-full"
                  type="text"
                  placeholder="Tuổi"
                  name="age"
                  value={chapterInfo.age}
                  onChange={handleInputChange}
                />
              </Input>
              <Input>
                <input
                  className="w-full"
                  type="text"
                  placeholder="Mô tả"
                  name="description"
                  value={chapterInfo.description}
                  onChange={handleInputChange}
                />
              </Input>
            </div>
          </div>
          <button
            className="mt-5 w-full py-3 bg-[#0206fd] hover:opacity-80 rounded-md text-white"
            type="submit"
          >
            Lưu
          </button>
        </div>
      </div>
    </form>
  );
}
