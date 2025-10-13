import React, { useState } from "react";

import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
// Dummy course data
const courses = [
    {
        id: 1,
        title: "Full Stack Web Development",
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
        rating: 4.8,
        price: "$99",
        mentor: {
            name: "Jane Doe",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        lessons: 30,
        students: 1200,
    },
    {
        id: 2,
        title: "UI/UX Design Essentials",
        thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        price: "$79",
        mentor: {
            name: "John Smith",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        lessons: 24,
        students: 950,
    },
    {
        id: 3,
        title: "Data Science Bootcamp",
        thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
        rating: 4.9,
        price: "$129",
        mentor: {
            name: "Emily Clark",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        lessons: 40,
        students: 1800,
    },
    {
        id: 4,
        title: "Digital Marketing Mastery",
        thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        price: "$59",
        mentor: {
            name: "Alex Turner",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        lessons: 18,
        students: 800,
    },
    {
        id: 5,
        title: "Python for Beginners",
        thumbnail: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        rating: 4.8,
        price: "$49",
        mentor: {
            name: "Sara Lee",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        lessons: 22,
        students: 1400,
    },
    {
        id: 6,
        title: "Machine Learning Advanced",
        thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
        rating: 4.9,
        price: "$149",
        mentor: {
            name: "Michael Chen",
            avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        },
        lessons: 35,
        students: 1100,
    },
];

const COURSES_PER_PAGE = 3;


export default function CoursesHome() {
    const [page, setPage] = useState(0);

    const paginatedCourses = courses.slice(
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
                        <CourseCard key={course.id} course={course} />
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