"use client";

import React from "react";

export default function Video() {
  return (
    <div className=" xl:p-[100px] h-auto p-[10px] bg-black lg:mt-0 mt-[80px]">
      <iframe
        className="w-full lg:h-[512px] h-auto "
        src="https://www.youtube.com/embed/c5vI5WF0sws"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
