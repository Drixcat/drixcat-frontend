import React, { useState } from "react";
import {

FaStar,
FaRegStar,
FaStarHalfAlt,
FaSearch,
FaTimes,
} from "react-icons/fa";

// Dummy data for mentors
const mentorsData = [
{
    id: 1,
    name: "Alice Johnson",
    avatar:
        "https://randomuser.me/api/portraits/women/44.jpg",
    expertise: "Full Stack Developer",
    bio: "Passionate about building scalable web apps. Loves teaching React and Node.js.",
    experience: "10+ years",
    rating: 4.8,
    courses: [
        { id: 1, name: "React Mastery", duration: "6 weeks" },
        { id: 2, name: "Node.js Bootcamp", duration: "4 weeks" },
    ],
    reviews: [
        {
            id: 1,
            name: "Sam Learner",
            feedback: "Alice explains complex topics simply. Highly recommend!",
            rating: 5,
        },
        {
            id: 2,
            name: "Priya S.",
            feedback: "Great mentor, very patient and knowledgeable.",
            rating: 4.5,
        },
    ],
    availability: "Available",
    level: "Senior",
},
{
    id: 2,
    name: "Brian Lee",
    avatar:
        "https://randomuser.me/api/portraits/men/32.jpg",
    expertise: "Data Scientist",
    bio: "Expert in machine learning and AI. Loves sharing real-world data insights.",
    experience: "8 years",
    rating: 4.6,
    courses: [
        { id: 3, name: "Intro to Data Science", duration: "5 weeks" },
        { id: 4, name: "Machine Learning A-Z", duration: "8 weeks" },
    ],
    reviews: [
        {
            id: 3,
            name: "Alex T.",
            feedback: "Brian's sessions are hands-on and practical.",
            rating: 4.5,
        },
    ],
    availability: "Available",
    level: "Mid",
},
{
    id: 3,
    name: "Cynthia Wu",
    avatar:
        "https://randomuser.me/api/portraits/women/68.jpg",
    expertise: "UI/UX Designer",
    bio: "Designs intuitive interfaces. Focused on user-centered design and accessibility.",
    experience: "6 years",
    rating: 4.9,
    courses: [
        { id: 5, name: "UI/UX Fundamentals", duration: "4 weeks" },
    ],
    reviews: [
        {
            id: 4,
            name: "Jordan K.",
            feedback: "Cynthia's feedback improved my portfolio a lot.",
            rating: 5,
        },
    ],
    availability: "Unavailable",
    level: "Mid",
},
// Add more mentors as needed
];

// Helper for rendering stars
function StarRating({ rating }) {
const stars = [];
let r = rating;
for (let i = 0; i < 5; i++) {
    if (r >= 1) {
        stars.push(<FaStar key={i} className="text-yellow-400 inline" aria-label="Full star" />);
        r -= 1;
    } else if (r >= 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 inline" aria-label="Half star" />);
        r = 0;
    } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 inline" aria-label="Empty star" />);
    }
}
return <span>{stars}</span>;
}

// Mentor Card Component
function MentorCard({ mentor, onViewProfile, onBookSession }) {
return (
    <div
        className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition p-6 flex flex-col items-center"
        tabIndex={0}
        aria-label={`Mentor card for ${mentor.name}`}
    >
        <div className="relative group mb-4">
            <img
                src={mentor.avatar}
                alt={`Avatar of ${mentor.name}`}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 transition-transform duration-200 group-hover:scale-110"
            />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
        <p className="text-blue-600 font-medium">{mentor.expertise}</p>
        <p className="text-gray-600 text-sm mt-1 text-center">{mentor.bio}</p>
        <div className="flex items-center mt-2">
            <span className="text-gray-500 text-xs mr-2">{mentor.experience}</span>
            <StarRating rating={mentor.rating} />
            <span className="ml-1 text-xs text-gray-500">{mentor.rating}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
            {mentor.courses.map((course) => (
                <span
                    key={course.id}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full"
                >
                    {course.name}
                </span>
            ))}
        </div>
        <div className="flex gap-2 mt-4 w-full">
            <button
                className="flex-1 bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => onViewProfile(mentor)}
                aria-label={`View profile of ${mentor.name}`}
            >
                View Profile
            </button>
            <button
                className="flex-1 bg-gray-100 text-blue-600 rounded-md py-2 font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => onBookSession(mentor)}
                aria-label={`Book session with ${mentor.name}`}
            >
                Book Session
            </button>
        </div>
    </div>
);
}

