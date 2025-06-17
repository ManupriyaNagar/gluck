'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: "About", href: "/about" },
  { label: "Science & Innovation", href: "/" },
  { label: "Health & Wellness", href: "/" },
  { label: "R&D", href: "/" },
  { label: "Media", href: "/" },
  { label: "Careers", href: "/" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-16 md:top-10 left-0 w-full z-50 bg-white shadow-md transition-all duration-300">
      <div className="app-container flex justify-between items-center py-4 px-4 md:px-8">
        
        {/* Logo linking to Home */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-auto w-44" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex gap-8 text-xl font-medium text-black">
            {navItems.map((item, index) => (
              <li key={index} className="relative group cursor-pointer">
                <Link
                  href={item.href}
                  className="group-hover:text-[#c51b4a] transition-colors duration-300"
                >
                  {item.label}
                </Link>
                <span className="absolute opacity-0 group-hover:opacity-100 left-full transition-opacity duration-300 text-[#c51b4a] ml-1">
                  →
                </span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl text-black focus:outline-none"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="flex flex-col gap-4 text-base font-medium text-black">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block w-full hover:text-[#c51b4a] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
