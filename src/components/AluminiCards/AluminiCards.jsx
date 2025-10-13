import React, { useState } from "react";

// Example alumni data (replace with real data or props)
const alumniData = [
    {
        id: 1,
        name: "Aarav Sharma",
        batch: "Batch of 2021",
        course: "B.Tech in Computer Science",
        image:
            "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 2,
        name: "Priya Singh",
        batch: "Batch of 2020",
        course: "MBA in Marketing",
        image:
            "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 3,
        name: "Rahul Verma",
        batch: "Batch of 2022",
        course: "B.Sc in Mathematics",
        image:
            "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
        id: 4,
        name: "Sneha Patel",
        batch: "Batch of 2019",
        course: "B.A. in Economics",
        image:
            "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: 5,
        name: "Vikram Desai",
        batch: "Batch of 2021",
        course: "B.Tech in Mechanical Engineering",
        image:
            "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
        id: 6,
        name: "Meera Nair",
        batch: "Batch of 2020",
        course: "M.Sc in Physics",
        image:
            "https://randomuser.me/api/portraits/women/12.jpg",
    },
];

const CARDS_PER_PAGE = 3;

const AluminiCards = () => {
    const [page, setPage] = useState(0);

    // Split alumni into two pages
    const pages = [
        alumniData.slice(0, CARDS_PER_PAGE),
        alumniData.slice(CARDS_PER_PAGE, CARDS_PER_PAGE * 2),
    ];

    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 tracking-tight">
                    Our Alumni
                </h2>
                <div
                    className="
                        grid
                        gap-8
                        sm:grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        mb-8
                        transition-all
                    "
                >
                    {pages[page].map((alumni) => (
                        <div
                            key={alumni.id}
                            className="
                                bg-white
                                rounded-2xl
                                shadow
                                hover:shadow-lg
                                transition
                                duration-200
                                flex
                                flex-col
                                items-center
                                p-6
                                text-center
                                "
                        >
                            <img
                                src={alumni.image}
                                alt={alumni.name}
                                className="w-24 h-24 rounded-full object-cover shadow-md mb-4 border-4 border-white"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                {alumni.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-1">{alumni.batch}</p>
                            <p className="text-base text-gray-700">{alumni.course}</p>
                        </div>
                    ))}
                </div>
                {/* Pagination */}
                <div className="flex justify-center items-center space-x-3 mt-2">
                    {[0, 1].map((i) => (
                        <button
                            key={i}
                            aria-label={`Go to page ${i + 1}`}
                            className={`
                                w-4 h-4 rounded-full
                                flex items-center justify-center
                                focus:outline-none
                                transition
                                ${page === i ? "text-blue-600" : "text-gray-300"}
                                text-2xl
                                p-0
                                hover:text-blue-500
                            `}
                            onClick={() => setPage(i)}
                        >
                            {page === i ? "●" : "○"}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AluminiCards;