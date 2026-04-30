import React, { useState } from 'react';
import { FiChevronDown, FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import OliveLogo from './OliveLogo';

const navLinks = [
  { label: 'Solutions', hasDropdown: true },
  { label: 'Features', hasDropdown: false },
  { label: 'Pricing', hasDropdown: false },
  { label: 'Blog', hasDropdown: true },
  { label: 'Restaurants', hasDropdown: false },
  { label: 'Food', hasDropdown: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f0f4e8] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between">

        <OliveLogo />

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="flex items-center gap-1 text-[#1a2e05] text-[15px] font-semibold hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-none"
            >
              {link.label}
              {link.hasDropdown && <FiChevronDown size={14} />}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="text-[#1a2e05] text-[15px] font-semibold hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-none">
            Sign in
          </button>
          <button className="flex items-center gap-2 bg-[#1a2e05] text-white text-[15px] font-semibold px-5 py-[10px] rounded-full hover:bg-[#2d4a0e] transition-colors cursor-pointer border-none">
            Get Olive
            <FiArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>

        <button
          className="lg:hidden p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={24} color="#1a2e05" /> : <FiMenu size={24} color="#1a2e05" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#f0f4e8] border-t border-[#d8e5c0] px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="flex items-center justify-between text-[#1a2e05] text-[16px] font-semibold py-1 bg-transparent border-none cursor-pointer"
            >
              {link.label}
              {link.hasDropdown && <FiChevronDown size={14} />}
            </button>
          ))}
          <div className="border-t border-[#d8e5c0] pt-4 flex flex-col gap-3">
            <button className="text-[#1a2e05] text-[16px] font-semibold text-left bg-transparent border-none cursor-pointer">
              Sign in
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#1a2e05] text-white text-[16px] font-semibold px-5 py-3 rounded-full border-none cursor-pointer">
              Get Olive
              <FiArrowRight size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;