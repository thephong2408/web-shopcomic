"use client";
import React, { useEffect } from "react";
import Layout1 from "@/app/layout/Layout1";
import Button from "@/app/components/Button";
import { IoStar } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import Alert from "@/app/components/Alert";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Swiper2 from "@/app/components/Swiper1";
import Link from "next/link";
import Share from "@/app/components/Share";
import Buy from "@/app/components/Buy";

export default function page() {
  const [open, setOpen] = useState<boolean>(false);
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
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
      <div className="relative lg:min-h-screen text-18 ">
        {open2 && (
          <Alert>
            <div className="relative max-w-[600px] lg:p-[30px] p-[15px]">
              <IoClose
                onClick={() => setOpen2(false)}
                className="absolute right-2 top-2 text-30 "
              />
              <span className="text-18 font-normal text-[#bcbcbc]">
                Tiếp thêm động lực cho đội ngũ admin POPS bằng việc DONATE mời
                dàn admin của POPS 1 Bữa Tối Đủ Đầy. POPS xin cảm ơn và mong sẽ
                luôn được đồng hành cùng các bạn!
              </span>
            </div>
          </Alert>
        )}
        {open1 && (
          <Alert>
            <div className="w-full h-full lg:p-[30px] p-[15px]">
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
                        <span className="font-bold lg:text-[72px] text-[30px] text-[#ed4d2d]">
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
        {open && (
          <Alert>
            <div className="w-full h-full p-[30px]">
              <ul className="space-y-[35px]">
                <li className="flex items-center justify-between text-30 font-bold ">
                  <span className="text-[#ffffff] ">Chia sẻ</span>

                  <IoClose onClick={() => setOpen(false)} className=" " />
                </li>
                <li className="w-full ">
                  <ul className="flex w-full justify-around items-center">
                    <li className="flex flex-col space-y-[10px] items-center">
                      <div className="size-[80px] rounded-full">
                        <img
                          src="https://lucas.vn/wp-content/uploads/2023/08/logo-fb.webp"
                          alt=""
                        />
                      </div>
                      <span>Facebook</span>
                    </li>
                    <li className="flex flex-col space-y-[10px] items-center">
                      <div className="size-[80px] rounded-full">
                        <img
                          src="https://haiauint.vn/wp-content/uploads/2024/02/zalo-icon.png"
                          alt=""
                        />
                      </div>
                      <span>Zalo</span>
                    </li>{" "}
                    <li className="flex flex-col space-y-[10px] items-center">
                      <div className="size-[80px] rounded-full overflow-hidden">
                        <img
                          src="https://w7.pngwing.com/pngs/651/194/png-transparent-messenger-logo-logo-facebook-messenger-telegram-instant-messaging-chatbot-circle-social-facebook-messenger-logo-miscellaneous-blue-text-thumbnail.png"
                          alt=""
                        />
                      </div>
                      <span>Messenger</span>
                    </li>
                  </ul>
                </li>
                <li className="w-full flex items-center justify-between h-[40px] bg-[#242424] rounded-md px-5">
                  <span className="max-w-[400px] overflow-hidden whitespace-nowrap text-ellipsis">
                    https://pops.vn/bundle/POBD-240828-104631-RCTDXR?p-sid=EYJHBGCIOIJ66CF3BE3B43191AE7D0D33
                  </span>
                  <span className="text-[#ed4d2d]">COPY</span>
                </li>
              </ul>
            </div>
          </Alert>
        )}
        <ul className="relative px-100 lg:py-[120px] pt-[80px] space-y-[20px] z-20">
          <li className="space-y-[2px]">
            <div className="text-16 flex justify-start space-x-2 items-center">
              <span className="text-[#f47213]">MỜI ADMIN NÈ❣️</span>
            </div>
            <div className="text-48 font-bold">Bữa Tối Đủ Đầy</div>
          </li>
          <li className="lg:space-y-[20px] space-y-[5px] lg:py-0 rounded-md py-2 text-[#c2c2c2] lg:bg-transparent bg-black/50">
            <p className="lg:w-[600px] w-full lg:p-0 px-2">
              Tiếp thêm động lực cho đội ngũ admin POPS bằng việc DONATE mời dàn
              admin của POPS 1 Bữa Tối Đủ Đầy.
            </p>
            <p className="lg:w-[600px] w-full lg:p-0 px-2">
              POPS xin cảm ơn và mong sẽ luôn được đồng hành cùng các bạn!...
            </p>
            <p className="text-white font-medium lg:w-[600px] w-full lg:p-0 px-2">
              <u onClick={() => setOpen2(true)}>Xem thêm...</u>
            </p>
          </li>
          <li className=" flex space-x-[50px] items-center">
            <Button
              onClick={() => setOpen1(true)}
              text="Mua ngay"
              showPrice={true}
              showIcon={false}
              price="900"
              className="bg__button font-bold text-25"
            />

            {/* <button
              onClick={() => setOpen(true)}
              className="size-[60px] rounded-full border-[1px] border-[#fff]"
            >
              <IoShareSocial className="text-30" />
            </button> */}
            <Share />
          </li>
          <Swiper2
            text="Gói liên quan"
            cardNumber={false}
            number={number}
            shop={false}
            textCard="Gói Ủng Hộ Phát Triển Nền Tảng"
            img="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/tr_a_hori-fd296efd0c1f-1682411563647-NyAAtfxa.jpg?v=0&maxW=320&format=webp"
          />
        </ul>
        {/* băng chuyền */}

        {/* nền page */}
        <div className="absolute w-full lg:h-[620px] h-full top-0 left-0 z-0 ">
          <img
            src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/bu_i_t_i_banner-411b7245631b-1682412694150-0BW4Vv3g.jpg?v=0&format=webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg_img2 z-10"></div>
      </div>
    </Layout1>
  );
}
