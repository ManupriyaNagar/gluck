"use client";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

const About = () => {
  return (
    <section
      className=" relative w-full   md:flex-row items-center justify-between gap-10 bg-cover bg-center bg-no-repeat bg-white"
      // style={{
      //   backgroundImage: "url('/home.png')",
      // }}
    > 
      {/* Optional Overlay for readability */}
      <div className=" flex flex-col md:flex-row bg-white overflow-hidden">
        {/* Left - Text Section */}
        <div className="app-container w-full md:w-1/2 p-8 text-white bg-[#C71D52]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Welcome to GlucksCare Pharmaceuticals
          </h2>
          <p className="text-base md:text-lg text-white mb-6">
            Gluckscare Pharmaceuticals is a trusted name in healthcare,
            dedicated to delivering high-quality, science-backed medicines and
            wellness solutions. Headquartered in Noida, India, we are driven by
            a mission to make effective healthcare accessible, affordable, and
            reliable for all.
          </p>
          <p className="text-base md:text-lg text-white">
            With a growing portfolio that spans key therapeutic areas from
            general health and chronic care to specialized formulations we
            combine research, innovation, and global manufacturing standards to
            create products that truly make a difference.
          </p>
        </div>

        {/* Right - Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/image1.png" // Place this in public folder as "building-image.jpg"
            alt="GlucksCare Building"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      
       <div className="app-container bg-black text-white p-6">
        <p className="mb-4">
        At Gluckscare, we believe that healthcare should be more than a cure — it should be care. Our team of passionate professionals works relentlessly to bring life-changing solutions to the market, while ensuring compliance, safety, and quality at every step.

        </p>
        <p className="mb-4">
          As we grow, so does our commitment  — to patients, to healthcare
          providers, and to a healthier tomorrow.
        </p>
        <p className="text-[#C71D52] text-xl md:text-xl ">
          <span className="font-bold">
          Gluckscare Pharmaceuticals – Beyond Medicine</span>. A <span className="font-bold">Mission</span> of <span className="font-bold">Wellness</span>.
        </p>
      </div>
   



    </section>
  );
};

export default About;



// "use client";

// import Image from "next/image";
// import React from "react";

// const About = () => {
//   return (
//     <section className="bg-white py-10 px-4 md:px-10">
//       <div className="flex flex-col md:flex-row bg-white rounded overflow-hidden">
//         {/* Left - Text Section */}
//         <div className="w-full md:w-1/2 p-8 text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
//             Welcome to GlucksCare Pharmaceuticals
//           </h2>
//           <p className="text-base md:text-lg text-black mb-6">
//             Gluckscare Pharmaceuticals is a trusted name in healthcare,
//             dedicated to delivering high-quality, science-backed medicines and
//             wellness solutions. Headquartered in Noida, India, we are driven by
//             a mission to make effective healthcare accessible, affordable, and
//             reliable for all.
//           </p>
//           <p className="text-base md:text-lg text-black">
//             With a growing portfolio that spans key therapeutic areas from
//             general health and chronic care to specialized formulations we
//             combine research, innovation, and global manufacturing standards to
//             create products that truly make a difference.
//           </p>
//         </div>

//         {/* Right - Image Section */}
//         <div className="w-full md:w-1/2">
//           <Image
//             src="/building-image.jpg" // Place this in public folder as "building-image.jpg"
//             alt="GlucksCare Building"
//             width={800}
//             height={600}
//             className="object-cover w-full h-full"
//           />
//         </div>
//       </div>

//       {/* Footer Banner */}
//       <div className="bg-black text-white p-6 mt-6 rounded">
//         <p className="mb-4">
//           Gluckscare Pharmaceuticals is a trusted name in healthcare, dedicated
//           to delivering high-quality, science-backed medicines and wellness
//           solutions. Headquartered in Noida, India, we are driven by a mission
//           to make effective healthcare accessible, affordable, and reliable for
//           all.
//         </p>
//         <p className="mb-4">
//           As we grow, so does our commitment to patients, to healthcare
//           providers, and to a healthier tomorrow.
//         </p>
//         <p className="text-pink-400 text-lg md:text-xl font-semibold">
//           Gluckscare Pharmaceuticals – Beyond Medicine. A Mission of Wellness.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;

