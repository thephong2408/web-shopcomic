"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiBarChart } from "react-icons/fi";
import { IoCheckbox } from "react-icons/io5";
import { MdHistory, MdOutline4gPlusMobiledata } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { RiFeedbackFill, RiUserSettingsFill } from "react-icons/ri";
import { FaHospitalUser } from "react-icons/fa";
import { PiHandDepositFill } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import Menu from "./Menu";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showUser, setShowUser] = useState<boolean>(false);
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
  useEffect(() => {
    // Kiểm tra nếu đang ở phía client
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        // Kiểm tra nếu trang đã được cuộn xuống hơn 50px
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      // Thêm event listener cho scroll
      window.addEventListener("scroll", handleScroll);

      // Cleanup khi component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Mảng phụ thuộc rỗng để chỉ chạy một lần khi mount

  const isActiveLink = (href: string) => {
    return pathname === href;
  };
  return (
    <div
      className={` z-50 w-full  text-20 font-[400] lg:py-[20px] py-[15px] text-white lg:px-[100px] px-[20px] fixed top-0 left-0 transition-all duration-300 ${
        isScrolled ? "bg-header" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center w-full">
        <ul className=" flex items-center lg:space-x-[30px] space-x-[10px] ">
          <li>
            <div className=" lg:w-[120px] w-[60px] ">
              <img
                src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
                alt=""
              />
            </div>
          </li>
          <Link href={"/"}>
            <li
              className={`h-full items-center hidden lg:flex  ${
                isActiveLink("/") ? "text-[#d16428] font-bold" : ""
              } `}
            >
              Gói truyện
            </li>
          </Link>
          <Link href={"/comics"}>
            <li
              className={`h-full items-center hidden lg:flex  ${
                isActiveLink("/comics") ? "text-[#d16428] font-bold" : ""
              } `}
            >
              Comics
            </li>
          </Link>
          <Link href={"/filteredStories"}>
            <li
              className={`h-full items-center hidden lg:flex  ${
                isActiveLink("/filteredStories")
                  ? "text-[#d16428] font-bold"
                  : ""
              } `}
            >
              Lọc truyện
            </li>
          </Link>
          <li className="h-full items-center hidden lg:flex  ">Shop</li>
          <Link href={"/music"}>
            <li
              className={`h-full items-center hidden lg:flex  ${
                isActiveLink("/music") ? "text-[#d16428] font-bold" : ""
              } `}
            >
              Music
            </li>
          </Link>
          <Link href={"/donate"}>
            <li
              className={`h-full items-center hidden lg:flex  ${
                isActiveLink("/donate") ? "text-[#d16428] font-bold" : ""
              } `}
            >
              Donate
            </li>
          </Link>
          <Link href={"/add"}>
            {" "}
            <li
              className={`h-full items-center hidden lg:flex  ${
                isActiveLink("/add") ? "text-[#d16428] font-bold" : ""
              } `}
            >
              Thêm
            </li>
          </Link>
        </ul>
        <ul className="flex items-center lg:space-x-[20px] space-x-[15px]">
          <li className=" relative lg:flex hidden ">
            <div
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              className="lg:w-[235px] w-[185px] px-4 rounded-full lg:h-[45px] h-[40px]  flex justify-between items-center bg-[#363636]"
            >
              <input
                className="lg:w-[165px] w-[120px] bg-transparent text-18  border-none outline-none"
                type="text"
                placeholder="Tiếm truyện, anime, musics, comics"
              />

              <Link href={"/listsearch"}>
                <FaSearch />
              </Link>
            </div>
            {isInputFocused && (
              <div className="absolute top-[120%] lg:right-0 lg:translate-x-0 right-1/2 translate-x-1/2 lg:w-[400px] w-[90vw] max-h-[450px] overflow-auto bg-[#242424] rounded-md p-[20px] z-50 space-y-8">
                <div className="space-y-[5px]">
                  <span className="text-16 font-medium">VIDEO</span>
                  <div className="w-full flex flex-wrap">
                    {animeList.map((item: any, index: number) => (
                      <span
                        key={index}
                        className="py-[10px] px-[10px] flex items-center justify-center bg-[#343434] rounded-md text-16 m-[2px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-[15px]">
                  <span className="text-16 font-medium">COMICS</span>
                  <div className="w-full flex flex-wrap">
                    {comicList.map((item: any, index: number) => (
                      <span
                        key={index}
                        className="py-[10px] px-[10px] flex items-center justify-center bg-[#343434] rounded-md text-16 m-[2px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
          {/* <li className="flex space-x-2 ">
            <Link href={"/login"}>
              <button className="text-14 w-[110px] h-[40px] border-[2px] border-[#ea6017] text-[#ea6017] font-bold rounded-full">
                ĐĂNG NHẬP
              </button>
            </Link>

            <Link href={"/register"}>
              <button className="text-14 w-[110px] h-[40px] border-transparent text-white bg-[#ea6017] font-bold rounded-full">
                ĐĂNG KÝ
              </button>
            </Link>
          </li> */}
          <li
            onClick={() => setShowSearch(!showSearch)}
            className="lg:hidden flex justify-center items-center size-[35px] rounded-sm bg-[#b2b2b2]"
          >
            <FaSearch className="size-[20px]" />
          </li>
          <li>
            <div
              onMouseEnter={() => setShowUser(true)}
              onMouseLeave={() => setShowUser(false)}
              className="rounded-full lg:size-[50px] size-[35px] p-2 bg-[#ea6017] flex justify-center items-center relative"
            >
              <Link href={"/setting/setting"}>
                <FaUserGraduate className="lg:size-[30px] size-[20px]" />
              </Link>
              {showUser && (
                <div className="absolute lg:block hidden  w-[410px] right-0 top-[100%]  pt-2">
                  <div className=" bg-[#242424] rounded-md overflow-hidden text-16">
                    {/* <div
                      className="w-full h-[90px] bg-no-repeat bg-center bg-cover flex items-center px-[10px] rounded-md"
                      style={{
                        backgroundImage:
                          "url('https://cdn.popsww.com/popsapp/assets/images/account/menu-item-bg.png')",
                      }}
                    >
                      <div className="h-[55px] w-[75px] ">
                        <img
                      
                          src="https://cdn.popsww.com/popsapp/assets/images/account/gift.png"
                          alt=""
                        />
                      </div>
                      <ul className="space-y-[3px] font-medium text-14">
                        <li className="text-14 font-bold">Đăng Kí Ngay</li>
                        <li>để nhận phần quà và ưu đãi hấp dẫn</li>
                        <li> thành viên</li>
                      </ul>
                    </div> */}
                    {/* khi đã đăng nhập mới có  */}
                    <div className="w-full py-[20px] px-[20px] h-[85px] text-12 flex items-center justify-between space-x-5 bg-[#454545]">
                      <div className="flex items-center space-x-5">
                        <div className=" w-[60px] h-[60px] rounded-full overflow-hidden">
                          <img
                            src="https://products.popsww.com/api/v2/containers/file2/profiles/Adult-01.png?maxW=120&format=webp"
                            alt=""
                          />
                        </div>
                        <ul className="text-[#ccc]">
                          <li className="text-14 text-white">Phongda</li>
                          <li>User ID: 7uehdwi862h28e</li>
                          <li>Tham gia từ: 28 Aug 2024</li>
                        </ul>
                      </div>
                      <button className="p-[10px] bg-[#555555] rounded-full">
                        <RiUserSettingsFill className="text-20" />
                      </button>
                    </div>
                    <div className="flex flex-col w-full px-[20px] py-[10px]">
                      <span className="text-14 font-bold text-[#787878] pb-[20px]">
                        POSPS STARTS CỦA TÔI
                      </span>
                      <ul className="W-full flex items-center justify-between">
                        <li className="flex items-center space-x-2 ">
                          <div className="rounded-full w-[40px] h-[40px] bg-[#ea6017] flex items-center justify-center overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
                              alt=""
                            />
                          </div>
                          <span className="text-30 font-bold text-[#ea6017]">
                            0
                          </span>
                        </li>
                        <li>
                          <Link href={"/deposit"}>
                            <button className="bg-[#ea6017] rounded-md px-[20px] py-[10px] space-x-2">
                              <PiHandDepositFill className="text-20" />{" "}
                              <span>Nạp start</span>
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full flex items-center justify-center bg-[#555555] py-[25px]  text-14">
                      <span className="font-bold flex items-center space-x-1">
                        <span className="text-[#ea6017] text-18">0</span>{" "}
                        <span>Phiếu đọc</span>
                      </span>
                      <div className="w-[1px] h-[20px] mx-[20px] bg-[#584646]"></div>
                      <ul className=" flex flex-col items-center justify-center">
                        <li className="font-bold">
                          <span className="text-[#ea6017]">0</span> Phiếu thuê
                        </li>
                        <li className="text-12 ">
                          (chỉ áp dụng cho truyeenh Doraemon)
                        </li>
                      </ul>
                    </div>

                    {/* khi đã đăng nhập mới có  */}
                    <ul className="mt-0 py-[5px] px-[20px] text-[#eaeaea] font-bold ">
                      {/* khi đã đăng nhập mới có  */}
                      <Link href={"/"}>
                        <li className="py-[15px] space-x-2 flex items-center">
                          <MdHistory className="text-25 text-white font-bold" />
                          <span className="text-14">Lịch sử giao dịch</span>
                        </li>
                      </Link>
                      {/* khi đã đăng nhập mới có  */}
                      <Link href={"/data3g4g"}>
                        <li className="py-[15px] space-x-2 flex items-center">
                          <MdOutline4gPlusMobiledata className="text-25 text-white font-bold" />
                          <span className="text-14">Miễn phí data</span>
                        </li>
                      </Link>
                      <Link href={"/like"}>
                        <li className="py-[15px] space-x-2 flex items-center border-b-[1px] border-[#eaeaea]">
                          <IoCheckbox className="text-20 text-white font-bold" />
                          <span className="text-14">Yêu thích</span>
                        </li>
                      </Link>
                      <Link href={"/setting/setting"}>
                        <li className="py-[15px] space-x-2 flex items-center">
                          <MdSettingsApplications className="text-20 text-white font-bold" />
                          <span className="text-14">Cài đặt chung</span>
                        </li>
                      </Link>

                      <Link href={"/setting/feedbackform"}>
                        <li className="py-[15px] space-x-2 flex items-center">
                          <RiFeedbackFill className="text-20 text-white font-bold" />
                          <span className="text-14">Phản hồi và ứng dụng</span>
                        </li>
                      </Link>
                      <Link href={"/setting/cty"}>
                        <li className="py-[15px] space-x-2 flex items-center">
                          <FaHospitalUser className="text-20 text-white font-bold" />
                          <span className="text-14">Về chúng tôi</span>
                        </li>
                      </Link>
                      <li className="py-[15px] space-x-2 flex items-center">
                        <AiOutlineLogout className="text-20 text-white font-bold" />
                        <span className="text-14">Đăng xuất</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </li>
          {/* <li className="lg:hidden flex justify-center items-center size-[35px] rounded-sm bg-[#b2b2b2]">
            <HiMenuAlt3 className="text-28" />
          </li> */}
          <Menu />
        </ul>
      </nav>
      {showSearch && (
        <li className="lg:hidden flex mt-3 w-full justify-center ">
          <div
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            className="w-[90%] px-4 rounded-full lg:h-[45px] h-[40px]  flex justify-between items-center bg-[#363636]"
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
            <div className="absolute top-[100%] lg:right-0 lg:translate-x-0 right-1/2 translate-x-1/2 lg:w-[400px] w-[90vw] max-h-[250px] overflow-auto bg-[#242424] rounded-md p-[20px] z-50 space-y-8">
              <div className="space-y-[5px]">
                <span className="text-16 font-medium">VIDEO</span>
                <div className="w-full flex flex-wrap">
                  {animeList.map((item: any, index: number) => (
                    <span
                      key={index}
                      className="py-[10px] px-[10px] flex items-center justify-center bg-[#343434] rounded-md text-16 m-[2px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-[15px]">
                <span className="text-16 font-medium">COMICS</span>
                <div className="w-full flex flex-wrap">
                  {comicList.map((item: any, index: number) => (
                    <span
                      key={index}
                      className="py-[10px] px-[10px] flex items-center justify-center bg-[#343434] rounded-md text-16 m-[2px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </li>
      )}
    </div>
  );
}
