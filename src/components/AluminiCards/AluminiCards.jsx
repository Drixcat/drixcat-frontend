import React, { useEffect, useState } from "react";

// Example alumni data (replace with real data or props)
// const alumniData = [
//     {
//         id: 1,
//         name: "Aarav Sharma",
//         batch: "Batch of 2021",
//         course: "Java Expert",
//         image:
//             "https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg?semt=ais_hybrid&w=740&q=80",
//     },
//     {
//         id: 2,
//         name: "Priya Singh",
//         batch: "Batch of 2020",
//         course: "Digital Marketing",
//         image:
//             "https://media.istockphoto.com/id/1702492633/photo/beautiful-and-happy-smiling-asian-young-girl-from-nepal-giving-several-gestures-in-a-formal.jpg?s=612x612&w=0&k=20&c=pP-SAJAR6BIzV2RwmPj_pke86r654DhQwsG0k1ygdd0=",
//     },
//     {
//         id: 3,
//         name: "Rahul Verma",
//         batch: "Batch of 2022",
//         course: "MERN Stack",
//         image:
//             "https://media.istockphoto.com/id/628330148/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=0&k=20&c=3HlVTzZA4mFWonZtxu7xCYamgLxcb8zE3YMU9AGYXAc=",
//     },
//     {
//         id: 4,
//         name: "Sneha Patel",
//         batch: "Batch of 2019",
//         course: "Cloud Computing",
//         image:
//             "https://img.freepik.com/free-photo/account-executive-multitasking-her-desk-working-business-goals_482257-123842.jpg?semt=ais_hybrid&w=740&q=80",
//     },
//     {
//         id: 5,
//         name: "Vikram Desai",
//         batch: "Batch of 2021",
//         course: "DSA with C++",
//         image:
//             "https://randomuser.me/api/portraits/men/76.jpg",
//     },
//     {
//         id: 6,
//         name: "Meera Nair",
//         batch: "Batch of 2020",
//         course: "MIS: Advanced Excel & BI Tools",
//         image:
//             "https://randomuser.me/api/portraits/women/12.jpg",
//     },
// ];

const alumniData = [
  {
    img:"/our-alumini-1.jpg"
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

  



];

const CARDS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(alumniData.length / CARDS_PER_PAGE); // 5 pages

const AluminiCards = () => {
    // const [page, setPage] = useState(0);

    // // Split alumni into two pages
    // const pages = [
    //     alumniData.slice(0, CARDS_PER_PAGE),
    //     alumniData.slice(CARDS_PER_PAGE, CARDS_PER_PAGE * 2),
    // ];


     const [page, setPage] = useState(0);

      const [paused, setPaused] = useState(false);

  // Auto-slide every 3 seconds, pauses on hover
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % TOTAL_PAGES);
    }, 3000);

    return () => clearInterval(timer); // Cleanup on unmount or re-run
  }, [paused]);

  const currentCards = alumniData.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );
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

                    onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
                >
                    {/* {pages[page].map((alumni) => (
                       
                    ))} */}
               
               {currentCards.map((alumini,index)=>(
                 <div
                            key={alumini.id}
                            className="
                               
                               flex flex-col items-center
                                "
                        >
                            <img
                src={alumini.img}
                alt={`Alumni ${page * CARDS_PER_PAGE + index + 1}`}
                className="w-full object-contain  shadow-md border-4 border-white rounded-md"
              />
                            {/* <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                {alumni.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-1">{alumni.batch}</p>
                            <p className="text-base text-gray-700">{alumni.course}</p> */}
                        </div>
                

               ))}

                </div>
                {/* Pagination */}
                <div className="flex justify-center items-center gap-3 mt-4">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`
                w-3 h-3 rounded-full transition-all duration-200 focus:outline-none
                ${page === i
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-blue-400"
                }
              `}
            />
          ))}
        </div>
            </div>
        </section>
    );
};

export default AluminiCards;