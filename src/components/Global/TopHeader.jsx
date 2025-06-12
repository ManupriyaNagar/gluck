import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";

const TopHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#C71D52] text-white py-2 px-12 flex justify-end items-center text-sm mx-auto">
      <a
        href="tel:+919931644865"
        className="flex items-center ml-4 text-lg hover:underline"
      >
        <FiPhone className="mr-2" /> +91 99316 44865
      </a>
      <span className="h-6 border-l border-gray-200 mx-4"></span>
      <a
        href="mailto:care@gluckcare.com"
        className="flex items-center ml-6 text-lg mr-14 hover:underline"
      >
        <FiMail className="mr-2" /> care@gluckscare.com
      </a>
    </div>
  );
};

export default TopHeader;