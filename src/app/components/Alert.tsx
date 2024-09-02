"use client";
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
        <div className="fixed top-0 left-0 w-full bg__alert h-full flex justify-center items-center z-50 ">
          <div className=" relative  bg-[#343434] flex justify-center items-center min-w-[600px] rounded-md overflow-hidden">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
