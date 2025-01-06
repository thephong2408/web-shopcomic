"use client";
import React, { useEffect, useState } from "react";
import Layout1 from "@/app/layout/Layout1";
import Swiper2 from "@/app/components/Swiper1";
import Postermucsic from "@/app/components/Postermucsic";
export default function Page() {
  const [number, setNumber] = useState(6); // Số lượng mặc định

  useEffect(() => {
    // Kiểm tra nếu đang ở phía client
    if (typeof window !== "undefined") {
      const updateNumber = () => {
        if (window.innerWidth >= 1024) {
          setNumber(8); // Desktop
        } else if (window.innerWidth >= 768) {
          setNumber(4); // Tablet
        } else {
          setNumber(2); // Mobile
        }
      };

      // Gọi hàm khi tải trang và khi thay đổi kích thước
      updateNumber();
      window.addEventListener("resize", updateNumber);

      return () => {
        window.removeEventListener("resize", updateNumber);
      };
    }
  }, []); // Mảng phụ thuộc rỗng để chỉ chạy một lần khi mount

  return (
    <Layout1>
      <div className="lg:p-[100px] pt-[80px] px-[10px] min-h-screen lg:space-y-[35px] space-y-[20px]">
        <span className="text-36 font-bold">Music</span>
        <Swiper2
          text="Nghệ sĩ nổi bật"
          shop={false}
          number={number}
          textCard=""
          card="cardcasi"
          music={true}
          img="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/thumbnail_title-223c7e3f29a1-1671605508166-4xzHGLLe.png?v=0&maxW=300&format=webp"
        />
        <Swiper2
          cardNumber={false}
          card="musiccard"
          number={number}
          text="Nhạc Cho Một Ngày Chill"
          shop={false}
          textCard={"Uyên Linh - Khoảng Trống (Lyrics Video)"}
        />
        <Swiper2
          cardNumber={false}
          card="musiccard"
          number={number}
          text="Nhạc Cho Một Ngày Chill"
          shop={false}
          textCard={"Uyên Linh - Khoảng Trống (Lyrics Video)"}
        />
        <Postermucsic text="POPS đề cử" show={false} />
        <Swiper2
          cardNumber={false}
          card="musiccard"
          number={number}
          text="Có Chút Ngọt Ngào 🍭"
          shop={false}
          textCard={"Uyên Linh - Khoảng Trống (Lyrics Video)"}
        />
        <Swiper2
          cardNumber={false}
          card="musiccard"
          number={number}
          text="Cà Phê Cùng Nhạc Việt"
          shop={false}
          textCard={"Uyên Linh - Khoảng Trống (Lyrics Video)"}
        />
        <Swiper2
          cardNumber={false}
          card="musiccard"
          number={number}
          text="Dương Triệu Vũ - Official MV"
          shop={false}
          textCard={"Uyên Linh - Khoảng Trống (Lyrics Video)"}
        />
        <Swiper2
          cardNumber={false}
          card="musiccard"
          number={number}
          text="Dương Triệu Vũ - Official MV"
          shop={false}
          textCard={"Uyên Linh - Khoảng Trống (Lyrics Video)"}
        />
        <Swiper2
          cardNumber={false}
          card="musiccard"
          number={number}
          text="Hồ Ngọc Hà - Music video"
          shop={false}
          textCard={"Uyên Linh - Khoảng Trống (Lyrics Video)"}
        />
        <Swiper2
          cardNumber={false}
          card="musiccard"
          number={number}
          text=" Trúc Nhân - Official MV"
          shop={false}
          textCard={"Uyên Linh - Khoảng Trống (Lyrics Video)"}
        />
        <Postermucsic text="POPS đề cử" show={false} />
        <Swiper2
          cardNumber={false}
          card="musiccard"
          number={number}
          text=" Uyên Linh - Lyrics video"
          shop={false}
          textCard={"Uyên Linh - Khoảng Trống (Lyrics Video)"}
        />
        <ul className="flex flex-col space-y-5 pt-[50px] border-t-[1px] ">
          <li className="text-25 font-bold">Music</li>
          <li className="text-[#909092] text-18 font-medium">
            Music Tổng hợp các MV & clip ca nhạc chọn lọc hay nhất: nhạc trẻ, ca
            nhạc Việt Nam, nhạc xuân... mới và ăn khách nhất hiện nay.
          </li>
        </ul>
      </div>
    </Layout1>
  );
}
