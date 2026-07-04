// import React, { useEffect, useState } from "react";

// // Example alumni data (replace with real data or props)
// // const alumniData = [
// //     {
// //         id: 1,
// //         name: "Aarav Sharma",
// //         batch: "Batch of 2021",
// //         course: "Java Expert",
// //         image:
// //             "https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg?semt=ais_hybrid&w=740&q=80",
// //     },
// //     {
// //         id: 2,
// //         name: "Priya Singh",
// //         batch: "Batch of 2020",
// //         course: "Digital Marketing",
// //         image:
// //             "https://media.istockphoto.com/id/1702492633/photo/beautiful-and-happy-smiling-asian-young-girl-from-nepal-giving-several-gestures-in-a-formal.jpg?s=612x612&w=0&k=20&c=pP-SAJAR6BIzV2RwmPj_pke86r654DhQwsG0k1ygdd0=",
// //     },
// //     {
// //         id: 3,
// //         name: "Rahul Verma",
// //         batch: "Batch of 2022",
// //         course: "MERN Stack",
// //         image:
// //             "https://media.istockphoto.com/id/628330148/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=0&k=20&c=3HlVTzZA4mFWonZtxu7xCYamgLxcb8zE3YMU9AGYXAc=",
// //     },
// //     {
// //         id: 4,
// //         name: "Sneha Patel",
// //         batch: "Batch of 2019",
// //         course: "Cloud Computing",
// //         image:
// //             "https://img.freepik.com/free-photo/account-executive-multitasking-her-desk-working-business-goals_482257-123842.jpg?semt=ais_hybrid&w=740&q=80",
// //     },
// //     {
// //         id: 5,
// //         name: "Vikram Desai",
// //         batch: "Batch of 2021",
// //         course: "DSA with C++",
// //         image:
// //             "https://randomuser.me/api/portraits/men/76.jpg",
// //     },
// //     {
// //         id: 6,
// //         name: "Meera Nair",
// //         batch: "Batch of 2020",
// //         course: "MIS: Advanced Excel & BI Tools",
// //         image:
// //             "https://randomuser.me/api/portraits/women/12.jpg",
// //     },
// // ];

// const alumniData = [
//    {
//     img:"/our-alumini-13.jpg"
//   },
//    {
//     img:"/our-alumini-2.jpg"
//   },
//    {
//     img:"/our-alumini-3.jpg"
//   },
//    {
//     img:"/our-alumini-4.jpg"
//   },
//    {
//     img:"/our-alumini-5.jpg"
//   },
//    {
//     img:"/our-alumini-6.jpg"
//   },
//     {
//     img:"/our-alumini-7.jpg"
//   },
//    {
//     img:"/our-alumini-8.jpg"
//   },
//    {
//     img:"/our-alumini-9.jpg"
//   },
//    {
//     img:"/our-alumini-10.jpg"
//   },
//    {
//     img:"/our-alumini-11.jpg"
//   },
//    {
//     img:"/our-alumini-12.jpg"
//   },
//    {
//     img:"/our-alumini-13.jpg"
//   },
//     {
//     img:"/our-alumini-14.jpg"
//   },
//    {
//     img:"/our-alumini-15.jpg"
//   },
//    {
//     img:"/our-alumini-16.jpg"
//   },
//    {
//     img:"/our-alumini-17.jpg"
//   },
//    {
//     img:"/our-alumini-18.jpg"
//   },
//    {
//     img:"/our-alumini-19.jpg"
//   },
//   {
//     img:"/our-alumini-20.jpg"
//   },
//    {
//     img:"/our-alumini-5.jpg"
//   },

  



// ];

// const CARDS_PER_PAGE = 3;
// const TOTAL_PAGES = Math.ceil(alumniData.length / CARDS_PER_PAGE); // 5 pages

// const AluminiCards = () => {
//     // const [page, setPage] = useState(0);

//     // // Split alumni into two pages
//     // const pages = [
//     //     alumniData.slice(0, CARDS_PER_PAGE),
//     //     alumniData.slice(CARDS_PER_PAGE, CARDS_PER_PAGE * 2),
//     // ];


