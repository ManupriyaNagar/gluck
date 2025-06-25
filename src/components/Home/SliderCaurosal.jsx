"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "products/1.png",
  "products/2.png",
  "products/3.png",
  "products/4.png",
  "products/5.png",
  "products/6.png",
  "products/7.png",
  "products/8.png",
  "products/21.png",
  "products/9.png",
  "products/10.png",
  "products/11.png",
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
              className="transition-transform duration-300 hover:scale-105 border-4 p-4 border-[#eca404] bg-white"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderCaurosal;
