import React, { useEffect } from "react";
import { FaUserTie, FaChalkboardTeacher, FaLaptopCode, FaAward,FaUserCog, FaUsers  } from "react-icons/fa";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config";
import { HiCheckCircle, HiXCircle } from "react-icons/hi2";
// List of logo objects
const logos = [
  {
    src: "/Companies/aicte_acc.webp",
    alt: "aicte Logo",
  },
  {
    src: "/Companies/anna_university_chennai_acc.webp",
    alt: "anna_university_chennai Logo",
  },
  // {
  //   src: "/Companies/autodesk.webp",
  //   alt: "autodesk Logo",
  // },
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
  // {
  //   src: "/Companies/iit_ropar_acc.webp",
  //   alt: "IIT Ropar Logo",
  // },
  //   {
  //   src: "/Companies/iitm_pravartak_acc.webp",
  //   alt: "IITM Pravartak Logo",
  // },
  {
    src: "/Companies/ISO_acc.jfif",
    alt: "ISO Logo",
  },
  // {
  //   src: "/Companies/itt_gandhinagar_acc.webp",
  //   alt: "ITT Gandhinagar Logo",
  // },
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
  // {
  //   src: "/Companies/nasscom_acc.webp",
  //   alt: "nasscom Logo",
  // },
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

const course = [
  {
      "name": "Data Analytics Using Python (Professional) + AI",
    "course":"Python",

    },
    {
      "name": "Data Science Using Python (Professional) + AI",
     
       "course":"Python",
   
    },
   
    
    {
      "name": "Artificial Intelligence Using Python",
     
       "course":"Python"
    },
    {
 "name": "Web Full Stack with Node.js",
    
    "course":"Web Development & Full Stack Development"
    
    },
    {
      "name": "MERN Stack",
   
    "course":"Web Development & Full Stack Development"
    },{
      "name": "AWS Certified DevOps Engineer",
  
    "course":"Cloud Computing"
    }
    

]

// Marquee animation keyframes (Tailwind doesn't support custom keyframes inline)
const marqueeStyles = `
@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
`;
const heroBg =
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1500&q=80";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

const CorporateTraining = () => {

  const [formData,setFormData]=React.useState({name:'',email:'',phone:'',trainingMode:'',currentProfile:'',query:''})
  const selectMode = ["Online", "Offline"];
  const selectProfile = ["Student","Working Professional","Looking For Job"]

  const [sendSuccess,setSendSuccess]=React.useState(false)
  const [sendFailure,setSendFailure]=React.useState(false)
  const[isLoading,setIsLoading]=React.useState(false);

  const handleFormChange = (e)=>{

    setFormData({...formData,[e.target.name]:e.target.value})

  }


  const handleSubmitQuery =async (e)=>{
    e.preventDefault();
    setIsLoading(true);


    const res = await axios.post(`${API_BASE_URL}/contact/corporateenquiry`,formData,{
      headers:{
        'Content-Type':'application/json'
      }
    })

      if(res.data.success){
      setSendSuccess(true)
      setFormData({name:'',email:'',course:'',phone:'',currentProfile:'',trainingMode:'',query:''})
     setIsLoading(false);
    }else{
        setSendFailure(true)
       setFormData({name:'',email:'',course:'',phone:'',currentProfile:'',trainingMode:'',query:''})
      setIsLoading(false);
    }
  }

  useEffect(()=>{

    if(sendSuccess)
    {
   setTimeout(() => {
      setSendSuccess(false)
    }, 3000);
    }else if(sendFailure)
    {
   setTimeout(() => {
      setSendFailure(false)
    }, 3000);
    }

  },[sendSuccess,sendFailure])


  return (
    <div className="font-sans text-[#0c1818] relative">
      {/* Section 1: Hero + Enquiry Form */}

     {/* Section 1: Hero + Enquiry Form */}
<section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
  {/* Background image with green overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
  <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#099f4e]/85 to-[#50f48a]/85" />

  {/* Main Content */}
  <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-16 py-16 gap-10">
    {/* Left Side — Enquiry Form */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="bg-[#f4f4fb] py-5 px-8 rounded-2xl shadow-lg w-full md:w-1/2"
    >
      <h2 className="text-xl font-semibold mb-6 text-[#0c1818]">
        Enquiry Now
      </h2>
      <form className="space-y-4 text-sm" onSubmit={handleSubmitQuery}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#808098] mb-1">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#50f48a] outline-none"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label className="block text-[#808098] mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#50f48a] outline-none"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label className="block text-[#808098] mb-1">Phone</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#50f48a] outline-none"
              placeholder="Enter Phone"
              pattern="[6-9][0-9]{9}"
               name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label className="block text-[#808098] mb-1">Training Mode</label>
               <select
        name="trainingMode"
        required
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#50f48a] outline-none w-full bg-transparent"
        value={formData.trainingMode}
        onChange={handleFormChange}
        
      >
        <option value="" disabled>
          Select a Mode
        </option>
        {selectMode.map((mode) => (
          <option key={mode} value={mode}>
            {mode}
          </option>
        ))}
      </select>
          </div>
          <div>
            <label className="block text-[#808098] mb-1">Course</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#50f48a] outline-none"
              placeholder="Enter Course"
               name="course"
              value={formData.course}
              onChange={handleFormChange}
              required
            />
          </div>
     <div>
            <label className="block text-[#808098] mb-1">Current Profile </label>
               <select
        name="currentProfile"
        required
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#50f48a] outline-none w-full bg-transparent"
        value={formData.currentProfile}
        onChange={handleFormChange}
       
      >
        <option value="" disabled>
          Select a Profile
        </option>
        {selectProfile.map((profile) => (
          <option key={profile} value={profile}>
            {profile}
          </option>
        ))}
      </select>
          </div>
        </div>

        <div>
          <label className="block text-[#808098] mb-1">Any Query?</label>
          <textarea
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#50f48a] outline-none resize-none"
            placeholder="Write your message"
            rows="3"
             name="query"
              value={formData.query}
              onChange={handleFormChange}
          ></textarea>
        </div>

        <div className="flex space-x-4 pt-2">
          <button
            type="submit"
            className="bg-[#099f4e] cursor-pointer text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
          {isLoading ? 'Sending...' : 'Submit'}
          </button>
          <button
            type="reset"
            className="bg-[#099f4e] cursor-pointer text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
            Reset
          </button>
        </div>
      </form>
    </motion.div>

    {/* Right Side — Info Text */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ delay: 0.2 }}
      className="text-center md:text-left w-full md:w-1/2 text-white"
    >
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Empower Your Workforce with <span className="text-[#0c1818]">Drixcat</span> Corporate Training
      </h1>
      <p className="text-gray-200 mb-6 leading-relaxed">
        Unlock your team’s potential with our tailor-made corporate training
        programs designed to boost productivity, efficiency, and innovation.
        Learn from industry experts and drive measurable success for your
        organization.
      </p>
      <button className="bg-white text-[#099f4e] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition cursor-pointer">
        Download Brochure
      </button>
    </motion.div>
  </div>
</section>


      {/* Section 2: About & Partners */}
    <section className="bg-white py-20 px-6 md:px-16 relative overflow-hidden">
  <style>
    {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        display: flex;
        animation: marquee 30s linear infinite;
      }
      .animate-marquee:hover {
        animation-play-state: paused;
      }
    `}
  </style>

  <h2 className="text-3xl text-center font-semibold mb-10 text-[#0c1818]">
    Our Placement Partners
  </h2>

  <div className="overflow-hidden relative">
    <div className="animate-marquee">
      {[...logos, ...logos].map((logo, idx) => (
        <div
          key={idx}
          className="flex items-center justify-center mx-6 min-w-[10rem]"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-16 object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
</section>

     

      {/* Section 3: Benefits, Key Features & Programs */}
      <section className="bg-[#f4f4fb] py-12 px-6 md:px-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">Why Choose Drixcat?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Tailored Learning */}
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-[0_0_10px_#50f48a] transition-shadow text-center">
      <FaUserTie className="text-4xl text-[#099f4e] mx-auto mb-3" />
      <h3 className="font-semibold text-lg mb-2">Tailored Learning</h3>
      <p className="text-sm text-gray-600">
        Customized programs designed to meet your organization’s unique needs and goals.
      </p>
      <p className="text-sm text-gray-600">
        Flexible modules ensure every participant gains relevant, real-world skills.
      </p>
    </div>

    {/* Expert Trainers */}
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-[0_0_10px_#50f48a] transition-shadow text-center">
      <FaChalkboardTeacher className="text-4xl text-[#099f4e] mx-auto mb-3" />
      <h3 className="font-semibold text-lg mb-2">Expert Trainers</h3>
      <p className="text-sm text-gray-600">
        Learn directly from industry professionals with proven domain experience.
      </p>
      <p className="text-sm text-gray-600">
        Trainers who bring practical insights and mentorship to every session.
      </p>
    </div>

    {/* Hands-On Projects */}
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-[0_0_10px_#50f48a] transition-shadow text-center">
      <FaLaptopCode className="text-4xl text-[#099f4e] mx-auto mb-3" />
      <h3 className="font-semibold text-lg mb-2">Hands-On Projects</h3>
      <p className="text-sm text-gray-600">
        Gain practical exposure by working on real-world business challenges.
      </p>
      <p className="text-sm text-gray-600">
        Projects built to enhance confidence and showcase professional expertise.
      </p>
    </div>

    {/* Proven Success */}
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-[0_0_10px_#50f48a] transition-shadow text-center">
      <FaAward className="text-4xl text-[#099f4e] mx-auto mb-3" />
      <h3 className="font-semibold text-lg mb-2">Proven Success</h3>
      <p className="text-sm text-gray-600">
        Trusted by top organizations and thousands of professionals nationwide.
      </p>
      <p className="text-sm text-gray-600">
        Consistent results through quality-driven and impact-oriented training.
      </p>
    </div>
  </div>
        

  {/* Final line */}
  <p className="text-center text-sm md:text-base text-[#0c1818] mt-10 max-w-3xl mx-auto">
    By choosing <span className="text-[#099f4e] font-semibold">Drixcat</span>, you’re investing in your organization’s future success. 
    Our seminars and training sessions transform employees into certified professionals — 
    building confidence and ensuring long-term growth.
  </p>
    
      </section>

      <section>
           <div className="bg-white w-full p-8 rounded-lg  text-center">
         <h2 className="text-3xl font-semibold mt-12 mb-10 text-center">Top Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {course.map((course) => (
            <div
              key={course.name}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-[0_0_10px_#50f48a] transition-shadow"
            >
              <h3 className="font-semibold">{course.name}</h3>
            </div>
          ))}
        </div>
        <Link to="/courses">
        <button className="mt-6 bg-gradient-to-r from-[#099f4e] to-[#50f48a] text-white px-6 cursor-pointer py-3 rounded-full shadow-md hover:opacity-90">
          View All Courses
        </button></Link>
       </div>
      </section>

      {/* Section 4: Achievements & Contact Info */}
      <section className="bg-[#f4f4fb] py-12 px-6 md:px-16">
        <h2 className="text-3xl text-center font-semibold mb-10">
          Our Success & Corporate Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "10+ Years", subtitle: "of Corporate Training" },
            { title: "50K+ Professionals", subtitle: "Trained" },
            { title: "20K+ Workshops", subtitle: "Conducted" },
          ].map((item, index) => (
            <div key={index} className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Get Expert Guidance</h3>
          <p>
            Email: corporate@drixcat.com | Phone: +91-99533 56262 | WhatsApp:
            +91-99533 56262
          </p>
        </div>
      </section>

        {sendSuccess && (
          <div
        className={`absolute top-4 right-4 flex items-center gap-2 bg-white text-green-500 px-3 py-5 rounded shadow-lg transition-opacity z-20 ${
          sendSuccess ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <HiCheckCircle className="w-6 h-6" />
        <span>Email Sent Successfully</span>
      </div>
      
           )}
      
           {sendFailure && (
          <div
        className={`absolute top-4 right-4 flex items-center gap-2 bg-red-500 text-white px-3 py-5 rounded shadow-lg transition-opacity ${
          sendFailure ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <HiXCircle className="w-6 h-6" />
        <span>Something went wrong</span>
      </div>
      
           )}
    </div>
  );
};

export default CorporateTraining;
