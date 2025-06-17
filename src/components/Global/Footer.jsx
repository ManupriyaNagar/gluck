"use client";
import Link from "next/link";
// Footer.jsx
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add only what you need
});

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative text-white z-10">
      <section
        className="app-container text-white pt-12 pb-6 px-6 md:px-16 h-[75vh] bg-cover bg-center bg-no-repeat inset-0 relative"
        style={{
          backgroundImage: "url('/IMG.jpg')",
        }}
      >
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-y-8 text-sm z-20">
            {/* Column 1 */}
            <div className="flex-1 min-w-[180px] md:max-w-[200px]">
              <h3 className="font-bold text-xl mb-2">About</h3>
              <div className="border-t border-white pt-6 opacity-35"></div>
              <ul className="space-y-2 font-semibold -mt-3 ">
                <li>Company Profile</li>
                <li>Chairman’s Desk</li>
                <li>Vision & Values</li>
                <li>Milestones</li>
                <li>Board of Directors</li>
                <li>Management Profile</li>
                <li>Strategy</li>
                <li>Leadership</li>
                <li>Subsidiaries</li>
                <li>R&D Capabilities</li>
                <li>Quality Policy</li>
             
  

                <li>
  <a href="https://play.google.com/store/apps/details?id=com.rbsh.medicle_sales_rbsh&hl=en" target="_blank" rel="noopener noreferrer">
    <img
      src="/app.webp"
      alt="App Badge"
      className="transition duration-300 bg-white rounded-lg mt-10 w-40 transform hover:scale-105"
    />
  </a>
</li>

<li>
  <a href="https://mediglucks.com/" target="_blank" rel="noopener noreferrer">
    <img
      src="/mediglucks.png"
      alt="MediGlucks Logo"
      className="p-2 rounded-md transition duration-300 mt-8 w-40 bg-white transform hover:scale-105"
    />
  </a>
</li>



              </ul>
              
            </div>
         


            {/* Vertical Divider */}
            <div className="hidden md:block w-px bg-white opacity-35 mx-2" />

            {/* Column 2 */}
            <div className="flex-1 min-w-[180px] md:max-w-[200px]">
              <h3 className="font-bold text-xl mb-2">Science & Innovation</h3>
              <div className="border-t border-white pt-6 opacity-35"></div>
              <ul className="space-y-1 mb-4 font-semibold -mt-3">
                <li>Overview</li>
                <li>Manufacturing Facilities</li>
                <li>Markets</li>
                <li>Sample Product Portfolio</li>
              </ul>
              <h3 className="font-bold text-xl mb-2">Health & Wellness</h3>
              <div className="border-t border-white pt-6 opacity-35"></div>
              <ul className="space-y-1 font-semibold -mt-3">
                <li>Self-Care Products</li>
                <li>Prescription Therapeutics</li>
              </ul>
              <h3 className="font-bold text-xl mb-2 mt-4">R & D</h3>
              <div className="border-t border-white pt-6 opacity-35"></div>

              <h3 className="font-bold text-xl -mt-2 mb-2">
                General Information
              </h3>
              <div className="border-t border-white pt-6 opacity-35"></div>
              <ul className="space-y-1 font-semibold -mt-3">
                <li>Coorporate Announcements</li>
                <li>Financial Results</li>
                <li>Compliances</li>
                <li>Press Release</li>
              </ul>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px bg-white opacity-35 mx-2" />

            {/* Column 3 */}
            <div className="flex-1 min-w-[180px] md:max-w-[200px]">
              <h3 className="font-bold text-xl mb-2">Resposibility</h3>
              <div className="border-t border-white pt-6 opacity-35"></div>
              <ul className="space-y-1 mb-4 font-semibold -mt-3">
                <li>CSR</li>
                <li>Sustainability</li>
              </ul>
              <h3 className="font-bold text-xl mb-2">Media</h3>
              <div className="border-t border-white pt-6 opacity-35"></div>
              <ul className="space-y-1 mb-4 font-semibold -mt-3">
                <li>News</li>
                <li>Gallery</li>
              </ul>
              <h3 className="font-bold text-xl mb-2">Careers</h3>
              <div className="border-t border-white pt-6 opacity-35"></div>
              <ul className="space-y-1 font-semibold -mt-3">
                <li>Overview</li>
                <li>Values</li>
                <li>Life at GlucksCare</li>
                <li>Apply Now</li>
              </ul>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px bg-white opacity-35 mx-2" />

            {/* Column 4 */}
            <div className="flex-1 min-w-[220px] md:max-w-[260px]">
              <h3 className="font-bold text-xl mb-2">Events</h3>
              <div className="border-t border-white pt-6 opacity-35"></div>

              <h3 className="font-bold text-xl mb-2">Contact</h3>
              <div className="border-t border-white pt-6 opacity-35"></div>

              <h3 className="font-bold text-xl mb-2">Site Map</h3>
              <div className="border-t border-white pt-6 opacity-35"></div>

              {/* <h3 className="text-5xl mb-2 spaceGrotesk.variable">Get in touch</h3> */}
              <h1
                className={`${notoSerif.className} text-4xl font-semibold pb-2 mt-8`}
              >
                Get in touch
              </h1>

              <p className="text-sm flex items-start -mt-2 mt-2 font-semibold">
                T3-236, Golden-I, Techzone IV
                <br />
                Greater Noida West, UP - 201306 IN
              </p>

              <p className="text-lg font-semibold flex items-center gap-2 mb-1">
                <a
                  href="mailto:care@gluckscare.com"
                  className="flex items-center gap-2 hover:underline"
                >
                  <span>care@gluckscare.com</span>
                </a>
              </p>

              <p className="text-lg font-semibold flex items-start">
                <a
                  href="tel:+919931644865"
                  className="flex items-center gap-2 hover:underline"
                >
                  +91 99316 44865
                </a>
              </p>

              <br />
              <div className="flex gap-4 mt-4 text-xl">
                <FaFacebookF />
                <FaInstagram />
    
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="bg-[#C71D52] ">
        <div className="w-screen border-t border-gray-300 pt-4 "></div>
        <div className="app-container">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-100">
            <p>© 2025 All rights reserved by Gluckscare Pharmaceuticals.</p>
            <div className="flex gap-2 flex-wrap text-xs">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Disclaimer
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Cookie Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Site Map
              </a>
            </div>
          </div>
          <p className="text-center py-4 text-xs text-gray-200">
            Designed and developed in <strong>India</strong> by
            <a
  href="https://www.rbshstudio.com"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold text-gray-100 hover:underline"
>
  <span> RBSH Studio.</span>
</a>


          </p>
        </div>
      </section>
    </footer>
  );
}
