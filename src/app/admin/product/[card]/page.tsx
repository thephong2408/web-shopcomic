"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Nav from "./Nav";
import AddChapter from "./AddChapter";
import UpdateChapterInfo from "./UpdateChapterInfo";
import UpdateStoryInfo from "./UpdateStoryInfo";
import Chapter from "./Chapter";

export default function Card() {
  const pathname = usePathname(); // Lấy URL hiện tại
  const lastSegment = pathname.split("/").pop(); // Lấy đoạn cuối cùng của URL

  const renderComponent = () => {
    switch (lastSegment) {
      case "add-chapter":
        return <AddChapter />;
      case "manage-chapters":
        return <UpdateChapterInfo />;
      case "edit-story":
        return <UpdateStoryInfo />;
      default:
        return <Chapter />;
    }
  };

  return (
    <div className="">
      <Nav />
      <div className="mt-4">{renderComponent()}</div>
    </div>
  );
}
