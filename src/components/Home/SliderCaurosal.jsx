"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/banner.png",
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner1.png",
];

const SliderCaurosal = () => {
  return (
    <div className="relative overflow-hidden w-full bg-[#C71D52] py-4">
      <motion.div
        className="whitespace-nowrap flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {[...images, ...images].map((src, index) => (
          <motion.div
            key={index}
            className="inline-block min-w-[200px] h-[120px] relative"
            // animate={{
            //   rotate: [0, 5, -5, 0], // slight rotation effect
            // }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 0.1, // stagger rotation slightly
            }}
          >
            <Image
              src={src}
              alt={`slide-${index}`}
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderCaurosal;
