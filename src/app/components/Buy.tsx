import Link from "next/link";
import Button from "./Button";
import Alert from "./Alert";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Buy() {
  const [open1, setOpen1] = useState<boolean>(false);
  return (
    <>
      {" "}
      <Button
        onClick={() => setOpen1(true)}
        text="Mua ngay"
        showPrice={true}
        showIcon={true}
        price="300"
        price1="255"
        className="bg__button font-bold 5px]"
      />
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
                    <span className="text-25">CHƯƠNG 8-17 | HOÀNG TỬ BARI</span>
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
                  <Button text="NẠP STARS NGAY" className="w-full bg__button" />
                </Link>
              </li>
            </ul>
          </div>
        </Alert>
      )}
    </>
  );
}
