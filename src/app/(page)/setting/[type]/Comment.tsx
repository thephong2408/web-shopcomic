// components/FeedbackForm.tsx

import { useState } from "react";
import { HiMiniInboxArrowDown } from "react-icons/hi2";

type FeedbackType = "suggestion" | "complaint" | "question";

interface FeedbackFormValues {
  email: string;
  feedbackType: FeedbackType;
  name: string;
  phone: string;
  comment: string;
  file?: FileList;
}

const FeedbackForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FeedbackFormValues>({
    email: "",
    feedbackType: "suggestion",
    name: "",
    phone: "",
    comment: "",
    file: undefined,
  });

  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, files } = event.target as HTMLInputElement &
      HTMLSelectElement &
      HTMLTextAreaElement;

    if (type === "file" && files) {
      // Giới hạn số lượng file tải lên là 3
      const newFiles = Array.from(files).slice(0, 3);
      const newFileURLs = newFiles.map((file) => URL.createObjectURL(file));

      setPreviewImages((prevImages) => [
        ...prevImages.slice(0, 3 - newFiles.length), // Giới hạn số lượng ảnh hiện tại là 3
        ...newFileURLs,
      ]);

      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: files,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý gửi dữ liệu form ở đây
    console.log("Form submitted", formValues);
  };

  return (
    <div className="container space-y-[25px] flex flex-col text-[16px]">
      <span className="text-[28px] font-medium">Phản hồi về ứng dụng</span>
      <span>Bạn vừa gặp phải vấn đề nào? Hãy nói cho chúng tớ biết nhé.</span>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="form-group flex flex-col">
          <label className="text-[18px] font-medium mb-2" htmlFor="email">
            Email:
          </label>
          <div className="w-full rounded-md h-[45px] bg-[#343434] px-[50px] flex items-center">
            <input
              type="text"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder=" Hãy nhập email của bạn "
              className="w-full bg-transparent "
            />
          </div>
        </div>
        <div className="form-group flex flex-col">
          <label
            className="text-[18px] font-medium mb-2"
            htmlFor="feedbackType"
          >
            Chọn mục phản hồi:
          </label>
          <select
            id="feedbackType"
            name="feedbackType"
            value={formValues.feedbackType}
            onChange={handleChange}
            className="w-full rounded-md h-[45px] bg-[#343434] px-[50px] flex items-center text-white"
          >
            <option value="suggestion">Vui lòng chọn mục phản hồi</option>
            <option value="complaint">Khiếu nại</option>
            <option value="question">Câu hỏi</option>
          </select>
        </div>
        <div className="form-group flex flex-col">
          <label className="text-[18px] font-medium mb-2" htmlFor="name">
            Tên của bạn:
          </label>
          <div className="w-full rounded-md h-[45px] bg-[#343434] px-[50px] flex items-center">
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder=" Hãy nhập tên của bạn "
              className="w-full bg-transparent "
            />
          </div>
        </div>
        <div className="form-group flex flex-col">
          <label className="text-[18px] font-medium mb-2" htmlFor="phone">
            Số điện thoại:
          </label>
          <div className="w-full rounded-md h-[45px] bg-[#343434] px-[50px] flex items-center">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              placeholder=" Hãy nhập số điện thoại của bạn "
              className="w-full bg-transparent "
            />
          </div>
        </div>
        <div className="form-group flex flex-col">
          <label className="text-[18px] font-medium mb-2" htmlFor="comment">
            Nhận xét:
          </label>
          <div className="w-full bg-[#343434] rounded-md overflow-y-auto h-[155px] p-[15px]">
            <textarea
              id="comment"
              name="comment"
              value={formValues.comment}
              onChange={handleChange}
              rows={4}
              placeholder=" Hãy nhập nhận xét của bạn "
              className="w-full h-full bg-transparent "
            ></textarea>
          </div>
        </div>
        {/* ảnh */}
        <div className="form-group flex flex-col">
          <label className="text-[18px] font-medium mb-2" htmlFor="file">
            Hình chụp đính kèm (bắt buộc)
          </label>
          <span className="text-[14px] mb-[1px] text-[#71716f]">
            Tối đa 3 hình
          </span>
          {/* lấy file ảnh */}
          <div className="space-x-5 w-full flex">
            {previewImages.map((image, index) => (
              <div
                key={index}
                className="relative size-[150px] rounded-md overflow-hidden bg-[#343434] flex items-center justify-center border-[1px] border-[#ff5622] border-dashed"
              >
                <img
                  src={image}
                  alt={`Preview ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {previewImages.length < 3 && (
              <div className="relative size-[150px] rounded-md bg-[#343434] flex items-center justify-center border-[1px] border-[#ff5622] border-dashed">
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleChange}
                  accept="image/*"
                  className="h-full w-full opacity-0 z-20"
                  multiple
                />
                <span className="absolute flex justify-center items-center w-full text-[#ff5622]">
                  <span className="flex items-center space-x-2">
                    <HiMiniInboxArrowDown />
                    <span>Add Img</span>
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
        {/* Submit Button */}
        <div className="pt-8">
          <button
            className="w-[400px] h-[55px] bg-[#ff5622] text-[20px] font-medium rounded-md text-white"
            type="submit"
          >
            Gửi
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
