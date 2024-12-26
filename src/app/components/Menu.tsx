"use client";
import React from "react";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="lg:hidden flex justify-center items-center size-[35px] rounded-sm bg-[#b2b2b2]">
      <span onClick={() => setIsOpen(!isOpen)}>
        <HiMenuAlt3 className="text-28" />
      </span>
      {isOpen && (
        <div className="  h-[100vh] w-[100%] fixed flex flex-col p-5 space-y-5 text-[14px] top-0 right-0 z- bg-black/85">
          <span className="font-semibold">
            <Link href={"/"}>Gói truyện</Link>
          </span>
          <span className="font-semibold">
            <Link href={"/comics"}>Comics</Link>
          </span>
          <span className="font-semibold">
            <Link href={"/"}>Shop</Link>
          </span>
          <span className="font-semibold">
            <Link href={"/music"}>Music</Link>
          </span>
          <span className="font-semibold">
            <Link href={"donate"}>Donate</Link>
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-0 right-3 text-[20px]"
          >
            <GrClose />
          </button>
        </div>
      )}
    </li>
  );
}