// Mentor Profile Modal
function MentorProfileModal({ mentor, onClose }) {
if (!mentor) return null;
return (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
        role="dialog"
        aria-modal="true"
        aria-label={`Profile modal for ${mentor.name}`}
        tabIndex={-1}
        onClick={onClose}
    >
        <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-3xl mx-4 overflow-y-auto max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
            tabIndex={0}
        >
            {/* Banner */}
            <div className="relative bg-blue-600 rounded-t-xl p-6 flex flex-col items-center">
                <img
                    src={mentor.avatar}
                    alt={`Avatar of ${mentor.name}`}
                    className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
                />
                <h2 className="text-2xl font-bold text-white mt-2">{mentor.name}</h2>
                <p className="text-blue-100">{mentor.expertise}</p>
                <button
                    className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
                    onClick={onClose}
                    aria-label="Close profile modal"
                >
                    <FaTimes />
                </button>
            </div>
            {/* Details */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
                <p className="text-gray-700 mb-4">{mentor.bio}</p>
                <div className="flex items-center mb-4">
                    <span className="text-gray-500 text-sm mr-2">{mentor.experience}</span>
                    <StarRating rating={mentor.rating} />
                    <span className="ml-1 text-xs text-gray-500">{mentor.rating}</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Courses Taught</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {mentor.courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-gray-100 rounded-lg p-3 flex flex-col"
                        >
                            <span className="font-medium text-gray-900">{course.name}</span>
                            <span className="text-xs text-gray-500 mb-2">{course.duration}</span>
                            <button
                                className="bg-blue-600 text-white rounded-md py-1 text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                aria-label={`Enroll in ${course.name}`}
                            >
                                Enroll
                            </button>
                        </div>
                    ))}
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Reviews</h4>
                <div className="space-y-3 mb-6">
                    {mentor.reviews.map((review) => (
                        <div key={review.id} className="bg-gray-50 rounded p-3">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-gray-700">{review.name}</span>
                                <StarRating rating={review.rating} />
                            </div>
                            <p className="text-gray-600 text-sm">{review.feedback}</p>
                        </div>
                    ))}
                    {mentor.reviews.length === 0 && (
                        <p className="text-gray-500 text-sm">No reviews yet.</p>
                    )}
                </div>
                <button
                    className="w-full bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label={`Contact or schedule with ${mentor.name}`}
                >
                    Contact / Schedule
                </button>
            </div>
        </div>
    </div>
);
}

// Main Mentor Page
export default function Mentors() {
// State for search and filters
const [search, setSearch] = useState("");
const [expertise, setExpertise] = useState("");
const [level, setLevel] = useState("");
const [availability, setAvailability] = useState("");
const [profileMentor, setProfileMentor] = useState(null);

// Unique expertise options
const expertiseOptions = [
    ...new Set(mentorsData.map((m) => m.expertise)),
];
const levelOptions = [
    ...new Set(mentorsData.map((m) => m.level)),
];
const availabilityOptions = [
    ...new Set(mentorsData.map((m) => m.availability)),
];

// Filtering logic
const filteredMentors = mentorsData.filter((mentor) => {
    const matchesSearch =
        mentor.name.toLowerCase().includes(search.toLowerCase()) ||
        mentor.expertise.toLowerCase().includes(search.toLowerCase());
    const matchesExpertise = expertise ? mentor.expertise === expertise : true;
    const matchesLevel = level ? mentor.level === level : true;
    const matchesAvailability = availability
        ? mentor.availability === availability
        : true;
    return (
        matchesSearch && matchesExpertise && matchesLevel && matchesAvailability
    );
});

// Keyboard navigation for modal
React.useEffect(() => {
    function handleKeyDown(e) {
        if (e.key === "Escape" && profileMentor) {
            setProfileMentor(null);
        }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
}, [profileMentor]);

return (
    <div className="bg-gray-50 min-h-screen pb-12">
        {/* Header Section */}
        <header className="max-w-6xl mx-auto px-4 pt-10 pb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Mentors</h1>
            <p className="text-gray-600 mb-6">
                Learn from industry experts with real-world experience.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-end">
                {/* Search Bar */}
                <div className="flex-1 relative">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        placeholder="Search by mentor name or expertise"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label="Search mentors"
                    />
                </div>
                {/* Filters */}
                <div className="flex gap-2">
                    <select
                        className="rounded-md border border-gray-200 py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={expertise}
                        onChange={(e) => setExpertise(e.target.value)}
                        aria-label="Filter by expertise"
                    >
                        <option value="">All Expertise</option>
                        {expertiseOptions.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                    <select
                        className="rounded-md border border-gray-200 py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        aria-label="Filter by experience level"
                    >
                        <option value="">All Levels</option>
                        {levelOptions.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                    <select
                        className="rounded-md border border-gray-200 py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                        aria-label="Filter by availability"
                    >
                        <option value="">All Availability</option>
                        {availabilityOptions.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </header>

        {/* Mentor Cards Grid */}
        <main className="max-w-6xl mx-auto px-4">
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                aria-label="Mentor list"
            >
                {filteredMentors.length === 0 && (
                    <div className="col-span-full text-center text-gray-500 py-12">
                        No mentors found.
                    </div>
                )}
                {filteredMentors.map((mentor) => (
                    <MentorCard
                        key={mentor.id}
                        mentor={mentor}
                        onViewProfile={setProfileMentor}
                        onBookSession={() => alert("Booking functionality coming soon!")}
                    />
                ))}
            </div>
        </main>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 mt-16">
            <div className="bg-blue-600 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between px-8 py-8 gap-4">
                <div className="text-white text-lg font-semibold">
                    Want to become a mentor?
                </div>
                <button
                    className="bg-white text-blue-600 font-bold px-6 py-3 rounded-md shadow hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Apply as Mentor"
                >
                    Apply as Mentor
                </button>
            </div>
        </section>

        {/* Mentor Profile Modal */}
        {profileMentor && (
            <MentorProfileModal
                mentor={profileMentor}
                onClose={() => setProfileMentor(null)}
            />
        )}
    </div>
);
}