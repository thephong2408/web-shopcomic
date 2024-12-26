"use client";
import React from "react";
import Layout1 from "@/app/layout/Layout1";
import Link from "next/link";

export default function Page() {
  return (
    <Layout1>
      <div className="px-100 lg:py-[100px] py-[80px]  min-h-screen flex lg:flex-row flex-col lg:justify-between lg:space-y-0 space-y-[20px] lg:space-x-[30px]">
        <div className="flex-1 h-[240px] overflow-hidden border-shadow rounded-md">
          <Link href={"./music"}>
            <div
              className=" w-full h-[240px] rounded-md bg-no-repeat bg-cover bg-center transition-transform duration-300 hover:scale-105  overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/music_banner-c21eb8380256-1589765567928-bPy3PGfG.png?v=0&format=webp')",
              }}
            >
              <div className="w-full h-full bg_img3 flex flex-col justify-center  px-7 space-y-3">
                <span className="w-full text-30 font-bold">Music</span>
                <span className="w-[70%] text-20 text-[#909092]">
                  Tổng hợp các MV &amp; clip ca nhạc chọn lọc hay nhất: nhạc
                  trẻ, ca nhạc Việt Nam, nhạc xuân... mới và ăn khách nhất hiện
                  nay.
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-1 h-[200px] overflow-hidden rounded-md border-shadow">
          {" "}
          <div
            className=" w-full h-[200px] rounded-md bg-no-repeat bg-cover bg-center transition-transform duration-300 hover:scale-105  overflow-hidden"
            style={{
              backgroundImage:
                "url('https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/image_3x-96c2597950f9-1605753786643-h6wUhzOc.jpg?v=0&format=webp')",
            }}
          >
            <div className="w-full h-full bg_img3 flex flex-col justify-center  px-7 space-y-3">
              <span className="w-full text-30 font-bold">Schedule</span>
            </div>
          </div>
        </div>{" "}
        <Link href={"./donate"}>
          {" "}
          <div className="flex-1 h-[200px] overflow-hidden rounded-md border-shadow">
            <div
              className=" w-full h-full rounded-md bg-no-repeat bg-cover bg-center transition-transform duration-300 hover:scale-105  overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/donate_ung_ho_pop_2-ac641420a369-1684477047840-COefQQda.jpg?v=0&format=webp')",
              }}
            >
              {" "}
              <div className="w-full h-full bg_img3 flex flex-col justify-center  px-7 space-y-3">
                <span className="w-full text-30 font-bold">
                  Donation Ranking
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Layout1>
  );
}
