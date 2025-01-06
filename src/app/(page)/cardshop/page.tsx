"use client";
import React from "react";
import Layout1 from "@/app/layout/Layout1";
import Button from "@/app/components/Button";
import { IoStar } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import Alert from "@/app/components/Alert";
import Share from "@/app/components/Share";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Buy from "@/app/components/Buy";
import Image from "next/image";

export default function Page() {
  const [open, setOpen] = useState<boolean>(false);
  const [open1, setOpen1] = useState<boolean>(false);

  return (
    <Layout1>
      <div className="relative lg:min-h-screen text-18 lg:py-0 pb-[20px] ">
        {open1 && (
          <Alert>
            <div className="w-full h-full p-[30px]">
              <ul className="lg:space-y-[35px] space-y-[15px]">
                <li className="flex items-center justify-between text-30 font-bold ">
                  <div className="rounded-full h-[40px] flex items-center overflow-hidden space-x-1 text-18 ">
                    <div className="flex space-x-1 items-center bg-[#4b4a4d] p-2">
                      {" "}
                      <div className=" size-[20px]">
                        <img
                          src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
                          alt=""
                        />
                      </div>
                      <span>3</span>
                    </div>
                    <div className="bg-[#4b4a4d] p-2">+</div>
                  </div>

                  <IoClose onClick={() => setOpen1(false)} className=" " />
                </li>
                <li className="w-full ">
                  <ul className="flex w-full justify-around items-center">
                    <li className="flex flex-col space-y-[10px] items-center">
                      <span className="text-25">
                        CHƯƠNG 8-17 | HOÀNG TỬ BARI
                      </span>
                      <span className="flex space-x-5 items-center">
                        <span className="font-bold text-[72px] text-[#ed4d2d]">
                          255
                        </span>

                        <div className="size-[40px]">
                          <img
                            src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
                            alt=""
                          />
                        </div>
                      </span>
                      <span className="mt-[50px]">Bạn không đủ POPS Stars</span>
                    </li>
                  </ul>
                </li>
                <li className="w-full">
                  <Link href={"/deposit"}>
                    <Button
                      text="NẠP STARS NGAY"
                      className="w-full bg__button"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </Alert>
        )}

        <div className="lg:absolute w-full lg:h-[620px] h-auto top-0 left-0 z-0 ">
          <img
            src="https://vnw-Image-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/1920x1080-0d9f3c4a9e5c-1724816733213-joAxVCt2.jpg?v=0&format=webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <ul className="relative px-100 lg:py-[120px] pt-[10px] space-y-[20px] z-20">
          <li className="space-y-[2px]">
            <div className="text-16 flex justify-start space-x-2 items-center">
              <span className="text-[#f47213]">MUA NGAY</span>
              <IoStar className="text-[#ffe32c]" />
            </div>
            <div className="text-48 font-bold">Chương 8-17 | HOÀNG TỬ BARI</div>
          </li>
          <li className="space-y-[10px] text-[#c2c2c2]">
            <p>
              Gói mở khóa 10 chương (Chương 8 đến 17) với giá ưu đãi 255 POPS
              Stars (Giá gốc: 300 POPS Stars)
            </p>
            <p>- Tiết Kiệm 15%...</p>
            <p className="text-white">
              <u>Xem thêm...</u>
            </p>
          </li>
          <li className=" flex space-x-[50px] items-center">
            <Buy />
            <Share />
          </li>
        </ul>

        <div className="absolute top-0 left-0 w-full h-full bg_Image2 z-10"></div>
      </div>
    </Layout1>
  );
}
