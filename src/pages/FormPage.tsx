import React, { useState } from "react";
// import PdfReportDocument from "../pdf/PdfReportDocument";
import PdfReportDocument from "../pdf/PdfReportDocument";
import { PDFViewer, pdf } from "@react-pdf/renderer";
import saveAs from "file-saver";

interface FormData {
  destination: string;
  contactPerson: string;
  sender: string;
  department: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  customerName: string;
  imgSrc: string;
}

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    destination: " ",
    contactPerson: " ",
    sender: " ",
    department: " ",
    name: " ",
    phone: " ",
    email: " ",
    address: " ",
    customerName: " ",
    imgSrc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "imgSrc") {
      const file = e.target.files?.[0];
      if (file) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: URL.createObjectURL(file),
        }));
      }
      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDownload = async () => {
    const blob = await pdf(<PdfReportDocument form={formData} />).toBlob();
    saveAs(blob, "document.pdf");
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-2">
      <div>
        <div>
          <p className="font-semibold text-xl mb-3">送信先</p>
          <div className="mb-5 grid grid-cols-5 gap-4">
            <label
              htmlFor="destination"
              className="self-center justify-self-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              会社名
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="会社名"
              value={formData.destination}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5 grid grid-cols-5 gap-4">
            <label
              htmlFor="contactPerson"
              className="self-center justify-self-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              担当者名
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl mb-3">発信者</p>
          <div className="mb-5 grid grid-cols-5 gap-4">
            <label
              htmlFor="sender"
              className="self-center justify-self-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              会社名
            </label>
            <input
              type="text"
              id="sender"
              name="sender"
              value={formData.sender}
              onChange={handleChange}
              className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div className="mb-5 grid grid-cols-5 gap-4">
            <label
              htmlFor="department"
              className="self-center justify-self-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              部署名
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div className="mb-5 grid grid-cols-5 gap-4">
            <label
              htmlFor="name"
              className="self-center justify-self-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              氏名
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div className="mb-5 grid grid-cols-5 gap-4">
            <label
              htmlFor="phone"
              className="self-center justify-self-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              電話番号
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div className="mb-5 grid grid-cols-5 gap-4">
            <label
              htmlFor="email"
              className="self-center justify-self-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              メールアドレス
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl mb-3">顧客名</p>
          <div className="mb-5 grid grid-cols-5 gap-4">
            <label
              htmlFor="address"
              className="self-center justify-self-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              住所
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div className="mb-5 grid grid-cols-5 gap-4">
            <label
              htmlFor="customerName"
              className="self-center justify-self-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              氏名
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl mb-3">内容</p>
          <div className="mb-5 grid grid-cols-5 gap-4">
            <label
              htmlFor="imgSrc"
              className="self-center justify-self-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              画像
            </label>
            <input
              type="file"
              id="imgSrc"
              name="imgSrc"
              onChange={handleChange}
              className="col-span-4 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={handleDownload}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            ダウンロード
          </button>
        </div>
      </div>
      <div>
        <PDFViewer width="100%" height="100%">
          <PdfReportDocument form={formData} />
        </PDFViewer>
      </div>
    </div>
  );
};

export default FormPage;
