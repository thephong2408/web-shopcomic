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
      className={`relative flex items-center px-[32px] py-[15px] h-[65px] text-[20px] rounded-md space-x-6 ${className}`}
      {...props}
    >
      {/* Thêm class tùy chỉnh cho icon */}
      <span>{text}</span>
      {showPrice && (
        <span className="flex items-center">
          <div className="size-[30px]">
            <img
              src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
              alt=""
            />
          </div>
          <span className="text-[22px] text-[#ffdc0a]">{price}</span>
          <span className="text-[18px] text-[#fbac9b] relative">
            {price1}
            <div className="absolute w-full h-[1px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fdd4c7]"></div>
          </span>
        </span>
      )}
      {showIcon && (
        <div className="absolute bottom-[0] right-[-30px] transform  w-[60px]">
          <img
            src="https://cdn.popsww.com/popsapp/assets/images/icons/icon-hot-sale.png"
            alt=""
          />
          <span className="absolute top-7 left-2 text-[18px] text-[#fff]">
            -15%
          </span>
        </div>
      )}
    </button>
  );
};

export default Button;
