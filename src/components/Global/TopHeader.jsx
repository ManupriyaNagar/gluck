import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";

const TopHeader = () => {
  return (
    <section className="fixed top-0 left-0 w-full z-50 flex">
    <div className="app-container bg-[#C71D52] w-full text-white px-6 py-2 flex justify-end items-center gap-4">
    <div className="flex items-center gap-2">
  <a href="tel:+919931644865" className="flex items-center gap-2 hover:underline">
    <FiPhone className="text-lg" />
    <span>+91 99316 44865</span>
  </a>
</div>

<div className="border-l h-4 border-white mx-2" />

<div className="flex items-center gap-2">
  <a href="mailto:care@gluckscare.com" className="flex items-center gap-2 hover:underline">
    <FiMail className="text-lg" />
    <span>care@gluckscare.com</span>
  </a>
</div>
</div>
    </section>
  );
};

export default TopHeader;