import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTelegram,
  
} from "react-icons/fa";
import {
  HiUserGroup,
  HiBuildingOffice2,
  HiInformationCircle,
  HiPhone,
} from "react-icons/hi2";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Courses", href: "/courses" },
      { name: "Certificates", href: "/certificates" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/share/1CULc3aAph/",
    label: "Facebook",
  },
 
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/edutech-masters/posts/?feedView=all", label: "LinkedIn" },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/drixcat_education?igsh=dGc3dzd4YWViZWtl&utm_source=qr",
    label: "Instagram",
  },
   {
    icon: <FaTelegram/>,
    href: "https://t.me/Drixcatplacementupdate",
    label: "Telegram",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-200 pt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-8">
          {/* Left: Logo & Tagline */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-3">
              <span className="text-2xl font-bold text-gray-100 tracking-tight">
                Drixcat Institute of AI
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering learners, connecting mentors, and building futures
              together.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col items-start md:items-center">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-lg font-semibold mb-2 text-gray-100 underline">
                  {group.title}
                </h4>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="hover:text-[#50f48a] transition-colors duration-150"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: Social Media + Address + Contacts */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-lg font-semibold mb-2 text-gray-100 underline">
              Follow Us
            </h4>
            <div className="flex space-x-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full bg-gray-800 hover:bg-[#50f48a] text-gray-300 hover:text-[#0c1818] transition-colors duration-150"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Address & Contact Info */}
            <div className="text-gray-400 text-sm space-y-3 text-left md:text-right w-full md:w-auto">
              {/* Addresses */}
              <div>
                <p className="font-medium text-gray-300">Noida Office:</p>
                <p className="leading-relaxed">
                  BLOCK-B-40/B-3, SECTOR-1, NEAR LEMON TREE
                  HOTEL, NOIDA - 201301
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-300">Registered Office:</p>
                <p className="leading-relaxed">
                  9/1 261, Vashundhra, Ghaziabad, Uttar Pradesh - 201012
                </p>
              </div>

              {/* Emails */}
              <div className="flex flex-col md:items-end gap-2 sm:gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <HiUserGroup className="text-lg" />
                  <a
                    href="mailto:hr@drixcat.com"
                    className="hover:text-[#50f48a] underline"
                  >
                    hr@drixcat.com
                  </a>
                </div>

               

                <div className="flex items-center space-x-2">
                  <HiBuildingOffice2 className="text-lg" />
                  <a
                    href="mailto:corporate@drixcat.com"
                    className="hover:text-[#50f48a] underline"
                  >
                    corporate@drixcat.com
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <HiInformationCircle className="text-lg" />
                  <a
                    href="mailto:info@drixcat.com"
                    className="hover:text-[#50f48a] underline"
                  >
                    info@drixcat.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex justify-start sm:justify-end  space-x-2 mt-2">
                <HiPhone className="text-lg" />
                <a
                  href="tel:+919953356262"
                  className="hover:text-[#50f48a] transition-colors"
                >
                  +91-99533 56262
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 text-center md:text-left">
          <span>
            &copy; {new Date().getFullYear()} Drixcat. All rights reserved.
          </span>
          <span className="mt-2 md:mt-0">
            Designed with <span className="text-[#50f48a]">♥</span> for learners
            & mentors.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
