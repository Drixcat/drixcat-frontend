import React from "react";
import {

FaFacebookF,
FaTwitter,
FaLinkedinIn,
FaInstagram,
FaYoutube,
} from "react-icons/fa";

const footerLinks = [
{
    title: "Quick Links",
    links: [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
        { name: "Mentors", href: "/mentors" },
        { name: "Certificates", href: "/certificates" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
},
];

const socialLinks = [
{
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/share/19C8eurvzR/?mibextid=wwXIfr ",
    label: "Facebook",
},
{
    icon: <FaTwitter />,
    href: "https://twitter.com",
    label: "Twitter",
},
{
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com",
    label: "LinkedIn",
},
{
    icon: <FaInstagram />,
    href: "https://www.instagram.com/drixcat_education?igsh=dGc3dzd4YWViZWtl&utm_source=qr",
    label: "Instagram",
},
{
    icon: <FaYoutube />,
    href: "https://youtube.com",
    label: "YouTube",
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
                        {/* Replace with your logo */}
                        <span className="text-2xl font-bold text-primary-500 tracking-tight">
                            Drixcat
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Empowering learners, connecting mentors, and building futures together.
                    </p>
                </div>

                {/* Center: Quick Links */}
                <div className="flex flex-col items-start md:items-center">
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-lg font-semibold mb-2 text-primary-400">
                                {group.title}
                            </h4>
                            <ul className="space-y-1">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="hover:text-primary-400 transition-colors duration-150"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Right: Social Media */}
                <div className="flex flex-col items-start md:items-end">
                    <h4 className="text-lg font-semibold mb-2 text-primary-400">
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
                                className="p-2 rounded-full bg-gray-800 hover:bg-primary-500 text-gray-300 hover:text-white transition-colors duration-150"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <div className="text-gray-400 text-sm space-y-1 text-right">
                        <div>Noida Office : 1ST & 3RD FLOOR, BLOCK-B-40/B-3,SECTOR-1,NEAR LEMON TREE HOTEL, NOIDA - 201301</div>
                        <div className="mt-4">
                           Registered Office : 9/1 261, Vashundhra, Ghaziabad, Uttar Pradesh - 201012
                        </div>
                        <div>
                            <a
                                href="mailto:drixcatofficial@gmail.com"
                                className="hover:text-primary-400 transition-colors"
                            >
                                drixcatofficial@gmail.com
                            </a>
                        </div>
                        <div>
                            <a
                                href="tel:+9199533 56262"
                                className="hover:text-primary-400 transition-colors"
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
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
                <span>
                    &copy; {new Date().getFullYear()} Drixcat. All rights reserved.
                </span>
                <span className="mt-2 md:mt-0">
                    Designed with <span className="text-primary-400">♥</span> for learners & mentors.
                </span>
            </div>
        </div>
    </footer>
);
};

export default Footer;