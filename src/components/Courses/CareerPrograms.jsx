import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import  courses  from "./courses";
import { FaAward,FaGlobe,FaHandshake  } from "react-icons/fa";
import axios from "axios";
import API_BASE_URL from "../../config";




// Dummy data for courses, accreditations, achievements, mentors, benefits
const ACCREDITATIONS = [
  {
    img: "/Companies/aicte_acc.webp",
    alt: "aicte Logo",
  },
  {
    img: "/Companies/anna_university_chennai_acc.webp",
    alt: "anna_university_chennai Logo",
  },
  {
    img: "/Companies/autodesk.webp",
    alt: "autodesk Logo",
  },
  {
    img: "/Companies/Google_Acc.webp",
    alt: "Google Logo",
  },
  {
    img: "/Companies/google_analysis_acc.webp",
    alt: "google analysis Logo",
  },
  {
    img: "/Companies/iaf_acc.webp",
    alt: "iaf Logo",
  },
  {
    img: "/Companies/IBM_Acc.webp",
    alt: "IBM Logo",
  },
  {
    img: "/Companies/iit_delhi_acc.webp",
    alt: "IIT Delhi Logo",
  },
  {
    img: "/Companies/iit_kanpur_acc.webp",
    alt: "IIT Kanpur Logo",
  },
  {
    img: "/Companies/iit_ropar_acc.webp",
    alt: "IIT Ropar Logo",
  },
  {
    img: "/Companies/iitm_pravartak_acc.webp",
    alt: "IITM Pravartak Logo",
  },
  {
    img: "/Companies/ISO_acc.jfif",
    alt: "ISO Logo",
  },
  {
    img: "/Companies/itt_gandhinagar_acc.webp",
    alt: "ITT Gandhinagar Logo",
  },
  {
    img: "/Companies/mca_acc.png",
    alt: "MCA Logo",
  },
  {
    img: "/Companies/microsoft_certification_acc.webp",
    alt: "Microsoft Certification Logo",
  },
  {
    img: "/Companies/msde.png",
    alt: "MSDE Logo",
  },
  {
    img: "/Companies/nasscom_acc.webp",
    alt: "nasscom Logo",
  },
  {
    img: "/Companies/nsdc_acc.webp",
    alt: "nsdc Logo",
  },
  {
    img: "/Companies/otabu.webp",
    alt: "otabu Logo",
  },
  {
    img: "/Companies/skill_development_acc.webp",
    alt: "skill development Logo",
  },
  {
    img: "/Companies/Skill_India_Acc.png",
    alt: "Skill India Logo",
  },
  {
    img: "/Companies/swayam_plus.webp",
    alt: "swayam plus Logo",
  },
];



const ACHIEVEMENTS = [
  {
    icons:<FaAward/>,
    title: "Best EdTech Startup 2023",
    desc: "Recognized for innovation in tech education by EdTech India.",
  },
  {
   icons:<FaGlobe/>,
    title: "Global Impact Award",
    desc: "Awarded for empowering 10,000+ students globally.",
  },
  {
    icons:<FaHandshake/>,
    title: "Top Industry Collaboration",
    desc: "Partnered with 50+ leading tech companies for real-world projects.",
  },
];

const MENTOR_COMPANIES = [
  { name: "Google", img: "Google_2015_logo.svg.webp" },
  { name: "Amazon", img: "Amazon_logo.svg.webp" },
  { name: "Microsoft", img: "Microsoft_logo.webp" },
  { name: "Tech Mahindra", img: "Tech_Mahindra_New_Logo.svg.png" },
];

const BENEFITS = [
  { icon: "🎓", text: "Globally recognized certifications" },
  { icon: "💼", text: "Job-ready skills & portfolio" },
  { icon: "🤝", text: "1:1 mentorship from industry experts" },
  { icon: "🌎", text: "Flexible online/offline learning" },
  { icon: "📈", text: "Career guidance & placement support" },
  { icon: "🛠️", text: "Hands-on real-world projects" },
  { icon: "🏆", text: "Access to alumni network" },
  { icon: "📚", text: "Lifetime access to learning resources" },
];

