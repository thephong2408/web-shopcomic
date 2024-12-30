"use client";
import React from "react";
import { useState } from "react";
import { MdVideoLibrary } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { MdDataSaverOn } from "react-icons/md";
import { RiQrScan2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

import Alert from "@/app/components/Alert";

export default function Information() {
  const [save, setSave] = useState<boolean>(true);
  const [like, setLike] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      {/* chia sẻ alert */}
      {open && (
        <Alert>
          <div className=" w-full h-full lg:p-[30px] p-[15px]">
            <ul className="lg:space-y-[35px] space-y-[15px]">
              <li className="flex items-center justify-between text-30 font-bold ">
                <span className="text-[#ffffff] ">Chia sẻ</span>

                <IoClose onClick={() => setOpen(false)} className=" " />
              </li>
              <li className="w-full ">
                <ul className="flex w-full justify-around items-center">
                  <li className="flex flex-col space-y-[10px] items-center">
                    <div className="lg:size-[80px] size-[40px] rounded-full">
                      <img
                        src="https://lucas.vn/wp-content/uploads/2023/08/logo-fb.webp"
                        alt=""
                      />
                    </div>
                    <span>Facebook</span>
                  </li>
                  <li className="flex flex-col space-y-[10px] items-center">
                    <div className="lg:size-[80px] size-[40px] rounded-full">
                      <img
                        src="https://haiauint.vn/wp-content/uploads/2024/02/zalo-icon.png"
                        alt=""
                      />
                    </div>
                    <span>Zalo</span>
                  </li>{" "}
                  <li className="flex flex-col space-y-[10px] items-center">
                    <div className="lg:size-[80px] size-[40px] rounded-full overflow-hidden">
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
      <nav className="flex flex-col w-full lg:pt-[40px] pt-[15px] lg:pb-[105px] pb-[10px] xl:px-[100px] px-[10px]">
        {/* tên ca sĩ */}
        <ul>
          <li className=" flex font-bold items-center space-x-2 text-18 text-[#ed4d2d]">
            <span>
              <MdVideoLibrary />
            </span>
            <span>K-ICM</span>
          </li>
        </ul>
        {/* các nút */}
        <ul className="xl:flex xl:justify-between  border-b-[1px] pb-[15px]">
          <li className="text-36 font-bold xl:w-[60%]">
            K-ICM ft. Văn Mai Hương, Lê Bống - Chim Quý Trong Lồng (Official MV)
          </li>
          <li className="xl:w-[40%]">
            <ul className="flex justify-between lg:justify-start lg:space-x-5 lg:mt-0 mt-5">
              <li
                onClick={() => setLike(!like)}
                className={`flex flex-col items-center lg:space-y-[20px] space-y-[10px] text-18 lg:w-[80px] ${
                  like ? "" : "text-[#ed4d2d]"
                }`}
              >
                <span>
                  <BiSolidLike className="text-25" />
                </span>
                <span>{like ? "Thích" : "Đã Thích"}</span>
              </li>
              <li className="flex flex-col  items-center lg:space-y-[20px] space-y-[10px] text-18">
                <span>
                  <FaCommentDots className="text-25" />
                </span>
                <span>Báo lỗi</span>
              </li>
              <li
                onClick={() => setOpen(true)}
                className="flex flex-col  items-center lg:space-y-[20px] space-y-[10px] text-18"
              >
                <span>
                  <FaShareAlt className="text-25" />
                </span>
                <span>Chia sẻ</span>
              </li>
              <li
                onClick={() => setSave(!save)}
                className={`flex flex-col  items-center lg:space-y-[20px] space-y-[10px] text-18 lg:w-[70px] ${
                  save ? "" : "text-[#ed4d2d]"
                }`}
              >
                <span>
                  {save ? (
                    <MdDataSaverOn className="text-25" />
                  ) : (
                    <FaCheck className="text-25" />
                  )}
                </span>
                <span>{save ? "Lưu " : "Đã Lưu"}</span>
              </li>
              <li className="flex flex-col  items-center lg:space-y-[20px] space-y-[10px] text-18">
                <span>
                  <RiQrScan2Line className="text-25" />
                </span>
                <span>Tải POPS App</span>
              </li>
            </ul>
          </li>
        </ul>
        {/* thông tin */}
        <ul className="xl:flex xl:justify-between w-full py-[35px] xl:space-y-0 space-y-5">
          <li className="xl:w-[60%] ">
            <ul className="flex flex-col text-20">
              <li>
                <span className="text-[#939393]">Mô tả</span> : CHIM QUÝ TRONG
                LỒNG - K-ICM X VĂN MAI HƯƠNG X LÊ BỐNG | OFFICIAL MV
              </li>
              <li>
                Thưởng thức tác phẩm của K-ICM ft. Văn Mai Hương, Lê Bống - Chim
                Quý Trong Lồng (Official MV) ngay tại POPS. Tải ngay POPS APP -
                ứng dụng giải trí hàng đầu với kho nội dung đa dạng phong phú,
                và được cập nhật liên tục để có trải...
              </li>
            </ul>
          </li>
          <li className="xl:w-[40%] xl:pl-[150px]">
            <ul className="lg:space-y-[20px] space-y-[10px] text-20 text-[#b3b3b3]">
              <li className="center space-x-1 ">
                <span>Thể loại:</span>
                <span className="text-[#ed4d2d]">Liveshow</span>
              </li>
              <li className="center space-x-1 ">
                <span>Nghệ Sĩ/ Nhân Vật</span>
                <span className="text-[#ed4d2d]">Mỹ Tâm</span>
              </li>
              <li className="center space-x-1 ">
                <span>Nước sản xuất:</span>
                <span className="text-[#ed4d2d]">Vietnam</span>
              </li>
              <li className="center space-x-1 ">
                <span>Năm phát hành:</span>
                <span className="text-white">2022</span>
              </li>
              <li className="center space-x-1 ">
                <span>Xếp Hạng</span>
                <span>16+</span>
              </li>
              <li className="center space-x-1 ">
                <span>Danh mục:</span>
                <span className="text-[#ed4d2d]">Ca nhạc</span>
              </li>
              <li className="center space-x-1 ">
                <span>Nội dung bởi:</span>
                <span className="text-[#ed4d2d]">My Tam</span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* bình luận và chương */}
    </div>
  );
}
