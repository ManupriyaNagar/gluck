'use client';
import React from 'react';
import Link from 'next/link';

const navItems = [
  { label: "About", href: "/about" },
  { label: "Science & Innovation", href: "/science" },
  { label: "Health & Wellness", href: "/wellness" },
  { label: "R&D", href: "/rnd" },
  { label: "Media", href: "/media" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header className="app-container fixed top-10 left-0 w-full z-50 flex justify-between 
      items-right py-4 bg-white transition-all duration-300">
      
      <div>
        <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
      </div>
      
      <nav className="mt-4 md:mt-4">
        <ul className="flex flex-wrap gap-6 md:gap-10 text-xl font-medium text-black">
          {navItems.map((item, index) => (
            <li key={index} className="relative group cursor-pointer flex items-center gap-2">
              <Link href={item.href} className="group-hover:text-[#c51b4a] transition-colors duration-300">
                {item.label}
              </Link>
              <span className="absolute opacity-0 group-hover:opacity-100 left-full transition-opacity duration-300 text-[#c51b4a]">
                →
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
