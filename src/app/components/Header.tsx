"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiBarChart } from "react-icons/fi";
import { IoCheckbox } from "react-icons/io5";
import { MdOutline4gPlusMobiledata } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { RiFeedbackFill } from "react-icons/ri";
import { FaHospitalUser } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
      // Check if the page has been scrolled down more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActiveLink = (href: string) => {
    return pathname === href;
  };
  return (
    <div
      className={`flex z-50 w-full items-center text-[20px] font-[400] h-[78px] text-white px-[100px] fixed top-0 left-0 transition-all duration-300 ${
        isScrolled ? "bg-header" : "bg-transparent"
      }`}
    >
      <ul className="w-full h-full flex items-center  justify-between ">
        <li>
          <div className="w-[120px] ">
            <img
              src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
              alt=""
            />
          </div>
        </li>
        <Link href={"/"}>
          <li
            className={`h-full flex items-center  ${
              isActiveLink("/") ? "text-[#d16428] font-bold" : ""
            } `}
          >
            Gói truyện
          </li>
        </Link>
        <Link href={"/comics"}>
          <li
            className={`h-full flex items-center  ${
              isActiveLink("/comics") ? "text-[#d16428] font-bold" : ""
            } `}
          >
            Comics
          </li>
        </Link>
        <li className="h-full flex items-center  ">Shop</li>
        <li className="h-full flex items-center  ">Music</li>
        <li className="h-full flex items-center  ">Donate</li>
        <li className="h-full flex items-center  ">Thêm</li>
        <li className=" relative ">
          <div
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            className="w-[235px] px-4 rounded-full h-[45px] flex justify-between items-center bg-[#363636]"
          >
            <input
              className="w-[165px] bg-transparent text-[18px]  border-none outline-none"
              type="text"
              placeholder="Tiếm truyện, anime, musics, comics"
            />

            <Link href={"/listsearch"}>
              <FaSearch />
            </Link>
          </div>
          {isInputFocused && (
            <div className="absolute top-[120%] right-0 w-[400px] bg-[#242424] rounded-md p-[20px] z-50 space-y-8">
              <div className="space-y-[5px]">
                <span className="text-[16px] font-medium">VIDEO</span>
                <div className="w-full flex flex-wrap">
                  {animeList.map((item: any, index: number) => (
                    <span
                      key={index}
                      className="py-[10px] px-[10px] flex items-center justify-center bg-[#343434] rounded-md text-[16px] m-[2px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-[15px]">
                <span className="text-[16px] font-medium">COMICS</span>
                <div className="w-full flex flex-wrap">
                  {comicList.map((item: any, index: number) => (
                    <span
                      key={index}
                      className="py-[10px] px-[10px] flex items-center justify-center bg-[#343434] rounded-md text-[16px] m-[2px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </li>
        <li className="flex space-x-2 ">
          <Link href={"/login"}>
            <button className="text-[14px] w-[110px] h-[40px] border-[2px] border-[#ea6017] text-[#ea6017] font-bold rounded-full">
              ĐĂNG NHẬP
            </button>
          </Link>

          <Link href={"/register"}>
            <button className="text-[14px] w-[110px] h-[40px] border-transparent text-white bg-[#ea6017] font-bold rounded-full">
              ĐĂNG KÝ
            </button>
          </Link>
        </li>
        <li>
          <div
            onMouseEnter={() => setShowUser(true)}
            onMouseLeave={() => setShowUser(false)}
            className="rounded-full size-[50px] bg-[#ea6017] flex justify-center items-center relative"
          >
            <Link href={"/setting/setting"}>
              <FaUserGraduate className="size-[30px]" />
            </Link>
            {showUser && (
              <div className="absolute w-[410px] right-0 top-[100%]  pt-2">
                <div className=" py-[10px] px-[20px] bg-[#242424] rounded-md text-[16px]">
                  <div
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
                    <ul className="space-y-[3px] font-medium text-[14px]">
                      <li className="text-[14px] font-bold">Đăng Kí Ngay</li>
                      <li>để nhận phần quà và ưu đãi hấp dẫn</li>
                      <li> thành viên</li>
                    </ul>
                  </div>
                  <ul className="mt-5 text-[#eaeaea] font-bold ">
                    <Link href={"/data3g4g"}>
                      <li className="py-[15px] space-x-2 flex items-center">
                        <MdOutline4gPlusMobiledata className="text-[25px] text-white font-bold" />
                        <span className="text-[14px]">Miễn phí data</span>
                      </li>
                    </Link>
                    <Link href={"/like"}>
                      <li className="py-[15px] space-x-2 flex items-center border-b-[1px] border-[#eaeaea]">
                        <IoCheckbox className="text-[20px] text-white font-bold" />
                        <span className="text-[14px]">Yêu thích</span>
                      </li>
                    </Link>
                    <Link href={"/setting/setting"}>
                      <li className="py-[15px] space-x-2 flex items-center">
                        <MdSettingsApplications className="text-[20px] text-white font-bold" />
                        <span className="text-[14px]">Cài đặt chung</span>
                      </li>
                    </Link>

                    <Link href={"/setting/feedbackform"}>
                      <li className="py-[15px] space-x-2 flex items-center">
                        <RiFeedbackFill className="text-[20px] text-white font-bold" />
                        <span className="text-[14px]">
                          Phản hồi và ứng dụng
                        </span>
                      </li>
                    </Link>
                    <Link href={"/setting/cty"}>
                      <li className="py-[15px] space-x-2 flex items-center">
                        <FaHospitalUser className="text-[20px] text-white font-bold" />
                        <span className="text-[14px]">Về chúng tôi</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}
