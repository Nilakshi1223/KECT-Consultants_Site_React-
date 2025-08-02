import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

const navLinkClass =
  "relative text-gray-800 hover:text-[#6a994e] transition duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-6 after:h-[2px] after:bg-[#6a994e] after:transition-all after:duration-300";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      {/* Responsive Circle - top-right for md+, bottom-left and full circle for mobile */}
      <div className="z-50">
        {/* Desktop Quarter Circle */}
        <div className="hidden md:flex absolute top-0 right-0">
          <div className="group w-14 h-14 md:w-20 md:h-20 bg-[#ffc000] rounded-bl-full overflow-hidden relative transition-all duration-500 hover:w-48 hover:h-48 cursor-pointer flex flex-col items-center justify-center">
            {/* Icon */}
            <div className="text-[#386641] text-xl transition-all duration-500 group-hover:mb-2">
              <FiPhone />
            </div>
            {/* Phone Numbers */}
            <div className="text-[#386641] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center space-y-1">
              <p>📞 +94 77 123 4567</p>
              <p>📞 +94 71 765 4321</p>
            </div>
          </div>
        </div>

        {/* Mobile Full Circle */}
        <div className="md:hidden fixed bottom-4 left-4">
          <div className="group w-16 h-16 bg-[#ffc000] rounded-full overflow-hidden relative transition-all duration-500 hover:w-44 hover:h-44 cursor-pointer flex flex-col items-center justify-center">
            {/* Icon */}
            <div className="text-[#386641] text-xl transition-all duration-500 group-hover:mb-2">
              <FiPhone />
            </div>
            {/* Phone Numbers */}
            <div className="text-[#386641] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center space-y-1">
              <p>📞 +94 77 123 4567</p>
              <p>📞 +94 71 765 4321</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-700">
          Wasgamu Safari
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={navLinkClass}>
            Home
          </Link>
          <Link to="/gallery" className={navLinkClass}>
            Gallery
          </Link>
          <Link to="/safari-packages" className={navLinkClass}>
            Packages
          </Link>
          <Link to="/about" className={navLinkClass}>
            About
          </Link>
          <Link to="/contact" className={navLinkClass}>
            Contact
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-6 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className={navLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className={navLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/safari-packages"
              className={navLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Packages
            </Link>
            <Link
              to="/about"
              className={navLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={navLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
