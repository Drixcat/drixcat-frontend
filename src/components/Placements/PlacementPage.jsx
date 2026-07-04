import React from "react";
import {
  FaUserTie,
  FaClipboardCheck,
  FaHandshake,
  FaBriefcase,
  FaChartLine,
  FaArrowUp,
  FaUserGraduate,
  FaNetworkWired,
  FaRegEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AluminiCards from "../AluminiCards/AluminiCards";

const heroBg =
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1500&q=80";
const aboutImg =
  "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=800&q=80";

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

// Recruiter logos (replace with actual logo images in production)
const logos1 = [
    {name:"Accenture",src:"/Students_Work/accenture.webp"},
    {name:"Amazon",src:"/Students_Work/amazon.webp"},
    {name:"Aspire",src: "/Students_Work/aspire.webp"},
    {name:"Capgemini",src: "/Students_Work/capgemini.webp"},
    {name:"Caratlane",src:"/Students_Work/caratlane.webp"},
    {name:"Cartoon Mango",src: "/Students_Work/cartoon-mango.webp"},
    {name:"Cognizant",src:"/Students_Work/cognizant.webp"},
    {name:"Comcast",src: "/Students_Work/comcast.webp"},
     {name:"Fiserv",src: "/Students_Work/fiserv.webp"}


  
  

];
const logos2 = [

     {name:"Grappus",src: "/Students_Work/grappus.webp",},
    {name:"HCL",src:"/Students_Work/hcl.webp"},
    {name:"IBM",src: "/Students_Work/ibm.webp"},
    {name:"Infosys",src: "/Students_Work/infosys.webp"},
    {name:"JLL",src: "/Students_Work/jll.webp"},
    {name:"Just-Dial",src: "/Students_Work/just-dial.webp"},
    {name:"Klenty",src:"/Students_Work/klenty.webp"},
    {name:"Larsen",src: "/Students_Work/larsen.webp"},
     {name:"Lenovo",src:  "/Students_Work/lenovo.webp"}
 
 
];
const logos3 = [



       {name:"PayPal",src:"/Students_Work/paypal.webp"},
    {name:"Siemens",src:"/Students_Work/siemens.webp"},
    {name:"TCS",src: "/Students_Work/tcs.webp"},
    {name:"Tech Mahindra",src:  "/Students_Work/tech-mahindra.webp"},
    {name:"ThoughtworksL",src: "/Students_Work/thoughtworks.webp"},
    {name:"Virtusa",src: "/Students_Work/virtusa.webp"},
    {name:"Wipro",src: "/Students_Work/wipro.webp"},
    {name:"Zoho",src: "/Students_Work/zoho.webp"},
  


];

const recruiters = [...logos1, ...logos2, ...logos3];

// Placement Approach Cards
const approach = [
  {
    icon: <FaUserTie className="text-3xl text-navy-600" />,
    title: "Career Guidance",
    desc: "Personalized counseling to align your strengths with the right career path.",
  },
  {
    icon: <FaClipboardCheck className="text-3xl text-navy-600" />,
    title: "Mock Interviews",
    desc: "Realistic interview simulations with expert feedback to boost your confidence.",
  },
  {
    icon: <FaRegEnvelope className="text-3xl text-navy-600" />,
    title: "Resume Support",
    desc: "Professional resume building and review to showcase your skills.",
  },
  {
    icon: <FaUserGraduate className="text-3xl text-navy-600" />,
    title: "Internships & Exposure",
    desc: "Hands-on internships and live projects for real-world experience.",
  },
  {
    icon: <FaNetworkWired className="text-3xl text-navy-600" />,
    title: "Industry Networking",
    desc: "Connect with industry leaders and alumni for better opportunities.",
  },
];

// Salary Cards
const salaryCards = [
  {
    icon: <FaBriefcase className="text-4xl text-navy-600" />,
    role: "Fresh Graduates",
    range: "₹3–6 LPA",
  },
  {
    icon: <FaChartLine className="text-4xl text-navy-600" />,
    role: "Mid-Level Professionals",
    range: "₹6–12 LPA",
  },
  {
    icon: <FaArrowUp className="text-4xl text-navy-600" />,
    role: "Senior Roles",
    range: "₹15 LPA and above",
  },
];

// Timeline Steps
const timeline = [
  {
    icon: <FaUserTie className="text-xl text-navy-600" />,
    label: "Personalized Career Support",
  },
  {
    icon: <FaClipboardCheck className="text-xl text-navy-600" />,
    label: "Mock Interviews & Resume Reviews",
  },
  {
    icon: <FaHandshake className="text-xl text-navy-600" />,
    label: "Internships & Live Projects",
  },
  {
    icon: <FaNetworkWired className="text-xl text-navy-600" />,
    label: "Alumni & Industry Networking",
  },
];

// Placement Highlights
const highlights = [
  {
    icon: <FaClipboardCheck />,
    title: "End-to-End Career Support",
    desc: "From counseling to placement, we guide you at every step.",
  },
  {
    icon: <FaHandshake />,
    title: "Top Recruiters",
    desc: "Our students are placed in leading global organizations.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Hands-On Industry Exposure",
    desc: "Real projects and internships for practical learning.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Strong Alumni & Network Support",
    desc: "Leverage our alumni network for mentorship and referrals.",
  },
];

// Helper: Navy color
const navy = "bg-[#0a2342]";

// Helper: Section wrapper
const Section = ({ children, className = "" }) => (
  <section className={`w-full py-12 px-4 md:px-12 ${className}`}>
    {children}
  </section>
);

const Placement = () => {
  // Smooth scroll to programs section
  const scrollToPrograms = () => {
    const el = document.getElementById("placement-programs");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToCourses = (e) => {
    e.preventDefault();
    window.location.href = "/courses";
  };

  return (
    <div className="font-sans bg-gray-50 text-navy-900">
      {/* Section 1: Hero Banner */}
      {/* <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background image with navy overlay and grid */}
      {/* <div className="absolute inset-0 bg-black/30">
                   
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a2342]/90 via-[#0a2342]/90 to-[#0a2342]" /> */}
      {/* Grid lines */}
      {/* <svg className="absolute inset-0 w-full h-full opacity-20" width="100%" height="100%">
                        <defs>
                            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div> */}
      {/* Content */}
      {/* <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center max-w-2xl mx-auto text-white"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                        Career Growth &amp; Job Placement
                    </h1>
                    <p className="text-lg md:text-xl mb-2 font-medium">
                        Helping you shape your career with the right opportunities.
                    </p>
                    <p className="mb-6 text-base md:text-lg font-light">
                        At Drixcat, we are proud of our <span className="font-semibold text-yellow-300">89% placement rate</span> — a reflection of our commitment to real-world success.
                    </p>
                    <button
                        onClick={scrollToPrograms}
                        className="bg-[#50f48a]  hover:bg-[#099f4e] text-[#0c1818] font-semibold px-6 py-3 rounded-2xl shadow transition cursor-pointer"
                    >
                        Explore Programs
                    </button>
                </motion.div>
            </section> */}

      <section className="relative min-h-[60vh] flex items-center justify-center bg-blue-900 overflow-hidden">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/90" />
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* SVG grid lines */}
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="0.5"
                />
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
            Career Growth &amp; Job Placement
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-100 mb-2 max-w-2xl"
          >
            Helping you shape your career with the right opportunities.
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-100 mb-8 max-w-2xl"
          >
            At Drixcat Institute of AI, we are proud of our{" "}
            <span className="font-semibold text-[#50f48a]">
              89% placement rate
            </span>{" "}
            — a reflection of our commitment to real-world success.
          </motion.p>

          <motion.button
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            onClick={handleScrollToCourses}
            className="bg-[#50f48a] text-[#0c1818] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#099f4e] cursor-pointer transition"
          >
            Explore Courses
          </motion.button>
        </div>
      </section>

      {/* Section 2: Placement Success Overview */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 w-full"
          >
            <img
              src="https://st.depositphotos.com/1907633/2182/i/450/depositphotos_21829337-stock-photo-businessman-hand-pushing-solution-graph.jpg"
              alt="Placement Success"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2 w-full"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-900">
              Placement Rate &amp; Student Success
            </h2>
            <p className="text-lg mb-2">
              Our{" "}
              <span className="font-semibold text-[#099f4e]">
                89% placement rate
              </span>{" "}
              stands as a testament to our rigorous training and
              industry-aligned curriculum.
            </p>
            <p className="text-base mb-2">
              Drixcat Institute of AI graduates are placed in top companies like TCS, Accenture,
              Infosys, Cognizant, HCL, and more.
            </p>
            <p className="text-base">
              We focus on real-world skills, hands-on projects, and continuous
              support to ensure every student achieves their career goals.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white">
        <AluminiCards title={"Our Placements"}/>
      </Section>

      {/* Section 3: Our Placement Approach */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-blue-900 font-bold text-center mb-8"
        >
          Our Placement Approach
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {approach.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition p-6 flex flex-col items-center text-center"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 4: Top Recruiters */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl text-blue-900 font-bold mb-2">
            Companies Hiring Our Students
          </h2>
          <p className="text-lg mb-4">
            Drixcat Institute of AI graduates are working in top organizations across the globe.
          </p>
          <div className="text-sm text-gray-500 mb-2">Trusted By</div>
          {/* Marquee */}
          <div className="overflow-x-hidden relative py-4">
            <div className="flex gap-10 animate-marquee whitespace-nowrap">
              {recruiters.concat(recruiters).map((rec, idx) => (
                <div
                  key={rec.name + idx}
                  className="inline-block  transition duration-300"
                  style={{ width: 200, height: 80 }}
                >
                  <img
                    src={rec.src}
                    alt={rec.name}
                    className="h-full w-auto mx-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Marquee animation */}
          <style>{`
                        @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-marquee {
                            display: flex;
                            animation: marquee 25s linear infinite;
                            width: max-content;
                        }
                    `}</style>
        </div>
      </Section>

      {/* Section 5: Salary Growth & Packages */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-900 text-center mb-8"
        >
          Salary Growth &amp; Packages
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto justify-center">
          {salaryCards.map((card, i) => (
            <motion.div
              key={card.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition p-8 flex flex-col items-center text-center "
            >
              <div className="mb-3 text-blue-900">{card.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{card.role}</h3>
              <p className="text-xl font-bold text-[#808098]">{card.range}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 6: How We Ensure Placement Success */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 w-full"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-900">
              How We Ensure Placement Success
            </h2>
            <p className="text-lg mb-2">
              We offer{" "}
              <span className="font-semibold text-[#099f4e]">
                personalized career support
              </span>
              , hands-on internships, live projects, and a strong alumni network
              to maximize your placement chances.
            </p>
            <p className="text-base">
              Our dedicated placement cell works with you at every step — from
              resume building to final interviews — ensuring you are
              industry-ready.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2 w-full"
          >
            <ol className="relative border-l-2 border-navy-200 pl-6">
              {timeline.map((step, i) => (
                <motion.li
                  key={step.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="mb-8 flex items-start"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-navy-100 mr-4 shadow text-blue-900">
                    {step.icon}
                  </span>
                  <span className="text-base font-medium">{step.label}</span>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </Section>

      {/* Section 7: Placement Highlights */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-blue-900 font-bold text-center mb-8"
        >
          Placement Highlights at Drixcat Institute of AI
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
            >
              <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-full bg-[#0a2342] text-white text-2xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 8: Call-to-Action / Contact */}
      {/* <section className="relative py-16 px-4 md:px-12" id="placement-programs"> */}
      {/* Background with navy, grid, and overlay */}
      {/* <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-[#0a2342] opacity-95" /> */}
      {/* Grid lines */}
      {/* <svg className="absolute inset-0 w-full h-full opacity-20" width="100%" height="100%">
                        <defs>
                            <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid2)" />
                    </svg>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-2xl mx-auto text-center text-white"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        We Don’t Just Help You Get a Job — We Help You Build a Career
                    </h2>
                    <p className="text-lg mb-2">
                        Have questions? Reach us at:
                    </p>
                    <div className="mb-4">
                        <a href="mailto:info@drixcat.com" className="underline hover:text-yellow-400">info@drixcat.com</a>
                        <span className="mx-2">|</span>
                        <a href="tel:+919876543210" className="underline hover:text-yellow-400">+91 9876543210</a>
                    </div>
                    <button
                        onClick={scrollToPrograms}
                        className="bg-[#50f48a]  hover:bg-[#099f4e] text-[#0c1818] font-semibold px-6 py-3 rounded-2xl shadow transition mb-6"
                    >
                        Join Our Program
                    </button>
                    <div className="flex justify-center gap-6 mt-6">
                        <a href="https://linkedin.com/company/drixcat" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/drixcat" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-2xl">
                            <FaTwitter />
                        </a>
                    </div>
                </motion.div>
            </section> */}

      <section className="relative min-h-[60vh] flex items-center justify-center bg-blue-900 overflow-hidden">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/90" />
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* SVG grid lines */}
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-30 flex flex-col items-center text-center px-4 py-16 w-full">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg"
          >
            We Don’t Just Help You Get a Job —<br /> We Help You Build a Career
          </motion.h2>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-100 mb-2 max-w-2xl"
          >
            Have questions? Reach us at:
          </motion.p>

          <div className="mb-4">
            <a
              href="mailto:info@drixcat.com"
              className="underline text-white hover:text-[#808098] "
            >
              info@drixcat.com
            </a>
            <span className="mx-2 text-white">|</span>
            <a
              href="tel:+91-9953356262"
              className="underline text-white hover:text-[#808098]"
            >
              +91-9953356262
            </a>
          </div>
          <button
            onClick={scrollToPrograms}
            className="bg-[#50f48a]  hover:bg-[#099f4e] text-[#0c1818] font-semibold px-6 py-3 rounded-2xl shadow transition mb-6"
          >
            Join Our Program
          </button>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.linkedin.com/company/edutech-masters/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#808098] text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/drixcat_education?igsh=dGc3dzd4YWViZWtl&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#808098] text-2xl"
            >
              <FaInstagram />
            </a>
               <a
              href="https://www.facebook.com/share/1CULc3aAph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#808098] text-2xl"
            >
              <FaFacebook />
            </a>
               <a
              href="https://t.me/Drixcatplacementupdate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#808098] text-2xl"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placement;
