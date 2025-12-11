'use client';
import Image from 'next/image';
import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1e1e1e] border-b border-[#333] py-5 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Image
          src="/images/acqron_logo.png"
          alt="Acqron Logo"
          width={48}
          height={48}
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg"
          priority
        />
        {/* Desktop/Tablet Nav */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#home"
            className="text-[#d1d1d1] font-medium transition-colors duration-300 hover:text-[#facb15]"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[#d1d1d1] font-medium transition-colors duration-300 hover:text-[#facb15]"
          >
            About
          </a>
          <a
            href="#services"
            className="text-[#d1d1d1] font-medium transition-colors duration-300 hover:text-[#facb15]"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-[#d1d1d1] font-medium transition-colors duration-300 hover:text-[#facb15]"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="text-[#d1d1d1] font-medium transition-colors duration-300 hover:text-[#facb15]"
          >
            Testimonials
          </a>
          <a
            href="#blog"
            className="text-[#d1d1d1] font-medium transition-colors duration-300 hover:text-[#facb15]"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-[#d1d1d1] font-medium transition-colors duration-300 hover:text-[#facb15]"
          >
            Contact
          </a>
          <a
            href="#contact"
            id="nav-cta"
            className="bg-[#e54e3f] text-white px-6 py-2 rounded-md font-semibold transition-colors duration-300 hover:bg-[#c43e2f]"
          >
            Get Started
          </a>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center p-2 rounded focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="#facb15"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-2 pt-4 animate-fade-in">
          <a
            href="#home"
            className="w-full text-[#d1d1d1] font-medium py-2 text-center transition-colors duration-300 hover:text-[#facb15]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="w-full text-[#d1d1d1] font-medium py-2 text-center transition-colors duration-300 hover:text-[#facb15]"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="w-full text-[#d1d1d1] font-medium py-2 text-center transition-colors duration-300 hover:text-[#facb15]"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#projects"
            className="w-full text-[#d1d1d1] font-medium py-2 text-center transition-colors duration-300 hover:text-[#facb15]"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="w-full text-[#d1d1d1] font-medium py-2 text-center transition-colors duration-300 hover:text-[#facb15]"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#blog"
            className="w-full text-[#d1d1d1] font-medium py-2 text-center transition-colors duration-300 hover:text-[#facb15]"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="#contact"
            className="w-full text-[#d1d1d1] font-medium py-2 text-center transition-colors duration-300 hover:text-[#facb15]"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="#contact"
            id="nav-cta"
            className="w-full bg-[#e54e3f] text-white px-6 py-2 rounded-md font-semibold text-center mt-2 transition-colors duration-300 hover:bg-[#c43e2f]"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
