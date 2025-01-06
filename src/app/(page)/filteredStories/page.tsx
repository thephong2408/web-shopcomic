"use client";
import React from "react";
import Swiper2 from "@/app/components/Swiper1";
import { useState } from "react";
import Card from "@/app/components/Card";
import Pagination from "@/app/components/Pagination";
import Layout1 from "@/app/layout/Layout1";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
export default function Product() {
  const [isCountryOpen, setIsCountryOpen] = useState<boolean>(false); // Trạng thái dropdown quốc gia
  const [selectedCountry, setSelectedCountry] =
    useState<string>("Chọn quốc gia");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]); // Danh sách thể loại đã chọn
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  const countries = ["Việt Nam", "Hoa Kỳ", "Nhật Bản", "Hàn Quốc"];
  const genres = ["Hành động", "Phiêu lưu", "Kinh dị", "Hài hước", "Lãng mạn"];
  // Xử lý khi chọn/xóa thể loại
  const toggleGenre = (genre: string) => {
    setSelectedGenres(
      (prev) =>
        prev.includes(genre)
          ? prev.filter((g) => g !== genre) // Nếu đã chọn thì xóa
          : [...prev, genre] // Nếu chưa chọn thì thêm
    );
  };
  return (
    <Layout1>
      <div className="lg:my-[100px] my-[50px] px-100">
        {" "}
        <div className="px-5 space-y-5">
          <div className="space-y-6">
            {/* Dropdown Quốc gia */}
            <div className="relative space-y-[5px] w-full">
              <label className="text-18" htmlFor="country">
                Quốc gia
              </label>
              {/* Nút hiển thị quốc gia được chọn */}
              <div
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="w-full flex justify-start lg:p-[12px] p-[8px] text-16 bg-[#343434] text-white rounded shadow focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
              >
                <span>{selectedCountry}</span>
              </div>

              {/* Danh sách các tùy chọn quốc gia */}
              {isCountryOpen && (
                <ul className="absolute z-10 w-full bg-[#343434] rounded shadow">
                  {countries.map((country, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsCountryOpen(false);
                      }}
                      className="lg:p-[12px] p-[8px] text-16 text-white hover:bg-orange-500 cursor-pointer"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Danh sách checkbox Thể loại */}
            <div className="space-y-[5px] w-full">
              <label className="text-18" htmlFor="genres">
                Thể loại truyện
              </label>
              <div className="flex flex-wrap lg:space-x-5 lg:space-y-0  ">
                {genres.map((genre, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 m-3 lg:w-auto w-[120px]"
                  >
                    <input
                      type="checkbox"
                      id={`genre-${index}`}
                      checked={selectedGenres.includes(genre)}
                      onChange={() => toggleGenre(genre)}
                      className="w-4 h-4 text-orange-500 focus:ring-orange-400 rounded border-gray-300"
                    />
                    <label
                      htmlFor={`genre-${index}`}
                      className="text-16 text-white"
                    >
                      {genre}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Hiển thị các giá trị đã chọn */}
            <div className="mt-6 p-4 bg-[#1f1f1f] text-white rounded">
              <h3 className="text-20 font-bold">Kết quả đã chọn</h3>
              <p className="text-20">Quốc gia: {selectedCountry}</p>
              <p className="text-20">
                Thể loại:{" "}
                {selectedGenres.length > 0
                  ? selectedGenres.join(", ")
                  : "Chưa chọn"}
              </p>
            </div>
            {/* Kết quả các trang tìm được */}
            <div className=" md:bg-[#1f1f1f] md:p-4 rounded">
              <h3 className="text-lg font-bold">Kết quả tìm được</h3>
              <div className="grid lg:grid-cols-8 md:grid-cols-6 grid-cols-2 gap-4 mt-5">
                {arr.map((item, index) => (
                  <Card key={index} shop={false} />
                ))}
              </div>
              {/* phân trang */}
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </Layout1>
  );
}
