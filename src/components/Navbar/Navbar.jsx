import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Courses",
    href: "/courses",
    
  },
  { name: "Placements", href: "/placements" },
  {name:"Corporate Training", href:"/corporatetraining"},
  { name: "Online Registration", href: "/onlineregistration" },
  { name: "Certificates", href: "/certificates" },
  { name: "Blog", href: "/blog" },
  { name: "ContactUs", href: "/contact" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

// useEffect(() => {
//   const handleResize = () => {
//     if (window.innerWidth >= 1020) {
//       // Close mobile menu on desktop
//       setMenuOpen(false);
//     }
//   };

//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);



  

  return (
    <nav className="bg-white shadow-md w-full z-50 sticky top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src="/Logo_drixcat.png" alt="logo" width={70} />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex lg:items-center md:space-x-6 relative">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button className="text-gray-700 cursor-pointer hover:text-[#099F4E] transition-colors duration-200 font-medium px-2 py-1 rounded inline-flex items-center">
                    {link.name}
                    <svg
                      className="ml-1 h-4 w-4 text-gray-500 group-hover:text-[#099F4E] transition"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg border border-gray-100 z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#099F4E] transition"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-[#099F4E] transition-colors duration-200 font-medium px-2 py-1 rounded"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#099F4E] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className={`h-6 w-6 transition-transform ${menuOpen ? "rotate-90" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.name}>
                  <span className="block text-gray-700 font-medium px-2 py-1 rounded">
                    {link.name}
                  </span>
                  <ul className="pl-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="block text-gray-700 hover:text-[#099F4E] px-2 py-1 rounded transition-colors duration-200"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="block text-gray-700 hover:text-[#099F4E] font-medium px-2 py-1 rounded transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
