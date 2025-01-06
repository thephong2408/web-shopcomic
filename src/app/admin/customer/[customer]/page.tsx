"use client";
import React from "react";
import Navuser from "./Navuser";
import { usePathname } from "next/navigation";
import User from "./User";
import History from "./History";
import Purchase from "./Purchase";
export default function Page() {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  // Xác định component nào sẽ được hiển thị dựa trên đường dẫn
  const renderComponent = () => {
    if (pathname === "/admin/customer/user1") return <User />;
    if (pathname === "/admin/customer/user1-history") return <History />;
    if (pathname === "/admin/customer/user1-purchase") return <Purchase />;
    return <p>Không tìm thấy trang phù hợp.</p>;
  };

  return (
    <div>
      <Navuser />
      <div className="p-5">{renderComponent()}</div>
    </div>
  );
}
