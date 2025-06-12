"use client"
import React, { useEffect, useState } from 'react';

const Banner1 = () => {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll to adjust icon position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

 <h1 className='absolute mb-40 text-6xl text-center font-bold uppercase -mt-2'>Beyond Medicine. A Mission Of Wellness</h1>
   
  
    <div className="relative">
        {/* <h1>dfghjkl</h1> */}
      {/* Component that appears above the banner on scroll */}
     

      {/* Banner Component */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex flex-col items-center justify-end"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        {/* Text at the bottom */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">CURE & BEYOND</h1>

        {/* Scroll Icon */}
        <div
          className="absolute bottom-16 transform transition-transform duration-300"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        >
          <button className="bg-white bg-opacity-50 rounded-full p-3 hover:bg-opacity-75">
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Banner1;