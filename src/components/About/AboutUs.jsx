import React from "react";
import { FaLightbulb, FaEye, FaRocket, FaChalkboardTeacher, FaLaptopCode, FaCloud, FaRobot, FaUserGraduate, FaHandsHelping, FaCertificate, FaAward, FaUsers, FaRegHandshake, FaRegCheckCircle, FaRegClock, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

// Dummy images (replace with real assets)
const heroBg = "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1500&q=80";
const aboutImg = "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=800&q=80";
const achievementImgs = [
    "https://img.icons8.com/ios-filled/100/000000/trophy.png",
    "https://img.icons8.com/ios-filled/100/000000/certificate.png",
    "https://img.icons8.com/ios-filled/100/000000/event-accepted-tentatively.png"
];

const accreditations = [
  {
    src: "/Companies/aicte_acc.webp",
    alt: "aicte Logo",
  },
  {
    src: "/Companies/anna_university_chennai_acc.webp",
    alt: "anna_university_chennai Logo",
  },
  {
    src: "/Companies/autodesk.webp",
    alt: "autodesk Logo",
  },
  {
    src: "/Companies/Google_Acc.webp",
    alt: "Google Logo",
  },
    {
    src: "/Companies/google_analysis_acc.webp",
    alt: "google analysis Logo",
  },
  {
    src: "/Companies/iaf_acc.webp",
    alt: "iaf Logo",
  },
  {
    src: "/Companies/IBM_Acc.webp",
    alt: "IBM Logo",
  },
  {
    src: "/Companies/iit_delhi_acc.webp",
    alt: "IIT Delhi Logo",
  },
    {
    src: "/Companies/iit_kanpur_acc.webp",
    alt: "IIT Kanpur Logo",
  },
  {
    src: "/Companies/iit_ropar_acc.webp",
    alt: "IIT Ropar Logo",
  },
    {
    src: "/Companies/iitm_pravartak_acc.webp",
    alt: "IITM Pravartak Logo",
  },
  {
    src: "/Companies/ISO_acc.jfif",
    alt: "ISO Logo",
  },
  {
    src: "/Companies/itt_gandhinagar_acc.webp",
    alt: "ITT Gandhinagar Logo",
  },
  {
    src: "/Companies/mca_acc.png",
    alt: "MCA Logo",
  },
  {
    src: "/Companies/microsoft_certification_acc.webp",
    alt: "Microsoft Certification Logo",
  },
    {
    src: "/Companies/msde.png",
    alt: "MSDE Logo",
  },
  {
    src: "/Companies/nasscom_acc.webp",
    alt: "nasscom Logo",
  },
  {
    src: "/Companies/nsdc_acc.webp",
    alt: "nsdc Logo",
  },
  {
    src: "/Companies/otabu.webp",
    alt: "otabu Logo",
  },
    {
    src: "/Companies/skill_development_acc.webp",
    alt: "skill development Logo",
  },
  {
    src: "/Companies/Skill_India_Acc.png",
    alt: "Skill India Logo",
  },
  {
    src: "/Companies/swayam_plus.webp",
    alt: "swayam plus Logo",
  }
];

// Course categories
const courseCategories = [
    { icon: <FaLaptopCode className="text-3xl text-blue-800" />, name: "Full Stack Development" },
    { icon: <FaCloud className="text-3xl text-blue-800" />, name: "Cloud Computing" },
    { icon: <FaRobot className="text-3xl text-blue-800" />, name: "AI & ML" },
    { icon: <FaChalkboardTeacher className="text-3xl text-blue-800" />, name: "Data Science" }
];

// Features
const features = [
    {
        icon: <FaUserGraduate className="text-2xl text-blue-700" />,
        title: "Job-Oriented Training",
        desc: "Curriculum designed for real-world industry needs."
    },
    {
        icon: <FaHandsHelping className="text-2xl text-blue-700" />,
        title: "Expert Trainers",
        desc: "Learn from certified professionals and industry leaders."
    },
    {
        icon: <FaLaptopCode className="text-2xl text-blue-700" />,
        title: "Hands-On Projects",
        desc: "Build real projects to showcase your skills."
    },
    {
        icon: <FaCertificate className="text-2xl text-blue-700" />,
        title: "Recognized Certifications",
        desc: "Get certificates valued by employers."
    },
    {
        icon: <FaAward className="text-2xl text-blue-700" />,
        title: "Placement Assistance",
        desc: "Guidance and support for job placements."
    },
    {
        icon: <FaUsers className="text-2xl text-blue-700" />,
        title: "Community Support",
        desc: "Join a vibrant community of learners and mentors."
    },
    {
        icon: <FaRegHandshake className="text-2xl text-blue-700" />,
        title: "Industry Partnerships",
        desc: "Collaborations with top tech companies."
    },
    {
        icon: <FaRegCheckCircle className="text-2xl text-blue-700" />,
        title: "Flexible Learning",
        desc: "Self-paced and instructor-led options."
    }
];

// Achievements
const achievements = [
    {
        img: achievementImgs[0],
        title: "Best EdTech Startup 2023",
        desc: "Awarded for innovation in job-oriented tech education."
    },
    {
        img: achievementImgs[1],
        title: "ISO 9001:2015 Certified",
        desc: "Recognized for quality management and training standards."
    },
    {
        img: achievementImgs[2],
        title: "1000+ Successful Placements",
        desc: "Proudly placed over 1000 students in top tech companies."
    }
];

// Mission & Vision
const mission = "To empower learners with practical, job-ready skills through industry-aligned training, hands-on projects, and expert mentorship, enabling them to launch and advance successful careers in technology.";
const vision = "To bridge the gap between education and employment by becoming the most trusted platform for skill-based learning and career transformation in the digital age.";

// Framer Motion variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } }
};

