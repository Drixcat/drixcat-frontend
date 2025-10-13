import React from "react";
import { FaCheckCircle, FaUserGraduate, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
    { icon: <FaCheckCircle className="text-green-500 mr-2" />, text: "Flexible Schedules" },
    { icon: <FaCheckCircle className="text-green-500 mr-2" />, text: "Guided Learning Paths" },
    { icon: <FaCheckCircle className="text-green-500 mr-2" />, text: "Peer Support Community" },
];

export default function Heroes() {
    return (
        <main className="w-full bg-white py-12 px-4 md:px-8  lg:px-16 shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    {/* Badge */}
                    {/* <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-max shadow-sm">
                        Get 30% Off on First Enroll
                    </span> */}
                    {/* Headline */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        Learn Technologies From Top Experts
                    </h1>
                    {/* Subtext */}
                    <p className="text-gray-600 text-base md:text-lg mb-6">
                        Build skills with our courses and mentors from world-class companies.
                    </p>
                    {/* Search Bar */}
                    <form
                        className="flex w-full max-w-md mb-6"
                        onSubmit={e => e.preventDefault()}
                    >
                        <input
                            type="text"
                            placeholder="Search engineering courses…"
                            className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800"
                        />
                      <Link to={'/contact'}>
                        <button
                            type="submit"
                            className="bg-[#50f48a] hover:bg-[#099f4e] text-[#0c1818]
                            cursor-pointer px-5 py-2 rounded-r-lg font-semibold transition"
                        >
                            Search
                        </button></Link>
                    </form>
                    {/* Features */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="flex items-center bg-gray-50 rounded-lg px-3 py-2 shadow-sm text-sm font-medium text-gray-700"
                            >
                                {f.icon}
                                {f.text}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right Side */}
                <div className="w-full lg:w-1/2 flex justify-center relative mb-8 lg:mb-0">
                    {/* Main Image */}
                    <img
                        src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=500&q=80"
                        alt="Student learning"
                        className="w-80 h-96 object-cover rounded-3xl shadow-lg"
                    />
                    {/* Floating Stat Cards */}
                    <div className="absolute top-6 left-2">
                        <div className="bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-2 mb-3">
                            <FaBookOpen className="text-blue-600 text-xl" />
                            <div>
                                <div className="text-xs text-gray-500">Courses</div>
                                <div className="font-bold text-gray-800 text-lg">100+</div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-2">
                            <FaUserGraduate className="text-green-600 text-xl" />
                            <div>
                                <div className="text-xs text-gray-500">Students</div>
                                <div className="font-bold text-gray-800 text-lg">48,000+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}