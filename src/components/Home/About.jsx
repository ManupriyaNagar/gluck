"use client";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

const About = () => {
  return (
    <section
      className="relative w-full py-8 md:py-20 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/home.png')",
      }}
    > 
      {/* Optional Overlay for readability */}
      <div className="absolute inset-0 z-0"></div>
      <div className="flex-1 max-w-3xl z-10 ml-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#C71D52] mb-4 leading-tight">
          Welcome to GlucksCare Pharmaceuticals
        </h1>

        <p className="text-gray-700 text-lg mb-6 text-justify">
          <span className="font-bold font-inter">Gluckscare Pharmaceuticals</span> is a trusted name in healthcare, dedicated to delivering high-quality, science-backed medicines and wellness solutions. Headquartered in Noida, India, we are driven by a mission to make effective healthcare accessible, affordable, and reliable for all.
        </p>

        <p className="text-gray-700 text-lg mb-6 text-justify">
          With a growing portfolio that spans key therapeutic areas from general health and chronic care to specialized formulations we combine research, innovation, and global manufacturing standards to create products that truly make a difference.
        </p>

        <p className="text-gray-700 text-lg mb-6 text-justify">
          At Gluckscare, we believe that <span className="font-bold">healthcare should be more than a cure – it should be care</span>. Our team of passionate professionals works relentlessly to bring life-changing solutions to the market, while ensuring compliance, safety, and quality at every step.
        </p>

        <p className="text-gray-700 text-lg mb-6 text-justify">
          As we grow, so does our commitment to patients, to healthcare providers, and to a healthier tomorrow.
        </p>

        <p className="text-gray-700 text-lg mb-6 text-justify">
          <span className="font-bold">Gluckscare Pharmaceuticals</span> – <span className="italic">Beyond Medicine. A Mission of Wellness.</span>
        </p>

        <button className="mt-2 inline-flex items-center gap-2 border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white font-semibold px-6 py-2 rounded-full transition-all">
          KNOW MORE
          <MdArrowForward className="text-xl" />
        </button>

        {/* Stats */}
        {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { count: "300+", label: "Products", icon: "/icons/box.png" },
            { count: "50+", label: "Markets Served", icon: "/icons/store.png" },
            { count: "2000+", label: "Employees", icon: "/icons/team.png" },
            { count: "1500+", label: "SKUs", icon: "/icons/warehouse.png" },
          ].map((stat, index) => (
            <div key={index}>
              <Image src={stat.icon} alt={stat.label} width={40} height={40} className="mx-auto mb-2" />
              <p className="text-2xl font-bold text-red-600">{stat.count}</p>
              <p className="text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;
