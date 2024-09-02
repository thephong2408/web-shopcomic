"use client";
// components/PackageTable.tsx
import Button from "@/app/components/Button";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const PackageTable: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="container mx-auto  bg-[#343434] border-gray-300 rounded-md border">
      {/* thông báo */}
      {open && (
        <div className="fixed top-0 left-0 z-50 w-full bg__alert h-full flex justify-center items-center ">
          <div className=" relative w-[600px] h-[230px] bg-[#242424] flex justify-center items-center px-[100px] rounded-md overflow-hidden">
            <IoClose
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-[#ffffff] text-[30px]"
            />
            <ul className="space-y-[25px] text-[18px] flex flex-col items-center">
              <li className="text-center text-[26px] font-normal ">
                Đăng ký gói 3NCT70{" "}
              </li>
              <li className="text-center ">
                Để đăng ký sử dụng gói miễn phí 3G/4G theo ngày. Vui lòng soạn
                tin theo cú pháp:
              </li>
              <li className="text-center flex space-x-1 ">
                <span className="text-[#f28121]">3NCT70</span>{" "}
                <span className="">gửi</span>{" "}
                <span className="text-[#f28121]">999</span>
              </li>
            </ul>
          </div>
        </div>
      )}
      <table className="w-full border-separate border-spacing-0 ">
        <thead>
          <tr>
            <th className="border-b px-4 py-2  text-left font-semibold"></th>
            <th className="border-b px-4 py-2  text-left font-semibold">
              NCT70
            </th>
            <th className="border-b px-4 py-2  text-left font-semibold">
              3NCT70
            </th>
            <th className="border-b px-4 py-2  text-left font-semibold">
              6NCT70
            </th>
            <th className="border-b px-4 py-2  text-left font-semibold">
              12NCT70
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-r px-4 py-2 font-bold w-[180px]">
              Giá cước
            </td>
            <td className="border-b px-4 py-2">70.000</td>
            <td className="border-b px-4 py-2">210.000</td>
            <td className="border-b px-4 py-2">420.000</td>
            <td className="border-b px-4 py-2">840.000</td>
          </tr>
          <tr>
            <td className="border-b border-r px-4 py-2 font-bold w-[180px]">
              Data sử dụng
            </td>
            <td className="border-b px-4 py-2">1GB/ngày</td>
            <td className="border-b px-4 py-2">1GB/ngày</td>
            <td className="border-b px-4 py-2">1GB/ngày</td>
            <td className="border-b px-4 py-2">1GB/ngày</td>
          </tr>
          <tr>
            <td className="border-b border-r px-4 py-2 font-bold w-[180px]">
              Quyền lợi nội dung trong 1 chu kỳ
            </td>
            <td className="border-b px-4 py-2">
              Quyền lợi nội dung POPS: 10 sao + miễn phí 01 chương truyện tính
              phí bất kỳ trên{" "}
              <a href="https://pops.vn/" className="text-blue-600 underline">
                POPS.vn
              </a>{" "}
              trong thời hạn sử dụng gói. Miễn phí data và tắt quảng cáo khi
              truy cập dịch vụ Nền tảng âm nhạc Nhạc Của Tui. Tài khoản VIP
              NhacCuaTui.
            </td>
            <td className="border-b px-4 py-2">
              Quyền lợi nội dung POPS: 10 sao + miễn phí 01 chương truyện tính
              phí bất kỳ trên{" "}
              <a href="https://pops.vn/" className="text-blue-600 underline">
                POPS.vn
              </a>{" "}
              trong thời hạn sử dụng gói. Miễn phí data và tắt quảng cáo khi
              truy cập dịch vụ Nền tảng âm nhạc Nhạc Của Tui. Tài khoản VIP
              NhacCuaTui.
            </td>
            <td className="border-b px-4 py-2">
              Quyền lợi nội dung POPS: 10 sao + miễn phí 01 chương truyện tính
              phí bất kỳ trên{" "}
              <a href="https://pops.vn/" className="text-blue-600 underline">
                POPS.vn
              </a>{" "}
              trong thời hạn sử dụng gói. Miễn phí data và tắt quảng cáo khi
              truy cập dịch vụ Nền tảng âm nhạc Nhạc Của Tui. Tài khoản VIP
              NhacCuaTui.
            </td>
            <td className="border-b px-4 py-2">
              Quyền lợi nội dung POPS: 10 sao + miễn phí 01 chương truyện tính
              phí bất kỳ trên{" "}
              <a href="https://pops.vn/" className="text-blue-600 underline">
                POPS.vn
              </a>{" "}
              trong thời hạn sử dụng gói. Miễn phí data và tắt quảng cáo khi
              truy cập dịch vụ Nền tảng âm nhạc Nhạc Của Tui.
            </td>
          </tr>
          <tr>
            <td className="border-b border-r px-4 py-2 font-bold w-[180px]">
              Thời hạn sử dụng
            </td>
            <td className="border-b px-4 py-2">01 chu kỳ</td>
            <td className="border-b px-4 py-2">03 chu kỳ</td>
            <td className="border-b px-4 py-2">06 chu kỳ</td>
            <td className="border-b px-4 py-2">12 chu kỳ</td>
          </tr>
          <tr>
            <td className=" border-r px-4 py-2 font-bold w-[180px]">
              Cú pháp đăng kí
            </td>
            <td className=" px-4 py-2">
              <Button
                onClick={() => setOpen(true)}
                text={"Đăng ký gói NCT70"}
                className="bg__button font-medium"
              />
            </td>
            <td className=" px-4 py-2">
              <Button
                onClick={() => setOpen(true)}
                text={"Đăng ký gói 3NCT70"}
                className="bg__button font-medium"
              />
            </td>
            <td className=" px-4 py-2">
              <Button
                onClick={() => setOpen(true)}
                text={"Đăng ký gói 6NCT70"}
                className="bg__button font-medium"
              />
            </td>
            <td className=" px-4 py-2">
              <Button
                onClick={() => setOpen(true)}
                text={"Đăng ký gói 12NCT70"}
                className="bg__button font-medium"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PackageTable;
