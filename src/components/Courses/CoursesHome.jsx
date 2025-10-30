import React, { useState } from "react";
import courses from "./courses";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";


const course = [
  {
      "name": "Data Analytics Using Python (Professional) + AI",
      "overview": "Learn to analyze, visualize, and interpret data using Python, with AI tools for advanced insights. This course is ideal for data-driven decision-making roles.",
      "course":"Python",
      "image":"/Courses/python/DA-python.png",
       "duration":"6 months",
    
    },
    {
      "name": "Data Science Using Python (Professional) + AI",
      "overview": "A complete data science program with Python and AI applications. Learn the full data science workflow, from data collection to model deployment.",
      "image":"/Courses/python/DS-python.jpg",
       "duration":"6 months",
       "course":"Python",
   
    },
   
    
  
    {
 "name": "Web Full Stack with Node.js",
    "overview": "Complete full-stack development course focusing on Node.js backend and frontend technologies. Covers building modern web applications.",
    "image":"/Courses/web dev/web full stack with node.png",
    "duration":"6 months",
    "course":"Web Development & Full Stack Development"
    
    },
    {
      "name": "Java Expert",
    "overview": "An advanced Java course designed to strengthen your Java knowledge and prepare you for professional development roles.",
    "image":"/Courses/java/java-expert.png",
     
    "duration":"6 months",
    "position":"center",
    "course":"Java"
    },{
      "name": "AWS Certified DevOps Engineer",
    "overview": "Advanced course on implementing DevOps practices on AWS cloud for automation, CI/CD, and monitoring.",
    "image":"/Courses/cloud computing/aws certified.png",
    "duration":"2 months",
   
    "position":"center",
    "course":"Cloud Computing"
    },
    {
      "name": "Advanced Digital Marketing",
    "overview": "Advanced course for students who want to specialize in digital marketing and learn strategies to increase ROI, engagement, and conversions.",
    "image":"/Courses/digital marketing/advanced DM.png",
    "duration":"5 months",
    "position":"top",
    "course":"Digital Marketing"
    }
    

]


export default function CoursesHome() {


 




    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                    Popular Courses
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-8">
                   {course.map((sub, idx) => (
        <div
                key={""}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col overflow-hidden"
              >
                <img
                  src={sub.image}
                  alt={sub.name}
                  className={`w-full h-48 object-cover rounded-t-xl`}
                   style={{ objectPosition: sub.position ? sub.position : "center" }}
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col p-5">
                  <div className="text-lg font-semibold text-[#0c1818] mb-2">
                    {sub.name}
                  </div>
                  <div className="text-[#808098] mb-4 flex-1 whitespace-pre-line">
                    {sub.overview}
                  </div>
                  <div className="flex items-center justify-between mt-2 text-sm gap-3">
                    <Link to={`/courses/${sub.course}/${sub.name.replace(/\s+/g,'-')}`} className="flex-1">
                      <motion.button
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                        className="bg-[#50f48a] w-full text-[#0c1818] font-semibold px-8 py-3 rounded-md shadow-lg  hover:bg-[#099f4e] cursor-pointer transition"
                      >
                       Explore
                      </motion.button>
                    </Link>
                    {/* <span className="flex items-center gap-1 text-[#808098] shrink-0">
                      <svg
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
                      {sub.enrolledStudents}
   

                     

     

                    </span> */}
                    <span className="flex items-center gap-1 text-[#808098]">
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
                      {sub.duration}
                    </span>
                  </div>
                </div>
              </div>
        ))}
      </div>
                </div>
              
                <div className="flex justify-center">
                    <Link
                        to="/courses"
                        className="inline-flex items-center text-primary-600 font-semibold hover:underline text-base md:text-lg transition"
                    >
                        Browse More Courses <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                </div>
           
        </section>
    );
}