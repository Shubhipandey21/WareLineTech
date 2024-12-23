"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Sidebar toggle state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle sidebar
  };

  return (
    <nav className="bg-white shadow-md font-['Open_Sans']">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-black">WareLineTech</div>

        {/* Hamburger Menu Icon (Mobile View) */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>

        {/* Sidebar (Mobile View) */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
        >
          <button
            className="absolute top-4 right-4 text-2xl text-black"
            onClick={toggleMenu}
          >
            ✕
          </button>
          <ul className="flex flex-col space-y-4 p-6">
            <li className="text-black">
              <Link href="/case-studies" onClick={toggleMenu}>
                Case Studies
              </Link>
            </li>
            <li className="text-black">
              <Link href="/services" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li className="text-black">
              <Link href="/company" onClick={toggleMenu}>
                Company
              </Link>
            </li>
            <li className="text-black">
              <Link href="/industries" onClick={toggleMenu}>
                Industries
              </Link>
            </li>
            <li className="text-black">
              <Link href="/technologies" onClick={toggleMenu}>
                Technologies
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <button
                  className="bg-black text-white py-2 px-4 rounded transform transition-transform duration-200 hover:scale-110"
                  onClick={toggleMenu}
                >
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Menu (Desktop View) */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li className="text-black hover:underline">
            <Link href="/case-studies">Case Studies</Link>
          </li>
          <li className="text-black hover:underline">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-black hover:underline">
            <Link href="/company">Company</Link>
          </li>
          <li className="text-black hover:underline">
            <Link href="/industries">Industries</Link>
          </li>
          <li className="text-black hover:underline">
            <Link href="/technologies">Technologies</Link>
          </li>
          <li className="text-black hover:underline">
            <Link href="/technologies">Company</Link>
          </li>
          <li>
            <Link href="/contact-us">
              <button className="bg-black text-white py-2 px-4 rounded transform transition-transform duration-200 hover:scale-110">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
