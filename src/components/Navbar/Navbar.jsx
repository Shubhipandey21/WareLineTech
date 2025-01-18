"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleDropdown = (menu) =>
    setDropdown((prev) => (prev === menu ? null : menu));

  const dropdownItems = {
    services: [
      { name: "Mobile Apps", route: "/services/mobile-apps" },
      { name: "Web Apps", route: "/services/web-apps" },
      { name: "Cloud", route: "/services/cloud" },
      { name: "AI/ML", route: "/services/ai-ml" },
      {
        name: "Enterprise Level Solutions",
        route: "/services/enterprise-solutions",
      },
      { name: "iOS", route: "/services/iOS" },
      { name: "Android", route: "/services/android" },
      { name: "Flutter", route: "/services/flutter" },
      { name: "React Native", route: "/services/react-native" },
    ],
    industries: [
      { name: "Healthcare", route: "/industries/healthcare" },
      { name: "Fintech", route: "/industries/fintech" },
      { name: "E-Commerce", route: "/industries/e-commerce" },
      { name: "Real Estate", route: "/industries/real-estate" },
      { name: "InsureTech", route: "/industries/insuretech" },
      { name: "Travel", route: "/industries/travel" },
      { name: "Hospitality", route: "/industries/hospitality" },
      { name: "Construction", route: "/industries/construction" },
      { name: "Sports", route: "/industries/sports" },
      { name: "Education", route: "/industries/education" },
    ],
    company: [
      { name: "About Us", route: "/company/about-us" },
      { name: "Careers", route: "/company/careers" },
    ],
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-black">
          <Link href="/">
            <img
              src="/warelinetechlogo.svg"
              alt="WareLineTech Logo"
              className="w-40 h-40"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 items-center relative">
          {[
            { name: "Case Studies", route: "/case-studies" },
            { name: "Services", route: "/services" },
            { name: "Industries", route: "/industries" },
            { name: "Hire Developers", route: "/hire-developers" },
            { name: "Company", route: "" },
            { name: "Press", route: "/press" },
            { name: "Contact Us", route: "/contact-us" },
          ].map((item) => (
            <li key={item.name} className="group relative">
              <Link
                href={item.route}
                className="text-black font-bold hover:text-gray-600"
              >
                {item.name}
              </Link>
              {dropdownItems[item.name.toLowerCase()] && (
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg p-4 w-48 z-50">
                  {dropdownItems[item.name.toLowerCase()].map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        href={subItem.route}
                        className="block px-4 py-2 text-black hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Trigger */}
        <button onClick={toggleMenu} className="lg:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4">
              <div className="text-xl font-bold">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  WareLineTech
                </Link>
              </div>
              <button onClick={toggleMenu} className="p-2">
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-grow flex flex-col p-4">
              {[
                { name: "Case Studies", route: "/case-studies" },
                { name: "Services", route: "/services" },
                { name: "Industries", route: "/industries" },
                { name: "Hire Developers", route: "/hire-developers" },
                { name: "Company", route: "" },
                { name: "Press", route: "/press" },
                { name: "Contact Us", route: "/contact-us" },
              ].map((item) => (
                <div key={item.name} className="mb-4">
                  <div
                    className="flex justify-between items-center text-xl font-bold cursor-pointer"
                    onClick={() =>
                      dropdownItems[item.name.toLowerCase()]
                        ? toggleDropdown(item.name.toLowerCase())
                        : setMenuOpen(false)
                    }
                  >
                    <Link
                      href={item.route}
                      className="text-black hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                    {dropdownItems[item.name.toLowerCase()] && (
                      <ChevronDown
                        size={20}
                        className={`transform transition-transform ${
                          dropdown === item.name.toLowerCase()
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    )}
                  </div>
                  {/* Dropdown for Mobile */}
                  {dropdown === item.name.toLowerCase() && (
                    <ul className="mt-2 ml-4">
                      {dropdownItems[item.name.toLowerCase()].map((subItem) => (
                        <li key={subItem.name} className="mb-2">
                          <Link
                            href={subItem.route}
                            className="text-gray-700 hover:text-blue-600"
                            onClick={() => setMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 p-6">
              <Link href="#" className="text-blue-600">
                LinkedIn
              </Link>
              <Link href="#" className="text-pink-600">
                Instagram
              </Link>
              <Link href="#" className="text-black">
                X
              </Link>
              <Link href="#" className="text-pink-500">
                Behance
              </Link>
              <Link href="#" className="text-blue-500">
                Discord
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
