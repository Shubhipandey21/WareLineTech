"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Sidebar toggle state
  const [dropdown, setDropdown] = useState(null); // Dropdown toggle state

  // Toggle sidebar
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Toggle specific dropdown
  const toggleDropdown = (menu) =>
    setDropdown((prev) => (prev === menu ? null : menu));

  // Dropdown items and routes
  const dropdownItems = {
    services: [
      { name: "Mobile Apps", route: "/services/mobile-apps" },
      { name: "Web Apps", route: "/services/web-apps" },
      { name: "Cloud", route: "/services/cloud" },
      { name: "AI/ML", route: "/services/ai-ml" },
      { name: "Enterprise Level Solutions", route: "/services/enterprise-solutions" },
    ],
  
    industries: [
      { name: "Healthcare", route: "/industries/healthcare" },
      { name: "Fintech", route: "/industries/fintech" },
      { name: "E-Commerce", route: "/industries/e-commerce" },
      { name: "Real Estate", route: "/industries/real-estate" },
      { name: "InsureTech", route: "/industries/insuretech" },
    ],
    company: [
      { name: "About Us", route: "/company/about-us" },
      { name: "Careers", route: "/company/careers" },
    ],
  };

  return (
    <nav className="bg-white shadow-md font-['Open_Sans']">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-black">
          <Link href="/">WareLineTech</Link>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden lg:flex space-x-6 items-center relative">
          {[
            { name: "Case Studies", route: "/case-studies" },
            { name: "Services", route: "/services" },
            { name: "Industries", route: "/industries" },
            { name: "Hire Developers", route: "/hire-developers" },
            { name: "Company", route: "/company" },
            { name: "Press", route: "/press" },
            { name: "Contact Us", route: "/contact-us" },
          ].map((item) => (
            <li key={item.name} className="group relative hover:text-gray-700">
              <Link
                href={item.route}
                className="text-black hover:underline"
              >
                {item.name}
              </Link>
              {/* Dropdown for Desktop */}
              {dropdownItems[item.name.toLowerCase()] && (
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 space-y-2 p-4 w-48 z-50 border border-gray-200">
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

        {/* Hamburger Menu Icon (Mobile View) */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>

      {/* Sidebar (Mobile View) */}
      {menuOpen && (
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50`}
        >
          <button
            className="absolute top-4 right-4 text-2xl text-black"
            onClick={toggleMenu}
          >
            ✕
          </button>
          <ul className="flex flex-col space-y-4 p-6">
            {[
              { name: "Case Studies", route: "/case-studies" },
              { name: "Services", route: "/services" },
              { name: "Industries", route: "/industries" },
              { name: "Hire Developers", route: "/hire-developers" },
              { name: "Company", route: "/company" },
              { name: "Press", route: "/press" },
              { name: "Contact Us", route: "/contact-us" },
            ].map((item) => (
              <li key={item.name}>
                <div className="flex justify-between items-center">
                  <Link
                    href={item.route}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-black">{item.name}</span>
                  </Link>
                  {dropdownItems[item.name.toLowerCase()] && (
                    <button
                      onClick={() => toggleDropdown(item.name.toLowerCase())}
                      className="text-black font-bold text-xl"
                    >
                      {dropdown === item.name.toLowerCase() ? "−" : "+"}
                    </button>
                  )}
                </div>
                {/* Dropdown Items */}
                {dropdown === item.name.toLowerCase() && (
                  <ul className="pl-4 space-y-2 mt-2">
                    {dropdownItems[item.name.toLowerCase()].map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          href={subItem.route}
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="text-black hover:underline">
                            {subItem.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
