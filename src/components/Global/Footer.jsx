"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className=" relative">
  <section
    className=" text-white pt-12 pb-6 px-6 md:px-16 bg-cover bg-center bg-no-repeat inset-0 opacity-90"
    style={{
      backgroundImage: "url('/footer1.jpg')",
    }}>
  {/* Overlay */}

  <div className="relative z-40">
  <div className="max-w-9xl grid grid-cols-1 md:grid-cols-9 gap-2 text-sm z-20">
        
        {/* Column 1 - Company Info */}
        <div className="bg-white relative text-black p-8 -mt-12 z-50 -mb-6 max-w-3xl md:col-span-2">

          <img
            src="/logo.png"
            alt="Emcure Logo"
            className="mt-6"/>
<p className="text-sm mb-2 mt-4 leading-tight">
Committed to accessible, affordable, and reliable healthcare. Headquartered in Noida, India — delivering science-backed medi
cines and wellness solutions with care and quality.


</p>
          <p className="text-sm mb-2 leading-relaxed mt-4">
          T3-236, Golden-I, Techzone IV, Greater Noida West, UP - 201306
          </p>
          <p className="text-sm flex items-center gap-2 mb-1">
            <span>📧</span> care@gluckscare.com
          </p>
          <p className="text-sm flex items-center gap-2">
            <span>📞</span> +91 99316 44865
          </p>
          {/* <p className="mt-4"> Committed to accessible, affordable, and reliable healthcare. Headquartered in Noida, India — delivering science-backed medicines and wellness solutions with care and quality. </p> */}

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Column 2 - About + Group Companies */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-2 mx-auto ml-10 ">About</h3>
          <ul className="space-y-1 ml-10">
            <li>Company Profile</li>
            <li>Chairman’s Desk</li>
            <li>Vision & Values</li>
            <li>Milestones</li>
            <li>Leadership</li>
            <li>Subsidiaries</li>
            <li>R&D Capabilities</li>
            <li>Quality Policy</li>
            <li>Global Operations</li>
          </ul>
         
        </div>
        <div className="hidden md:block w-px bg-white opacity-80 mx-auto" />
        {/* <div className=" border-r border-gray-300 bg-transparent"></div> */}

        {/* Column 3 - Business Units */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-2 ">Science & Innovation</h3>
          <ul className="space-y-1 mb-4">
            <li>Overview</li>
            <li>Manufacturing Facilities</li>
            <li>Markets</li>
            <li>Sample Portfolio</li>
          </ul>

          <h3 className="font-bold text-xl mb-2 ">Health & Wellness</h3>
          <ul className="space-y-1">
            <li>Self-Care Products</li>
            <li>Prescription Therapeutics</li>
          </ul>
        </div>
        <div className="hidden md:block w-px bg-white opacity-80 mx-auto" />

        {/* Column 4 - Media + Careers + Responsibility */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-2 ">R & D</h3>
          <ul className="space-y-1 mb-4">
            <li>CSR</li>
            <li>Sustainability</li>
          </ul>

          <h3 className="font-bold text-xl mb-2">Media</h3>
          <ul className="space-y-1 mb-4">
            <li>News</li>
            <li>Gallery</li>
          </ul>

          <h3 className="font-bold text-xl mb-2">Careers</h3>
          <ul className="space-y-1">
            <li>Life at Emcure</li>
            <li>Learnings & Growth</li>
            <li>Openings</li>
          </ul>
        </div>
        <div className="hidden md:block w-px bg-white opacity-80 mx-auto" />

        {/* Column 5 - Investors + Contact */}
        <div className="md:col-span-1">
          {/* <h3 className="font-bold text-xl mb-2 ">Investors</h3>
          <ul className="space-y-1 mb-4">
            <li>Financial Results</li>
            <li>Announcements</li>
            <li>Compliances</li>
            <li>Press Releases</li>
            <li>ESG Profile</li>
          </ul> */}

          <h3 className="font-bold text-xl mb-2 ">Contact</h3>
          <p className="text-sm leading-relaxed">
          T3-236, Golden-I, 
          <br />Techzone IV, Greater <br /> Noida West, UP - 201306
          </p>
          <p className="mt-2 font-semibold">+91 99316 44865</p>
          <p className="text-sm mr-4">
            care@gluckscare.com
          </p>
        </div>
      </div>
      </div>
      </section>
      <section className=" bg-[#C71D52]">
      <div className="w-screen border-t border-gray-300  pt-6 -mx-4 md:-mx-16 px-4 md:px-16"></div>


     
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-100">
  <p>© 2025 All rights reserved by Gluckscare Pharmaceuticals.</p>
  <div className="flex gap-2 flex-wrap text-xs">
    <a href="#" className="hover:underline">Privacy Policy</a>
    <span>|</span>
    <a href="#" className="hover:underline">Terms & Conditions</a>
    <span>|</span>
    <a href="#" className="hover:underline">Disclaimer</a>
    <span>|</span>
    <a href="#" className="hover:underline">Cookie Policy</a>
    <span>|</span>
    <a href="#" className="hover:underline">Site Map</a>
  </div>
</div>
<p className="text-center py-4 text-xs text-gray-200 ">
Designed and developed by

<link rel="stylesheet" href="www.rbshstudio.com"  className="text-bold"/>
<span className="font-bold text-gray-100"> RBSH Studio. </span>
  
</p>
</section>
</footer>
);

      {/* Divider */}
  
      

      
}
