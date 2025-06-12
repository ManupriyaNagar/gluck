"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown, MdArrowBack, MdArrowForward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const bannerImages = ["/banner.png", "/banner1.png", "/banner2.png", "/banner3.png"];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % bannerImages.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main Banner Slider */}
      {/* <div className="sticky w-full h-screen overflow-hidden"> */}
      <div className="w-full h-[100vh] overflow-hidden sticky top-0 bg-gradient-to-t from-[#C71D52] to-[#d190a5]">
        <AnimatePresence mode="wait">
        <motion.img
            key={bannerImages[current]}
            src={bannerImages[current]}
            alt={`Banner ${current + 1}`}
            className="absolute top-0 left-0 w-full h-screen object-cover mt-28"
            style={{ minHeight: "80vh", zIndex: 0 }}
            initial={{ opacity: 1, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
        {/* <div className="absolute bottom-0 left-0 w-full h-[40vh] pointer-events-none z-10 bg-gradient-to-t from-[#C71D52]  to-transparent opacity-90"></div> */}

        {/* Manual Nav Arrows */}
       

      </div>
      <div className="">

      {/* Dot + Arrow Overlay */}
      <div className="flex flex-col items-center justify-center absolute top-5/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative h-18 w-[3rem] rounded-full border-2 border-white flex items-center justify-center bg-transparent">
          <div className="h-2 w-2 mt-5 rounded-full bg-white dropAnimation"></div>
        </div>
        <div className="relative mt-4 w-[3.5rem] text-white">
          <MdOutlineKeyboardDoubleArrowDown className="dropAnimationn w-14 h-10 scale-x-110" />
        </div>
      </div>

      {/* Text Heading Overlay */}
      <div className="absolute bottom-4 w-full text-center z-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Beyond Medicine. A Mission Of Wellness
        </h1>
      </div>
      </div>
      {/* </div> */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] pointer-events-none z-10 bg-gradient-to-t from-[#C71D52]  to-transparent opacity-90"></div>
    </>
  );
};

export default Banner;
