"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const animeList = [
    "Naruto",
    "One Piece",
    "Attack on Titan",
    "My Hero Academia",
    "Demon Slayer",
    "Sword Art Online",
    " Brotherhood",
  ];
  const comicList = [
    "Blue Exorcist",
    "Your Lie in April",
    "Fate/Stay Night",
    "The Seven Deadly Sins",
    "Overlord",
    "No Game No Life",
    "Gintama",
    "Mob Psycho 100",
    "Food Wars!",
    "Haikyuu!!",
  ];

  return (
    <div className="w-[1000px] flex justify-center relative py-5">
      {" "}
      <div
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        className="w-[40%] px-4 rounded-full lg:h-[45px] h-[40px] flex justify-between items-center bg-[#363636]"
      >
        <input
          className="w-[80%] bg-transparent text-18  border-none outline-none"
          type="text"
          placeholder="Tiếm truyện, anime, musics, comics"
        />

        <Link href={"/listsearch"}>
          <FaSearch />
        </Link>
      </div>
      {isInputFocused && (
        <div className="absolute top-[100%] w-[500px] max-h-[250px] overflow-auto bg-[#242424] rounded-md p-[20px] z-50 space-y-8">
          <div className="space-y-[5px]">
            <div className="w-full h-[80px] flex space-x-2">
              <div className="size-[80px] rounded bg-white"></div>
              <div className="flex-1 flex flex-col justify-between ">
                <span className="font-bold">Name: Naruto</span>
                <span>Số lượng chap: 146 </span>
                <span>Tổng thu nhập: 2 000 000 đ</span>
              </div>
            </div>
          </div>
          <div className="space-y-[5px]">
            <div className="w-full h-[80px] flex space-x-2">
              <div className="size-[80px] rounded bg-white"></div>
              <div className="flex-1 flex flex-col justify-between ">
                <span className="font-bold">Name: Naruto</span>
                <span>Số lượng chap: 146 </span>
                <span>Tổng thu nhập: 2 000 000 đ</span>
              </div>
            </div>
          </div>
          <div className="space-y-[5px]">
            <div className="w-full h-[80px] flex space-x-2">
              <div className="size-[80px] rounded bg-white"></div>
              <div className="flex-1 flex flex-col justify-between ">
                <span className="font-bold">Name: Naruto</span>
                <span>Số lượng chap: 146 </span>
                <span>Tổng thu nhập: 2 000 000 đ</span>
              </div>
            </div>
          </div>
          <div className="space-y-[5px]">
            <div className="w-full h-[80px] flex space-x-2">
              <div className="size-[80px] rounded bg-white"></div>
              <div className="flex-1 flex flex-col justify-between ">
                <span className="font-bold">Name: Naruto</span>
                <span>Số lượng chap: 146 </span>
                <span>Tổng thu nhập: 2 000 000 đ</span>
              </div>
            </div>
          </div>
          <div className="space-y-[5px]">
            <div className="w-full h-[80px] flex space-x-2">
              <div className="size-[80px] rounded bg-white"></div>
              <div className="flex-1 flex flex-col justify-between ">
                <span className="font-bold">Name: Naruto</span>
                <span>Số lượng chap: 146 </span>
                <span>Tổng thu nhập: 2 000 000 đ</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
