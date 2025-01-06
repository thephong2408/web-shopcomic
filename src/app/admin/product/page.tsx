"use client";
import Swiper2 from "@/app/components/Swiper1";
import HeaderProduct from "./HeaderProduct";
import { useState } from "react";
import Card from "@/app/components/Card";
import Pagination from "@/app/components/Pagination";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import Link from "next/link";
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
    <div>
      <div className="p-5">
        <Link href="/admin/comicnew">
          <button className="px-10 py-4 bg-[#f55d1b] rounded-md font-bold">
            Thêm truyện mới +
          </button>
        </Link>
      </div>
      <HeaderProduct />
      <div className="px-5 space-y-5">
        <div className="space-y-6">
          {/* Kết quả các trang tìm được */}
          <div className=" bg-[#1f1f1f] p-4 rounded">
            <h3 className="text-lg font-bold">Danh sách truyện</h3>
            <div className="grid grid-cols-8 gap-4 mt-5">
              {arr.map((item, index) => (
                <Card key={index} shop={false} card="admin/product/1" />
              ))}
            </div>
            {/* phân trang */}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