//      const [page, setPage] = useState(0);

//       const [paused, setPaused] = useState(false);

//   // Auto-slide every 3 seconds, pauses on hover
//   useEffect(() => {
//     if (paused) return;

//     const timer = setInterval(() => {
//       setPage((prev) => (prev + 1) % TOTAL_PAGES);
//     }, 3000);

//     return () => clearInterval(timer); // Cleanup on unmount or re-run
//   }, [paused]);

//   const currentCards = alumniData.slice(
//     page * CARDS_PER_PAGE,
//     page * CARDS_PER_PAGE + CARDS_PER_PAGE
//   );
//     return (
//         <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8">
//             <div className="max-w-6xl mx-auto">
//                 <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 tracking-tight">
//                     Our Alumni
//                 </h2>
//                  <div
//                     className="
//                         grid
//                         gap-8
//                         sm:grid-cols-1
//                         md:grid-cols-2
//                         lg:grid-cols-3
//                         mb-8
//                         transition-all
//                     "

//                     onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//                 >
//                     {/* {pages[page].map((alumni) => (
                       
//                     ))} */}
               
//                {currentCards.map((alumini,index)=>(
//                  <div
//                             key={alumini.id}
//                             className="
                               
//                                flex flex-col items-center
//                                 "
//                         >
//                             <img
//                 src={alumini.img}
//                 alt={`Alumni ${page * CARDS_PER_PAGE + index + 1}`}
//                 className="w-full object-contain  shadow-md border-4 border-white rounded-md"
//               />
//                             {/* <h3 className="text-xl font-semibold text-gray-900 mb-1">
//                                 {alumni.name}
//                             </h3>
//                             <p className="text-sm text-gray-500 mb-1">{alumni.batch}</p>
//                             <p className="text-base text-gray-700">{alumni.course}</p> */}
//                         </div>
                

//                ))}
               

//                 </div>
//                 {/* Pagination */}
//                 <div className="flex justify-center items-center gap-3 mt-4">
//           {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
//             <button
//               key={i}
//               aria-label={`Go to page ${i + 1}`}
//               onClick={() => setPage(i)}
//               className={`
//                 w-3 h-3 rounded-full transition-all duration-200 focus:outline-none
//                 ${page === i
//                   ? "bg-blue-600 scale-125"
//                   : "bg-gray-300 hover:bg-blue-400"
//                 }
//               `}
//             />
//           ))}
//         </div>
//             </div>
//         </section>
//     );
// };

// export default AluminiCards;



import React, { useRef, useEffect, useState } from "react";
import {

HiOutlineChevronLeft,
HiOutlineChevronRight,
} from "react-icons/hi2";

// Example testimonials data
// const testimonials = [
// {
//     id: 1,
//     name: "Kanchan",
//     course: "Data Analytics Using Python",
//     year: 2022,
//     feedback:
//         "The course was transformative! The mentors were supportive and the curriculum was up-to-date. I landed my dream job after graduating.",
//     rating: 5,
//     image:
//         "https://img.freepik.com/free-photo/closeup-smiling-young-beautiful-indian-woman_1262-2261.jpg?semt=ais_hybrid&w=740&q=80",
// },
// {
//     id: 2,
//     name: "Suyash Gautam",
//     course: "AWS Certified DevOps Engineer",
//     year: 2023,
//     feedback:
//         "Amazing experience! The hands-on projects really helped me understand the concepts. Highly recommend to anyone looking to switch careers.",
//     rating: 4,
//     image:
//         "https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg",
// },
// {
//     id: 3,
//     name: "Shreya Verma",
//     course: "UI/UX Design",
//     year: 2021,
//     feedback:
//         "Loved the interactive sessions and real-world assignments. The community is super helpful and encouraging.",
//     rating: 5,
//     image:
//         "https://img.freepik.com/premium-photo/indian-girl-cheerful-studio-portrait_53876-55599.jpg?semt=ais_hybrid&w=740&q=80",
// },
// {
//     id: 4,
//     name: "Aditya Singh",
//     course: "Cloud Computing",
//     year: 2022,
//     feedback:
//         "The course content was very relevant and the instructors were industry experts. I feel confident in my new skills.",
//     rating: 4,
//     image:
//         "https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small/young-boy-indian-student-portrait-photo.jpg",
// },
// {
//     id: 5,
//     name: "Vidhisha Sahu",
//     course: "Digital Marketing",
//     year: 2023,
//     feedback:
//         "A fantastic learning journey! The feedback from mentors was invaluable and helped me grow professionally.",
//     rating: 5,
//     image:
//         "https://t3.ftcdn.net/jpg/06/20/73/04/360_F_620730419_9cf73do9dxGaNJCztZPETHdB5bdrbW5D.jpg",
// },
// {
//     id: 6,
//     name: "Shivam Shrivastav",
//     course: "Web Full Stack with Node.js",
//     year: 2022,
//     feedback:
//         "Great structure and practical labs. I appreciated the career support after graduation.",
//     rating: 4,
//     image:
//         "https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8=",
// },
// ];

