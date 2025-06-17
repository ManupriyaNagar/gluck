"use client";
import Link from "next/link";
import { Noto_Serif } from "next/font/google";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <footer className="relative text-white z-10">
      <section
        className="w-full text-white pt-12 pb-6 px-4 md:px-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/IMG.jpg')" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap gap-10 text-sm">
            {/* Column 1 */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="font-bold text-xl mb-2">About</h3>
              <div className="border-t border-white pt-4 opacity-35" />
              <ul className="space-y-2 font-semibold">
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
                  <a
                    href="https://play.google.com/store/apps/details?id=com.rbsh.medicle_sales_rbsh&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/app.webp"
                      alt="App Badge"
                      className="bg-white rounded-lg mt-6 w-36 hover:scale-105 transition"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://mediglucks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/mediglucks.png"
                      alt="MediGlucks Logo"
                      className="bg-white rounded-lg mt-4 w-36 p-2 hover:scale-105 transition"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="font-bold text-xl mb-2">Science & Innovation</h3>
              <div className="border-t border-white pt-4 opacity-35" />
              <ul className="space-y-2 font-semibold">
                <li>Overview</li>
                <li>Manufacturing Facilities</li>
                <li>Markets</li>
                <li>Sample Product Portfolio</li>
              </ul>
              <h3 className="font-bold text-xl mt-6 mb-2">Health & Wellness</h3>
              <div className="border-t border-white pt-4 opacity-35" />
              <ul className="space-y-2 font-semibold">
                <li>Self-Care Products</li>
                <li>Prescription Therapeutics</li>
              </ul>
              <h3 className="font-bold text-xl mt-6 mb-2">R & D</h3>
              <div className="border-t border-white pt-4 opacity-35" />

              <h3 className="font-bold text-xl mt-6 mb-2">General Information</h3>
              <div className="border-t border-white pt-4 opacity-35" />
              <ul className="space-y-2 font-semibold">
                <li>Corporate Announcements</li>
                <li>Financial Results</li>
                <li>Compliances</li>
                <li>Press Release</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="font-bold text-xl mb-2">Responsibility</h3>
              <div className="border-t border-white pt-4 opacity-35" />
              <ul className="space-y-2 font-semibold">
                <li>CSR</li>
                <li>Sustainability</li>
              </ul>
              <h3 className="font-bold text-xl mt-6 mb-2">Media</h3>
              <div className="border-t border-white pt-4 opacity-35" />
              <ul className="space-y-2 font-semibold">
                <li>News</li>
                <li>Gallery</li>
              </ul>
              <h3 className="font-bold text-xl mt-6 mb-2">Careers</h3>
              <div className="border-t border-white pt-4 opacity-35" />
              <ul className="space-y-2 font-semibold">
                <li>Overview</li>
                <li>Values</li>
                <li>Life at GlucksCare</li>
                <li>Apply Now</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="flex-1 min-w-[220px]">
              <h3 className="font-bold text-xl mb-2">Events</h3>
              <div className="border-t border-white pt-4 opacity-35" />

              <h3 className="font-bold text-xl mt-6 mb-2">Contact</h3>
              <div className="border-t border-white pt-4 opacity-35" />

              <h3 className="font-bold text-xl mt-6 mb-2">Site Map</h3>
              <div className="border-t border-white pt-4 opacity-35" />

              <h1
                className={`${notoSerif.className} text-3xl font-semibold mt-8`}
              >
                Get in touch
              </h1>

              <p className="text-sm font-semibold mt-2">
                T3-236, Golden-I, Techzone IV <br />
                Greater Noida West, UP - 201306 IN
              </p>

              <p className="text-lg font-semibold mt-3">
                <a
                  href="mailto:care@gluckscare.com"
                  className="hover:underline"
                >
                  care@gluckscare.com
                </a>
              </p>
              <p className="text-lg font-semibold">
                <a href="tel:+919931644865" className="hover:underline">
                  +91 99316 44865
                </a>
              </p>

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
      <section className="bg-[#C71D52] w-full">
        <div className="border-t border-gray-300 pt-4" />
        <div className="app-container px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-100">
            <p>© 2025 All rights reserved by Gluckscare Pharmaceuticals.</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
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
          <p className="text-center py-4 text-xs text-gray-200">
            Designed and developed in <strong>India</strong> by
            <a
              href="https://www.rbshstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-100 hover:underline ml-1"
            >
              RBSH Studio.
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
}
