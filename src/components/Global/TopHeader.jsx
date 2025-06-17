import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";

const TopHeader = () => {
  return (
    <section className="fixed top-0 left-0 w-full z-50">
      <div className="app-container bg-[#C71D52] w-full text-white px-4 py-2 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-end gap-2 md:gap-4 text-md">
        
        <div className="flex items-center gap-2">
          <a href="tel:+919931644865" className="flex items-center gap-2 hover:underline">
            <FiPhone className="text-lg" />
            <span>+91 99316 44865</span>
          </a>
        </div>

        {/* Divider for desktop only */}
        <div className="hidden md:block border-l h-4 border-white mx-2" />

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