const testimonials= [

   {
    img:"/our-alumini-13.jpg"
  },
   {
    img:"/our-alumini-2.jpg"
  },
   {
    img:"/our-alumini-3.jpg"
  },
   {
    img:"/our-alumini-4.jpg"
  },
   {
    img:"/our-alumini-5.jpg"
  },
   {
    img:"/our-alumini-6.jpg"
  },
    {
    img:"/our-alumini-7.jpg"
  },
   {
    img:"/our-alumini-8.jpg"
  },
   {
    img:"/our-alumini-9.jpg"
  },
   {
    img:"/our-alumini-10.jpg"
  },
   {
    img:"/our-alumini-11.jpg"
  },
   {
    img:"/our-alumini-12.jpg"
  },
   {
    img:"/our-alumini-13.jpg"
  },
    {
    img:"/our-alumini-14.jpg"
  },
   {
    img:"/our-alumini-15.jpg"
  },
   {
    img:"/our-alumini-16.jpg"
  },
   {
    img:"/our-alumini-17.jpg"
  },
   {
    img:"/our-alumini-18.jpg"
  },
   {
    img:"/our-alumini-19.jpg"
  },
  {
    img:"/our-alumini-20.jpg"
  },
   {
    img:"/our-alumini-5.jpg"
  },

  



]


// Helper to render stars
// const StarRating = ({ rating }) => (
// <div className="flex items-center gap-0.5">
//     {[...Array(5)].map((_, i) => (
//         <svg
//             key={i}
//             className={`w-4 h-4 ${
//                 i < rating ? "text-yellow-400" : "text-gray-300"
//             }`}
//             fill="currentColor"
//             viewBox="0 0 20 20"
//         >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
//         </svg>
//     ))}
// </div>
// );

const getCardsPerView = () => {
  if (window.innerWidth >= 1024) return 3;
//   if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
};

const AluminiCards = () => {
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
        <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-10 text-center ${headingColor}`}>
               Our Alumini
            </h2>
            <div className="relative">
                {/* Carousel */}
                <div className="flex items-stretch gap-6 justify-center">
                    {visibleTestimonials.map((t) => (
                        <div
                            key={t.id}
                            className={`flex-1 min-w-0 p-2`}
                            // className={`flex-1 min-w-0 ${cardBg} ${cardShadow} ${cardBorder} ${cardHover} rounded-2xl p-7 h-80 flex flex-col items-center text-center`}
                        >
<img
  src={t.img}
  alt="Learners Image"
  className="w-full h-auto rounded-lg border-2 border-slate-200 shadow"
/>
                            {/* <p className="text-slate-700 text-base mb-4 flex-1">
                                “{t.feedback}”
                            </p>
                            <StarRating rating={t.rating} />
                            <div className="mt-4">
                                <div className="font-semibold text-slate-900">{t.name}</div>
                                <div className="text-sm text-slate-500">
                                    {t.course} &middot; {t.year}
                                </div>
                            </div> */}
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

export default AluminiCards;