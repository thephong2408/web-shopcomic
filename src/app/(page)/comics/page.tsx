"use client";
import React from "react";
import Bangchuyen from "./BangChuyen";
import Swiper2 from "@/app/components/Swiper1";
import Poster from "@/app/components/Poster";
import Rank from "@/app/components/Rank";
import Layout1 from "@/app/layout/Layout1";

export default function Comics() {
  return (
    <Layout1>
      <div className="min-h-screen flex flex-col space-y-[45px] mb-10 bg-[#141414]">
        <Bangchuyen />
        <div className="flex flex-col space-y-[45px]">
          <div className="h-[90px]  px-[100px]">
            <img
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/web-60c02969949e-1701678163480-EopdWLIA.png?v=0&format=webp"
              alt=""
            />
          </div>
          <Swiper2 text={"Top 10 Unlock All-Time 🏆"} className=" px-[100px]" />
          <Swiper2
            shop={true}
            card={false}
            text={"Ưu Đãi Tặng Bạn"}
            className=" px-[100px]"
          />
          <div className="w-full px-[100px]">
            <img
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/2376x160__11_-cd3f5cdd78d1-1693987438788-C7SAuBLD.jpg?v=0&format=webp"
              alt=""
            />
          </div>
          <Swiper2
            shop={false}
            text={"Top 10 Unlock Tuần 🚀"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Top 10 Unlock Tháng 🚀"}
            className=" px-[100px]"
          />

          <Poster text={"Post Đề Cử"} />
          <Swiper2
            shop={false}
            text={"🎯TOP 15 POPS Comic Bất Hủ🎯"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Về Lại Trường Xưa"}
            className=" px-[100px]"
          />
          <Rank />
          <Swiper2
            shop={false}
            text={"👨‍❤️‍💋‍👨Động Cuồng BL - GL👩‍❤️‍💋‍👩"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Truyện Việt Chính Gốc"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Có Con Quỷ Sau Lưng Bạn Kìa 👻"}
            className=" px-[100px]"
          />
          <div className="w-full px-[100px]">
            <img
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/2376x160__11_-cd3f5cdd78d1-1693987438788-C7SAuBLD.jpg?v=0&format=webp"
              alt=""
            />
          </div>
          <Swiper2
            shop={false}
            text={"Top 10 Unlock Tháng 💎"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Đọc Trọn Bộ, Chờ Chi?"}
            className=" px-[100px]"
          />
          <Poster text={"🎉ƯU ĐÃI CỰC CHÁY💫"} className=" px-[100px]" />
          <Swiper2
            shop={false}
            text={"💫Top Truyện Cười Rụng Rốn🤣"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"🌪Truyện Ngược Nữa, Ngược Mãi🌊"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Độc Quyền Trên POPS"}
            className=" px-[100px]"
          />
          <Poster text={"Post Đề Cử"} />
          <Swiper2
            shop={false}
            text={"Nữ Cường, Buff Tử Tế"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"POPS Bonus Program ️🏆"}
            className=" px-[100px]"
          />
          <div className="w-full px-[100px]">
            <img
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/2376x160__11_-cd3f5cdd78d1-1693987438788-C7SAuBLD.jpg?v=0&format=webp"
              alt=""
            />
          </div>
          <Swiper2
            shop={false}
            text={"Vừa Hot, Vừa Free. Ai Mà Chịu Nổi?"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Truyện Tranh Đam Mỹ"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Truyện Ngôn Tình FullTế"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Truyện Tranh Xuyên Không"}
            className=" px-[100px]"
          />
          <div className="w-full px-[100px]">
            <img
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/2376x160__11_-cd3f5cdd78d1-1693987438788-C7SAuBLD.jpg?v=0&format=webp"
              alt=""
            />
          </div>
          <Swiper2
            shop={false}
            text={"Truyện Hài Sút Quần"}
            className=" px-[100px]"
          />
          <Swiper2 shop={false} text={"Lãng Mạn"} className=" px-[100px]" />
          <Swiper2
            shop={false}
            text={"Kỳ Ảo Lãng Mạn"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Truyện Vụn Vặt Đời Thường"}
            className=" px-[100px]"
          />
          <div className="w-full px-[100px]">
            <img
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/2376x160__11_-cd3f5cdd78d1-1693987438788-C7SAuBLD.jpg?v=0&format=webp"
              alt=""
            />
          </div>
          <Swiper2
            shop={false}
            text={"Truyện Cổ Trang"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Hành Động Chiến Đấu"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Truyện Manhwa"}
            className=" px-[100px]"
          />
          <div className="w-full px-[100px]">
            <img
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/2376x160__11_-cd3f5cdd78d1-1693987438788-C7SAuBLD.jpg?v=0&format=webp"
              alt=""
            />
          </div>
          <Swiper2
            shop={false}
            text={"Truyện Manhua"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"Netcomics Webtoons"}
            className=" px-[100px]"
          />
          <Swiper2
            shop={false}
            text={"FanFan Webtoons"}
            className=" px-[100px]"
          />
          <div className="w-full px-[100px]">
            <img
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/2376x160__11_-cd3f5cdd78d1-1693987438788-C7SAuBLD.jpg?v=0&format=webp"
              alt=""
            />
          </div>
          <Swiper2 shop={false} text={"DCC Webtoons"} className=" px-[100px]" />
          <Swiper2 shop={false} text={"POPS Comic"} className=" px-[100px]" />
          <Swiper2
            shop={false}
            text={"FanFan Webtoons"}
            className=" px-[100px]"
          />
          <ul className="mx-[100px] py-[20px] space-y-5 text-white border-t-[1px] border-[#ccc]">
            <li className="text-[24px] font-bold">Comic</li>
            <li className="text-[18px] text-[#ccc]">
              Đọc truyện tranh hay nhất, đa dạng thể loại: truyện tranh ngôn
              tình, truyện tranh đam mỹ, truyện tranh cổ trang...
            </li>
          </ul>
        </div>
      </div>
    </Layout1>
  );
}
