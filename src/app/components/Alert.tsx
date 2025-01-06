"use client";
import React from "react";
// components/PackageTable.tsx
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Alert({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      {open && (
        <div className="fixed top-0 left-0 p-0 mb-0 bg__alert w-full h-full flex justify-center items-center z-50 ">
          <div className=" relative  bg-[#343434] flex justify-center items-center lg:w-[600px] w-[80%] rounded-md overflow-hidden">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
