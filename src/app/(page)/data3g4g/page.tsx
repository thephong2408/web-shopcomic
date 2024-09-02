import React from "react";
import Layout1 from "@/app/layout/Layout1";
import PackageTable from "./Table";

export default function Data3g() {
  return (
    <Layout1>
      <div className="space-y-[30px] px-[100px] py-[100px]">
        <span className="text-[28px] font-medium">Thông tin ứng dụng</span>
        <div className="w-[300px]">
          <img
            src="https://cdn.popsww.com/popsapp/assets/images/mobifone.png?format=webp"
            alt=""
          />
        </div>
        <ul className="font-normal text-[18px]">
          <li>
            (*) Nếu bạn chưa xác minh số điện thoại hoặc chưa có tài khoản trên
            POPS, vui lòng làm theo hướng dẫn sử dụng bên dưới để đăng ký gói
            cước thành công.
          </li>
          <li>
            (**) Sau 12h kể từ khi đăng ký thành công, bạn có thể xem lại thông
            tin gói cước đã đăng ký trong phần Tài khoản.
          </li>
          <li>(***) 1 chu kỳ tương đương 30 ngày.</li>
        </ul>
        <h1 className="text-[35px] font-medium">Miễn phí dung lượng 3G/4G</h1>

        {/* các bảng */}
        {/* <!-- HTML + Tailwind CSS --> */}

        <PackageTable />
      </div>
    </Layout1>
  );
}
