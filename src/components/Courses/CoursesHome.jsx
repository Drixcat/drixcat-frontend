import React, { useState } from "react";
import courses from "./courses";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";
// Dummy course data
// const courses = [
//     {
//         id: 1,
//         title: "Full Stack Web Development",
//         thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
//         rating: 4.8,
//         price: "$99",
//         mentor: {
//             name: "Jane Doe",
//             avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//         },
//         lessons: 30,
//         students: 1200,
//     },
//     {
//         id: 2,
//         title: "UI/UX Design Essentials",
//         thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
//         rating: 4.7,
//         price: "$79",
//         mentor: {
//             name: "John Smith",
//             avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//         },
//         lessons: 24,
//         students: 950,
//     },
//     {
//         id: 3,
//         title: "Data Science Bootcamp",
//         thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
//         rating: 4.9,
//         price: "$129",
//         mentor: {
//             name: "Emily Clark",
//             avatar: "https://randomuser.me/api/portraits/women/65.jpg",
//         },
//         lessons: 40,
//         students: 1800,
//     },
//     {
//         id: 4,
//         title: "Digital Marketing Mastery",
//         thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
//         rating: 4.6,
//         price: "$59",
//         mentor: {
//             name: "Alex Turner",
//             avatar: "https://randomuser.me/api/portraits/men/45.jpg",
//         },
//         lessons: 18,
//         students: 800,
//     },
//     {
//         id: 5,
//         title: "Python for Beginners",
//         thumbnail: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
//         rating: 4.8,
//         price: "$49",
//         mentor: {
//             name: "Sara Lee",
//             avatar: "https://randomuser.me/api/portraits/women/68.jpg",
//         },
//         lessons: 22,
//         students: 1400,
//     },
//     {
//         id: 6,
//         title: "Machine Learning Advanced",
//         thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
//         rating: 4.9,
//         price: "$149",
//         mentor: {
//             name: "Michael Chen",
//             avatar: "https://randomuser.me/api/portraits/men/76.jpg",
//         },
//         lessons: 35,
//         students: 1100,
//     },
// ];

const COURSES_PER_PAGE = 3;


export default function CoursesHome() {
    const [page, setPage] = useState(0);

const courseKeys = Object.keys(courses);
const paginatedCourses = courseKeys.slice(
  page * COURSES_PER_PAGE,
  page * COURSES_PER_PAGE + COURSES_PER_PAGE
);

    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                    Popular Courses
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-8">
                    {paginatedCourses.map((course) => (
                        <div
                key={""}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col overflow-hidden"
              >
                <img
                  src={courses[course].image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col p-5">
                  <div className="text-lg font-semibold text-[#0c1818] mb-2">
                    {course}
                  </div>
                  <div className="text-[#808098] mb-4 flex-1 whitespace-pre-line">
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
                {/* Pagination */}
                <div className="flex justify-center items-center mb-8">
                    {[0, 1].map((i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className={`mx-1 text-2xl transition-colors ${
                                page === i ? "text-primary-600" : "text-gray-300"
                            }`}
                            aria-label={`Go to page ${i + 1}`}
                        >
                            ●
                        </button>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link
                        to="/courses"
                        className="inline-flex items-center text-primary-600 font-semibold hover:underline text-base md:text-lg transition"
                    >
                        Browse More Courses <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}