"use client";
import React from "react";
import Button from "@/app/components/Button";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { BsEyeglasses } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { ImBook } from "react-icons/im";
import Chapter from "./ListChapter";
import ListChap from "./ListChapter";
import { FaCheck } from "react-icons/fa6";
import ListComment from "./ListComment";
import Layout1 from "@/app/layout/Layout1";
import { useRouter } from "next/navigation";

export default function Card() {
  const [text, setText] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const router = useRouter();
  const handleClick = () => {
    setText(!text);
  };
  const handleRouter = () => {
    router.push("/chapter"); // Đặt đường dẫn bạn muốn điều hướng tới
  };

  return (
    <Layout1>
      <div className="min-h-[100vh] text-white flex flex-col mt-[80px] bg-[#141414]">
        {/* Sử dụng pseudo-element để làm mờ ảnh nền */}
        <div className="md:w-full  ">
          <div className="w-full xl:px-[100px] px-[10px] xl:h-[620px] relative xl:flex xl:justify-between xl:space-y-0 space-y-5 ">
            {/* nền ảnh */}
            <div className="w-full z-0 absolute left-0 top-0 h-[620px] filter opacity-55 blur-xl ">
              <img
                src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/640x960-c270acfe693e-1710298245456-JmEm93uZ.jpg?v=0&maxW=420&format=webp"
                alt=""
                className="h-[100%]"
              />
            </div>
            {/* ảnh truyện */}
            <div className="flex justify-center ">
              <div className="lg:w-[315px] w-[50%] lg:max-h-[480px] z-10 rounded-md overflow-hidden shadow-lg">
                <img
                  src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/640x960-c270acfe693e-1710298245456-JmEm93uZ.jpg?v=0&maxW=420&format=webp"
                  alt=""
                  className="h-[100%]"
                />
              </div>
            </div>
            {/* Thông tin truyên */}
            <div className="flex-1  lg:ml-[50px] text-white z-10 relative top-[-10px]  ">
              <nav className="w-full  flex flex-col space-y-[30px]">
                <ul className="text-36 font-bold ">
                  Bệ Hạ Kiếp Này Ta Sẽ Hết Lòng Chăm Sóc Người
                </ul>
                <ul className="flex justify-between lg:justify-start lg:space-x-[15px] lg:text-[20px] text-[14px]">
                  <span className="flex items-center space-x-[2px]">
                    <BsEyeglasses className="text-25 mr-2" />
                    <span className="text-[#f47213]">14.67K</span>{" "}
                    <span className="">Lượt xem</span>
                  </span>
                  <span className="flex space-x-[2px] items-center">
                    <BiSolidLike className="text-25 mr-2" />
                    <span className="text-[#f47213]"> 108</span>{" "}
                    <span>Thích</span>
                  </span>
                  <span className="flex space-x-[2px] items-center">
                    <ImBook className="text-25 mr-2" />
                    <span className="text-[#f47213]"> 77</span>{" "}
                    <span>chương</span>
                  </span>
                </ul>
                <ul className="space-x-[15px] flex">
                  <Button
                    onClick={handleRouter}
                    text={"ĐỌC NGAY"}
                    className={" bg__button"}
                  />
                  <Button
                    onClick={handleRouter}
                    text={"CHƯƠNG MỚI NHẤT"}
                    className={
                      "text-[#f47213] bg-transparent border-[2px] border-[#f47213]"
                    }
                  />
                  <Button
                    onClick={() => setLike(!like)}
                    text={`${!like ? "YÊU THÍCH" : "ĐÃ LƯU"}`}
                    icon={like ? <FaCheck /> : <IoIosAdd />}
                    iconClassName="text-25"
                    className="text-black bg-white hover:text-[#f47213] "
                  />
                </ul>
                <ul className="space-y-[10px] font-medium">
                  <li className="text-[#ccc]">
                    Tác Giả : <span className="text-white">Phong</span>
                  </li>
                  <li className="text-[#ccc]">
                    Hoạ sĩ : <span className="text-white">Phong</span>
                  </li>
                  <li className="text-[#ccc]">
                    Thể loại : <span className="text-[#f47213]">Phong</span>
                  </li>
                  <li className="text-[#ccc]">
                    Xếp hạng : <span className="text-white">13+</span>
                  </li>
                  <li className="text-[#ccc]">
                    Nội dung bởi : <span className="text-[#f47213]">Phong</span>
                  </li>
                  <li className="text-[#ccc] break-words ">
                    <h3>MÔ TẢ :</h3>
                    <span
                      className={`text-white text-20 ${
                        text ? "truncate-lines-3" : ""
                      }`}
                    >
                      Một công ty tưởng bình thường nhưng vô cùng bất thường,
                      với nhân viên là những người đi làm vì đam mê chứ nhà là
                      tỷ phú, là con ông cháu cha được nhận vì tài năng gây war,
                      là một gián điệp kinh tế nhưng lại hay giúp kẻ địch phát
                      tài.....Hãy đến với Kiếp Văn Phòng và 7749 tình huống xử
                      lý đi vào lòng đất khi đối diện với khách hàng.
                    </span>
                  </li>
                </ul>
              </nav>
              <span
                onClick={() => setText(!text)}
                className="text-[#ccc] text-20  border-b-2 cursor-pointer"
              >
                {text ? "xem thêm" : "Thu gọn"}
              </span>
            </div>
          </div>
        </div>
        {/* bình luận và chương */}
        <div className="h-[60px] text-20 bg-[#232323] z-10 flex justify-center items-center ">
          <span
            onClick={() => setShow(!show)}
            className={`h-full px-10 border-2 border-transparent  flex items-center cursor-pointer ${
              show ? "border-transparent" : "border-b-[#f47213] text-[#f47213]"
            }`}
          >
            Chương
          </span>
          <span
            onClick={() => setShow(!show)}
            className={`h-full px-10 border-2 border-transparent flex items-center cursor-pointer ${
              !show ? "border-transparent" : "border-b-[#f47213] text-[#f47213]"
            } `}
          >
            Bình Luận (5)
          </span>
        </div>
        <div className="flex justify-center">
          {!show ? <ListChap /> : <ListComment />}
        </div>
      </div>
    </Layout1>
  );
}
