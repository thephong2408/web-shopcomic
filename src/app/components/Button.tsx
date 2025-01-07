"use client";

import Image from "next/image";
import React from "react";

interface ButtonProps {
  text: string; // Nội dung của nút
  price?: string;
  price1?: string;
  showPrice?: boolean;
  showIcon?: boolean;
  onClick?: () => void; // Hàm xử lý sự kiện khi bấm nút (tùy chọn)
  className?: string; // Các lớp CSS tùy chỉnh (tùy chọn)
  icon?: React.ReactNode; // Icon cho nút (tùy chọn)
  iconClassName?: string; // Các lớp CSS tùy chỉnh cho icon (tùy chọn)
}

const Button: React.FC<ButtonProps> = ({
  text,
  price = "",
  price1 = "",
  showPrice = false,
  onClick,
  className = "",
  icon,
  showIcon = false,
  iconClassName = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center lg:px-[32px] px-[20px] lg:py-[15px] py-[10px] lg:h-[65px] h-auto text-20 rounded-md space-x-6 ${className}`}
      {...props}
    >
      <span className="flex items-center justify-center  ">
        {icon && <span className={iconClassName}>{icon}</span>}
        {/* Thêm class tùy chỉnh cho icon */}
        <span className="flex ">{text}</span>
      </span>
      {showPrice && (
        <span className="flex items-center space-x-1">
          <div className="size-[30px] ">
            <img
              src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
              alt=""
            />
          </div>
          <span className="text-22 text-[#ffdc0a]">{price}</span>
          <span className="text-18 text-[#fbac9b] relative">
            {price1}
            <div className="absolute w-full h-[1px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fdd4c7]"></div>
          </span>
        </span>
      )}
      {showIcon && (
        <div className="absolute bottom-[0] lg:right-[-30px] right-[-27px]  transform  lg:w-[60px] w-[45px]">
          <img
            src="https://cdn.popsww.com/popsapp/assets/images/icons/icon-hot-sale.png"
            alt=""
          />
          <span className="absolute top-7 left-2 text-18 text-[#fff]">
            -15%
          </span>
        </div>
      )}
    </button>
  );
};

export default Button;
