"use client";
import Layout1 from "@/app/layout/Layout1";
import React, { useEffect, useState } from "react";
import Swiper2 from "@/app/components/Swiper1";

export default function page() {
  const [number, setNumber] = useState(6); // Số lượng mặc định

  useEffect(() => {
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

    return () => window.removeEventListener("resize", updateNumber);
  }, []);
  return (
    <Layout1>
      <div className="min-h-screen py-[100px] px-100 space-y-[25px]">
        <Swiper2
          text="Donate tiếp sức cho Admin cày deadline"
          img="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/1-9f2dfa3b76c8-1682410628496-4QQQupnb.jpg?v=0&maxW=260&format=webp"
          textCard="Bữa Tối Đủ Đầy"
          number={number}
          shop={false}
          card="dontecard"
        />

        <Swiper2
          text=" Donate ủng hộ POPS"
          img="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/640x960_2-9a0fd5073423-1680076794313-k83QNkDb.jpg?v=0&maxW=260&format=webp"
          textCard="Bữa Tối Đủ Đầy"
          shop={false}
          number={number}
          card="dontecard"
        />
      </div>
    </Layout1>
  );
}
