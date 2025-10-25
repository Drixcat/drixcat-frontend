import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaEye, FaRocket, FaChalkboardTeacher, FaLaptopCode, FaCloud, FaRobot, FaUserGraduate, FaHandsHelping, FaCertificate, FaAward, FaUsers, FaRegHandshake, FaRegCheckCircle, FaRegClock, FaLinkedin, FaTwitter } from "react-icons/fa";

import { useNavigate } from "react-router-dom";



const heroBg = "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1500&q=80";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } }
};

const GetInTouch = () => {
    const navigate = useNavigate();
    return (
            <section className="relative min-h-[40vh] flex items-center justify-center bg-blue-900 overflow-hidden">
                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: "cover",
                        opacity: 0.18
                    }}
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/90" />
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {/* SVG grid lines */}
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid2)" />
                    </svg>
                </div>
                <div className="relative z-30 flex flex-col items-center text-center px-4 py-16 w-full">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-bold text-white mb-4"
                    >
                        Join us on our mission to bridge the gap between skills and careers.
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-gray-100 mb-2"
                    >
                        Still have queries? Contact us at:
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-6"
                    >
                        <a href="mailto:info@drixcat.com" className="text-blue-200 hover:text-white underline mr-4">info@drixcat.com</a>
                        <span className="text-blue-200">|</span>
                        <a href="tel:+91-9953356262" className="text-blue-200 hover:text-white underline ml-4">+91-9953356262</a>
                    </motion.div>
                    <motion.button
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        onClick={()=>navigate('/contact')}
                        className="bg-[#50f48a] text-[#0c1818] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition mb-6"
                    >
                        Join Our Program
                    </motion.button>
                    <div className="flex gap-6 justify-center">
                        <a href="https://linkedin.com/company/drixcat" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white text-2xl transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/drixcat" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white text-2xl transition">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </section>
    );
};

export default GetInTouch;