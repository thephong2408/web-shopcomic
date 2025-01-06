"use client";
import React from "react";
import { useState } from "react";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

export default function Pagination() {
  return (
    <div className="py-5 flex items-center justify-center">
      <ul className="flex text-20">
        <li className=" lg:size-[50px] size-[30px] flex justify-center items-center hover:border-[1px] border-[1px] border-transparent hover:border-[#fff] hover:opacity-45">
          <BsChevronDoubleLeft />
        </li>
        <li className=" lg:size-[50px] size-[30px] flex justify-center items-center hover:border-[1px] border-[1px] border-transparent hover:border-[#fff] hover:opacity-45">
          <BsChevronLeft />
        </li>
        <li className=" lg:size-[50px] size-[30px] flex justify-center items-center hover:border-[1px] border-[1px] border-transparent hover:border-[#fff] hover:opacity-45">
          1
        </li>
        <li className=" lg:size-[50px] size-[30px] flex justify-center items-center hover:border-[1px] border-[1px] border-transparent hover:border-[#fff] hover:opacity-45">
          2
        </li>
        <li className=" lg:size-[50px] size-[30px] flex justify-center items-center hover:border-[1px] border-[1px] border-transparent hover:border-[#fff] hover:opacity-45">
          3
        </li>
        <li className=" lg:size-[50px] size-[30px] flex justify-center items-center hover:border-[1px] border-[1px] border-transparent hover:border-[#fff] hover:opacity-45">
          4
        </li>
        <li className=" lg:size-[50px] size-[30px] flex justify-center items-center hover:border-[1px] border-[1px] border-transparent hover:border-[#fff] hover:opacity-45">
          5
        </li>
        <li className=" lg:size-[50px] size-[30px] flex justify-center items-center hover:border-[1px] border-[1px] border-transparent hover:border-[#fff] hover:opacity-45">
          ...
        </li>
        <li className=" lg:size-[50px] size-[30px] flex justify-center items-center hover:border-[1px] border-[1px] border-transparent hover:border-[#fff] hover:opacity-45">
          <BsChevronRight />
        </li>
        <li className=" lg:size-[50px] size-[30px] flex justify-center items-center hover:border-[1px] border-[1px] border-transparent hover:border-[#fff] hover:opacity-45">
          <BsChevronDoubleRight />
        </li>
      </ul>
    </div>
  );
}
