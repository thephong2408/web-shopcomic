import React, { useState } from "react";

interface ImgAlert {
  img?: string;
}

export default function AlertImgErorr({
  img = "https://i.pinimg.com/736x/e9/96/f9/e996f95565118c1350eec1e9dcbdad1f.jpg",
}: ImgAlert) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div onClick={() => setIsVisible(true)} className="w-[100px] h-[100px]">
        <img src={`${img}`} alt="" />
      </div>
      {/* Alert Container */}
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/75 flex justify-center items-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 py-2 px-4 text-white bg-red-600 rounded font-bold hover:bg-red-700"
            onClick={() => setIsVisible(false)}
          >
            x
          </button>

          {/* Image Container */}
          <div className="w-[400px] h-auto flex justify-center items-center bg-white rounded shadow-lg ">
            <img
              src={img}
              alt="Error Alert"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