const AboutUs = () => {
    // Smooth scroll to courses section
    const handleScrollToCourses = (e) => {
        e.preventDefault();
        window.location.href = "/courses";
    };

    return (
        <div className="font-sans bg-gray-50 text-gray-800">
            {/* Section 1: Hero Banner */}
            <section className="relative min-h-[60vh] flex items-center justify-center bg-blue-900 overflow-hidden">
                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: "cover",
                        opacity: 0.25
                    }}
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/90" />
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {/* SVG grid lines */}
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
                <div className="relative z-30 flex flex-col items-center text-center px-4 py-16 w-full">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
                    >
                        About Drixcat
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-gray-100 mb-8 max-w-2xl"
                    >
                        Empowering learners with skills that build real careers
                    </motion.p>
                    <motion.button
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                        onClick={handleScrollToCourses}
                        className="bg-[#50f48a] text-[#0c1818] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition"
                    >
                        Explore Courses
                    </motion.button>
                </div>
            </section>

            {/* Section 2: About Us Intro */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="md:w-1/2 w-full"
                    >
                        <img
                            src={aboutImg}
                            alt="Students learning"
                            className="rounded-2xl shadow-xl w-full object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="md:w-1/2 w-full"
                    >
                        <div className="bg-gray-50 rounded-xl shadow-md p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">About Us</h2>
                            <p className="text-gray-700 mb-4">
                                At Drixcat, our highest priority is to help students and professionals build job-oriented skills that open real career opportunities.
                            </p>
                            <p className="text-gray-700">
                                We believe that learning should not just be about gaining knowledge, but about applying it in the industry with confidence.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Mission & Vision */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Mission */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex-1 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <FaLightbulb className="text-3xl text-blue-800" />
                                <h3 className="text-xl font-bold text-blue-900">Our Mission</h3>
                            </div>
                            <p className="text-gray-700">{mission}</p>
                        </motion.div>
                        {/* Vision */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="flex-1 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <FaEye className="text-3xl text-blue-800" />
                                <h3 className="text-xl font-bold text-blue-900">Our Vision</h3>
                            </div>
                            <p className="text-gray-700">{vision}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4: What We Do */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center"
                    >
                        What We Do
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-gray-700 text-center mb-10 max-w-2xl mx-auto"
                    >
                        Drixcat is a registered IT training institute offering industry-relevant courses in emerging technologies, designed to help you build a successful tech career.
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {courseCategories.map((cat, idx) => (
                            <motion.div
                                key={cat.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition"
                            >
                                {cat.icon}
                                <span className="mt-4 text-lg font-semibold text-blue-900">{cat.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Why Choose Us */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center"
                    >
                        Why Choose Drixcat?
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {features.map((f, idx) => (
                            <motion.div
                                key={f.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition"
                            >
                                <div className="mb-3">{f.icon}</div>
                                <h4 className="font-semibold text-blue-900 mb-2">{f.title}</h4>
                                <p className="text-gray-600 text-sm">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Our Achievements */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center"
                    >
                        Our Achievements & Recognitions
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {achievements.map((a, idx) => (
                            <motion.div
                                key={a.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: idx * 0.15 }}
                                className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition"
                            >
                                <img src={a.img} alt={a.title} className="w-16 h-16 mb-4" />
                                <h4 className="font-semibold text-blue-900 mb-2">{a.title}</h4>
                                <p className="text-gray-600 text-sm">{a.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7: Accreditations */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center py-5"
                    >
                        We Are Accredited By
                    </motion.h2>
                    <div className="overflow-x-hidden">
                        <div className="flex gap-12 animate-scroll-logos items-center">
                            {accreditations.map((acc, idx) => (
                                <div
                                    key={acc.alt}
                                    className="flex-shrink-0 transition duration-300"
                                    style={{ width: 200, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    <img src={acc.src} alt={acc.alt} className="max-h-[65px] h-20 object-contain" />
                                </div>
                            ))}
                            {/* Repeat for infinite scroll effect */}
                            {accreditations.map((acc, idx) => (
                                <div
                                    key={acc.name + "-repeat"}
                                    className="flex-shrink-0  transition duration-300"
                                    style={{ width: 200, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    <img src={acc.logo} alt={acc.name} className="h-12 object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Logo scroll animation */}
                    <style>
                        {`
                            @keyframes scroll-logos {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            .animate-scroll-logos {
                                width: 200%;
                                animation: scroll-logos 18s linear infinite;
                            }
                        `}
                    </style>
                </div>
            </section>

            {/* Section 8: Call-to-Action */}
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
                        <a href="tel:+919876543210" className="text-blue-200 hover:text-white underline ml-4">+91 9876543210</a>
                    </motion.div>
                    <motion.button
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        onClick={handleScrollToCourses}
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
        </div>
    );
};

export default AboutUs;