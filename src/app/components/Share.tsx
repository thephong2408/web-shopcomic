"use client";
import React from "react";
import { useState } from "react";
import { IoClose, IoShareSocial } from "react-icons/io5";
import Alert from "./Alert";

export default function Share() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:size-[60px] size-[40px] rounded-full border-[1px] border-[#fff]"
      >
        <IoShareSocial className="text-30" />
      </button>
      {open && (
        <Alert>
          <div className="w-full h-full lg:p-[30px] p-[15px]">
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
    </>
  );
}
