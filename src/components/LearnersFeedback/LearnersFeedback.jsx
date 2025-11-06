import React, { useRef, useEffect, useState } from "react";
import {

HiOutlineChevronLeft,
HiOutlineChevronRight,
} from "react-icons/hi2";

// Example testimonials data
const testimonials = [
{
    id: 1,
    name: "Kanchan",
    course: "Data Analytics Using Python",
    year: 2022,
    feedback:
        "The course was transformative! The mentors were supportive and the curriculum was up-to-date. I landed my dream job after graduating.",
    rating: 5,
    image:
        "https://img.freepik.com/free-photo/closeup-smiling-young-beautiful-indian-woman_1262-2261.jpg?semt=ais_hybrid&w=740&q=80",
},
{
    id: 2,
    name: "Suyash Gautam",
    course: "AWS Certified DevOps Engineer",
    year: 2023,
    feedback:
        "Amazing experience! The hands-on projects really helped me understand the concepts. Highly recommend to anyone looking to switch careers.",
    rating: 4,
    image:
        "https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg",
},
{
    id: 3,
    name: "Shreya Verma",
    course: "UI/UX Design",
    year: 2021,
    feedback:
        "Loved the interactive sessions and real-world assignments. The community is super helpful and encouraging.",
    rating: 5,
    image:
        "https://img.freepik.com/premium-photo/indian-girl-cheerful-studio-portrait_53876-55599.jpg?semt=ais_hybrid&w=740&q=80",
},
{
    id: 4,
    name: "Aditya Singh",
    course: "Cloud Computing",
    year: 2022,
    feedback:
        "The course content was very relevant and the instructors were industry experts. I feel confident in my new skills.",
    rating: 4,
    image:
        "https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small/young-boy-indian-student-portrait-photo.jpg",
},
{
    id: 5,
    name: "Vidhisha Sahu",
    course: "Digital Marketing",
    year: 2023,
    feedback:
        "A fantastic learning journey! The feedback from mentors was invaluable and helped me grow professionally.",
    rating: 5,
    image:
        "https://t3.ftcdn.net/jpg/06/20/73/04/360_F_620730419_9cf73do9dxGaNJCztZPETHdB5bdrbW5D.jpg",
},
{
    id: 6,
    name: "Shivam Shrivastav",
    course: "Web Full Stack with Node.js",
    year: 2022,
    feedback:
        "Great structure and practical labs. I appreciated the career support after graduation.",
    rating: 4,
    image:
        "https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8=",
},
];

// Helper to render stars
const StarRating = ({ rating }) => (
<div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
        <svg
            key={i}
            className={`w-4 h-4 ${
                i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
    ))}
</div>
);

const getCardsPerView = () => {
if (window.innerWidth >= 1024) return 3;
if (window.innerWidth >= 640) return 2;
return 1;
};

const LearnersFeedback = () => {
const [current, setCurrent] = useState(0);
const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
const intervalRef = useRef();

// Responsive cards per view
useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);

// Auto-slide
useEffect(() => {
    intervalRef.current = setInterval(() => {
        setCurrent((prev) =>
            prev + 1 >= Math.ceil(testimonials.length / cardsPerView) ? 0 : prev + 1
        );
    }, 5000);
    return () => clearInterval(intervalRef.current);
}, [cardsPerView]);

// Manual navigation resets auto-slide timer
const goTo = (idx) => {
    setCurrent(idx);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
        setCurrent((prev) =>
            prev + 1 >= Math.ceil(testimonials.length / cardsPerView) ? 0 : prev + 1
        );
    }, 5000);
};

const totalSlides = Math.ceil(testimonials.length / cardsPerView);

// Theme classes (adjust as per your theme)
const sectionBg = "bg-gradient-to-b from-white via-slate-50 to-slate-100";
const headingColor = "text-slate-800";
const cardBg = "bg-white";
const cardShadow = "shadow-xl";
const cardBorder = "border border-slate-100";
const cardHover = "hover:scale-[1.025] hover:shadow-2xl hover:border-slate-200 transition-all duration-300";

// Slice testimonials for current slide
const startIdx = current * cardsPerView;
const visibleTestimonials = testimonials.slice(
    startIdx,
    startIdx + cardsPerView
);

return (
    <section className={`${sectionBg} py-16 px-4 md:px-8`}>
        <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-10 text-center ${headingColor}`}>
                What Our Learners Say
            </h2>
            <div className="relative">
                {/* Carousel */}
                <div className="flex items-stretch gap-6 justify-center">
                    {visibleTestimonials.map((t) => (
                        <div
                            key={t.id}
                            className={`flex-1 min-w-0 ${cardBg} ${cardShadow} ${cardBorder} ${cardHover} rounded-2xl p-7 h-80 flex flex-col items-center text-center`}
                        >
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-slate-200 shadow"
                            />
                            <p className="text-slate-700 text-base mb-4 flex-1">
                                “{t.feedback}”
                            </p>
                            <StarRating rating={t.rating} />
                            <div className="mt-4">
                                <div className="font-semibold text-slate-900">{t.name}</div>
                                <div className="text-sm text-slate-500">
                                    {t.course} &middot; {t.year}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Navigation Arrows */}
                <button
                    aria-label="Previous"
                    onClick={() => goTo(current === 0 ? totalSlides - 1 : current - 1)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition-all border border-slate-200"
                >
                    <HiOutlineChevronLeft className="w-6 h-6 text-slate-700" />
                </button>
                <button
                    aria-label="Next"
                    onClick={() => goTo(current === totalSlides - 1 ? 0 : current + 1)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition-all border border-slate-200"
                >
                    <HiOutlineChevronRight className="w-6 h-6 text-slate-700" />
                </button>
            </div>
            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                        key={idx}
                        aria-label={`Go to slide ${idx + 1}`}
                        onClick={() => goTo(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            idx === current
                                ? "bg-blue-600 scale-125 shadow"
                                : "bg-slate-300 hover:bg-blue-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    </section>
);
};

export default LearnersFeedback;