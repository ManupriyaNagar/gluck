// components/IndiaPresenceMap.tsx
"use client";
import React from "react";
import Image from "next/image";

const locations = [
  {
    name: "Noida Sector 18",
    style: "top-[33%] left-[39%]",
  },
//   {
//     name: "Noida Extension (Golden-I)",
//     style: "top-[57%] left-[63%]",
//   },
];

export default function IndiaPresenceMap() {
  return (
    <section className="relative bg-black w-screen">
    <div className="relative w-full max-w-3xl mx-auto ">
      <Image
        src="/in.svg"
        alt="India Map"
        width={800}
        height={800}
        className="w-full h-auto"
      />
      {locations.map((loc, i) => (
        <div
          key={i}
          className={`absolute ${loc.style} transform -translate-x-1/2 -translate-y-1/2`}
        >
          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping top-0"></div>
          <div className="w-3 h-3 bg-yellow-600 rounded-full absolute top-0 left-0"></div>
        </div>
      ))}
    </div>
    </section>
  );
}