const SOCIALS = [
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
      </svg>
    ),
    url: "https://linkedin.com/company/drixcat",
  },
  {
    name: "WhatsApp",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48a12.07 12.07 0 0 0-17.04 0c-4.7 4.7-4.7 12.34 0 17.04a12.07 12.07 0 0 0 17.04 0c4.7-4.7 4.7-12.34 0-17.04zm-8.52 17.02c-1.7 0-3.36-.33-4.91-.98l-5.19 1.36 1.36-5.19c-.65-1.55-.98-3.21-.98-4.91 0-6.07 4.93-11 11-11s11 4.93 11 11-4.93 11-11 11zm5.19-7.36c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
      </svg>
    ),
    url: "https://wa.me/919876543210",
  },
];

function scrollToSection(ref) {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
}

export default function CareerPrograms() {
  const exploreRef = useRef(null);



  


  // Form state
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    currentProfile: "",
    graduationYear: "",
    languageSpoken: "",
  });
  const [formSent, setFormSent] = React.useState(false);
const[isLoading,setIsLoading] = useState(false)

  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleFormReset() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      qualification: "",
      currentProfile: "",
      graduationYear: "",
      languageSpoken: "",
    });
    setFormSent(false);
  }
  async function handleFormSubmit(e) {
    e.preventDefault();
     setIsLoading(true)
    // Here you would send the form data to your backend

    const res = await axios.post(`${API_BASE_URL}/contact/talktoexpert`,formData,{
      headers:{
        "Content-Type":"application/json"
      }
    })

    if(res.data.success){
      // setSendSuccess(true)
         setFormSent(true);
          setIsLoading(false)
       setFormData({
      name: "",
      email: "",
      phone: "",
      qualification: "",
      currentProfile: "",
      graduationYear: "",
      languageSpoken: "",
    });

    }else{
      alert('something went wrong!')
      setIsLoading(false)
       setFormData({
      name: "",
      email: "",
      phone: "",
      qualification: "",
      currentProfile: "",
      graduationYear: "",
      languageSpoken: "",
    });
    }

   
  }

  useEffect(()=>{

    if(formSent){
      setTimeout(()=>{
        setFormSent(false)

      },3000)
    }
  },[formSent])

  return (
    <div
      className="font-sans bg-white min-h-screen"
      style={{ fontFamily: "'Nunito', 'Inter', 'Segoe UI', Arial, sans-serif" }}
    >
      {/* Section 1: Hero */}
      <section
        className="relative w-full min-h-[420px] flex items-center justify-center px-4 md:px-8 lg:px-16"
        style={{
          backgroundColor: "#0c1818",
          backgroundImage:
            "repeating-linear-gradient(0deg, #23234a22 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, #23234a22 0 1px, transparent 1px 40px)",
        }}
      >
        <div className="w-full max-w-3xl flex flex-col items-center text-center py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Tech Career Programs
          </h1>
          <ul className="text-white text-lg md:text-xl mb-4 space-y-2 text-left md:text-left flex flex-col items-start">
            <li className="flex items-center gap-2 text-[#808098]">
              <span className="inline-block text-[#50f48a]">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#50f48a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Mentors from top global product companies
            </li>
            <li className="flex items-center gap-2 text-[#808098]">
              <span className="inline-block text-[#50f48a]">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#50f48a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              A portfolio of real-world projects
            </li>
            <li className="flex items-center gap-2 text-[#808098]">
              <span className="inline-block text-[#50f48a]">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#50f48a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Globally recognized certifications
            </li>
          </ul>
          <div className="text-[#d1d1e0] mb-6 text-base md:text-lg">
            Online/Offline classes available
          </div>
          <button
            className="bg-[#50f48a] hover:bg-[#099f4e] text-[#0C1818] font-semibold rounded-lg py-2 px-5 transition-colors duration-200 shadow-md"
            onClick={() => scrollToSection(exploreRef)}
          >
            Explore Programs
          </button>
        </div>
      </section>

      {/* Section 2: About Accreditation */}
      <section className="bg-white py-17 px-8 md:px-8 lg:px-16">
        <div className="max-w-8xl mx-auto text-center">
          <h2 className="text-[#099f4e] font-bold text-3xl md:text-4xl mb-4">
            Leading EdTech Platform
          </h2>
          <p className="text-[#808098] max-w-2xl mx-auto mb-8 text-lg">
            Drixcat empowers learners with industry-driven tech programs,
            hands-on mentorship, and globally recognized certifications to
            launch and accelerate your career.
          </p>
          <div className="text-[#0c1818] font-semibold mb-4 text-lg">
            We Are Accredited By
          </div>
          <div className="flex flex-wrap justify-center items-center gap-16">
            {ACCREDITATIONS.map((a) => (
              <img
                key={a.name}
                src={a.img}
                alt={a.name}
                className="max-w-[220px] h-14 w-auto object-contain  transition"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Explore Career Program */}
      <section
        ref={exploreRef}
        className="bg-[#f4f4fb] py-12 px-4 md:px-8 lg:px-16"
      >
        <div className="max-w-8xl mx-auto">
          <h2 className="text-[#099f4e] font-bold text-3xl text-center mb-10">
            Explore Career Program
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {Object.keys(courses).map((course, idx) => (
              <div
                key={""}
                className="bg-white h-95 w-80 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col overflow-hidden"
              >
                <img
                  src={courses[course].image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col p-4">
                  <div className="text-lg font-semibold text-[#0c1818] mb-2">
                    {course}
                  </div>
                  <div className="text-[#808098] mb-4 flex-1 whitespace-pre-line text-sm">
                    {courses[course].description}
                  </div>
                  <div className="flex items-center justify-between mt-2 text-sm gap-3">
                    <Link to={`/courses/${course.toLowerCase().replace(/\s+/g,"-")}`} className="flex-1">
                      <motion.button
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                        className="bg-[#50f48a] w-full text-[#0c1818] font-semibold px-8 py-3 rounded-md shadow-lg  hover:bg-[#099f4e] cursor-pointer transition"
                      >
                        Know More
                      </motion.button>
                    </Link>
                    <span className="flex items-center gap-1 text-[#808098] shrink-0">
                      {/* <svg
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                          fill="#099f4e"
                        />
                      </svg>
                      {course.students} */}
   

                     

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#099f4e" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

{courses[course].subcourses.length} Courses

                    </span>
                    {/* <span className="flex items-center gap-1 text-[#808098]">
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 8v5l4.28 2.54"
                          stroke="#099f4e"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#099f4e"
                          strokeWidth="2"
                        />
                      </svg>
                      {course.duration}
                    </span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Talk to Our Experts */}
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#099f4e] font-bold text-2xl md:text-3xl text-center mb-2">
            Don’t Know Which Program to Choose?
          </h2>
          <div className="text-center text-lg text-[#0c1818] mb-6">
            Talk to Our Experts
          </div>
          <form
            className="bg-[#f4f4fb] shadow-lg p-6 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleFormSubmit}
            autoComplete="off"
          >
            <div>
              <label className="block text-[#808098] mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full rounded-lg border border-[#e0e0f0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#50f48a] bg-white transition"
              />
            </div>
            <div>
              <label className="block text-[#808098] mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full rounded-lg border border-[#e0e0f0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#50f48a] bg-white transition"
              />
            </div>
            <div>
              <label className="block text-[#808098] mb-1 font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                className="w-full rounded-lg border border-[#e0e0f0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#50f48a] bg-white transition"
                pattern="[6-9][0-9]{9}"
              />
            </div>
            <div>
              <label className="block text-[#808098] mb-1 font-medium">
                Education Qualification
              </label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleFormChange}
                className="w-full rounded-lg border border-[#e0e0f0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#50f48a] bg-white transition"
              />
            </div>
            <div>
              <label className="block text-[#808098] mb-1 font-medium">
                Current Profile
              </label>
              <input
                type="text"
                name="currentProfile"
                value={formData.currentProfile}
                onChange={handleFormChange}
                className="w-full rounded-lg border border-[#e0e0f0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#50f48a] bg-white transition"
                placeholder="e.g., Student"
              />
            </div>
            <div>
              <label className="block text-[#808098] mb-1 font-medium">
                Year of Graduation
              </label>
              <input
                type="month"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleFormChange}
                className="w-full rounded-lg border border-[#e0e0f0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#50f48a] bg-white transition"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[#808098] mb-1 font-medium">
                Languages Spoken
              </label>
              <input
                type="text"
                name="languageSpoken"
                value={formData.languageSpoken}
                onChange={handleFormChange}
                className="w-full rounded-lg border border-[#e0e0f0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#50f48a] bg-white transition"
              />
            </div>
            <div className="md:col-span-2 flex gap-4 justify-end mt-2">
              <button
                type="submit"
                className="bg-[#50f48a] hover:bg-[#099f4e] text-[#0C1818] font-semibold rounded-lg py-2 px-6 transition-colors duration-200 shadow"
              >
                {!isLoading ? "Send Request" : "Sending..."}
              </button>
              <button
                type="button"
                className="border border-[#099f4e] hover:bg-[#099f4e]/10 text-[#099f4e] font-semibold rounded-lg py-2 px-6 transition-colors duration-200"
                onClick={handleFormReset}
              >
                Reset
              </button>
            </div>
            {formSent && (
              <div className="md:col-span-2 text-green-600 text-center font-medium mt-2">
                Thank you! Our experts will contact you soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Section 5: Our Achievements & Awards */}
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
        <h2 className="text-[#099f4e] font-bold text-3xl text-center mb-6">
          Our Achievements & Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ACHIEVEMENTS.map((a) => (
            <div
              key={a.title}
              className="bg-[#f4f4fb] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center p-6"
            >
              <span className="text-3xl text-[#808098] mb-4">
                {a.icons}
              </span>
              <div className="font-semibold text-lg text-[#0c1818] mb-2 text-center">
                {a.title}
              </div>
              <div className="text-[#808098] text-center">{a.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Learn from Top Industry Experts */}
      <section className="bg-[#f4f4fb] py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#099f4e] font-bold text-2xl md:text-3xl mb-3">
            Learn from Top Industry Experts
          </h2>
          <p className="text-[#808098] max-w-3xl mx-auto mb-8 text-lg">
            Our mentors hail from the world’s leading tech companies, bringing
            real-world experience and insights to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-15">
            {MENTOR_COMPANIES.map((c) => (
              <img
                key={c.name}
                src={c.img}
                alt={c.name}
                className="h-14 w-auto object-contain hover:scale-105 transition duration-200"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Benefits of Career Programs */}
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#099f4e] font-bold text-2xl md:text-3xl text-center mb-8">
            Benefits of Career Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 mb-8">
            {BENEFITS.map((b, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-2xl md:text-3xl">{b.icon}</span>
                <span className="text-[#808098] text-lg">{b.text}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[#50f48a] hover:bg-[#099f4e] text-[#0C1818] font-semibold rounded-lg py-2 px-6 transition-colors duration-200 shadow"
              onClick={() => scrollToSection(exploreRef)}
            >
              Join Our Program
            </button>
          </div>
        </div>
      </section>

      {/* Section 8: Still Have Queries? */}
      <section
        className="relative w-full min-h-[320px] flex items-center justify-center px-4 md:px-8 lg:px-16"
        style={{
          backgroundColor: "#0c1818",
          backgroundImage:
            "repeating-linear-gradient(0deg, #23234a22 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, #23234a22 0 1px, transparent 1px 40px)",
        }}
      >
        <div className="w-full max-w-2xl flex flex-col items-center text-center py-12">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Still Have Queries?
          </h2>
          <div className="text-[#50f48a] text-lg font-semibold mb-4">
            Contact Us
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 text-white text-base">
            <span className="flex items-center gap-2">
              <span role="img" aria-label="email">
                ✉️
              </span>
              info@drixcat.com
            </span>
            <span className="hidden md:inline-block">|</span>
            <span className="flex items-center gap-2">
              <span role="img" aria-label="phone">
                ☎️
              </span>
              +91-9953356262
            </span>
          </div>
          <div className="flex gap-4 mt-2">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#50f48a] transition"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
