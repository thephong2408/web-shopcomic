"use client";
import React from "react";
import { ReactNode } from "react";

interface InputProps {
  children: ReactNode;
}

export default function Input({ children }: InputProps) {
  return (
    <div className="w-full h-[45px] px-[20px] flex justify-center border-[1px] border-[#f0f0f0]  rounded-full">
      {children}
    </div>
  );
}
