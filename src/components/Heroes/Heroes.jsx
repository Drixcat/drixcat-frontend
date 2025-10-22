import React, { useEffect } from "react";
import { FaCheckCircle, FaUserGraduate, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


import {Autoplay} from 'swiper/modules';

const features = [
    { icon: <FaCheckCircle className="text-green-500 mr-2" />, text: "Flexible Schedules" },
    { icon: <FaCheckCircle className="text-green-500 mr-2" />, text: "Guided Learning Paths" },
    { icon: <FaCheckCircle className="text-green-500 mr-2" />, text: "Peer Support Community" },
];

export default function Heroes() {

    const [width, setWidth] = React.useState(window.innerWidth);
  

    useEffect(()=>{
        document.title = "Drixcat - Learn. Innovate. Succeed."
       // Handler for resize
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    },[])
    return (

         <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
  
      autoplay={{ delay: 3000, disableOnInteraction: true, }}
      loop={true}


      className="w-full"
    >
        <SwiperSlide>
           <main className="w-full min-h-[480px] bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/Heroes/first.png)] bg-cover bg-center py-12 px-4 md:px-8 lg:px-16 shadow-sm ">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  
                    {/* Headline */}

                   {width>550 &&     <div className="w-full lg:w-1/2 flex justify-start relative mb-8 gap-5 lg:mb-0">
                        <div className="bg-white rounded-xl shadow-md px-4 max-w-[200px] py-3 flex items-center gap-2">
                            <FaBookOpen className="text-blue-600 text-xl" />
                            <div>
                                <div className="text-xs text-gray-500">Courses</div>
                                <div className="font-bold text-gray-800 text-lg">100+</div>
                            </div>
                        </div>
                        <div className="bg-white max-w-[200px] rounded-xl shadow-md px-4 py-3 flex items-center gap-2">
                            <FaUserGraduate className="text-green-600 text-xl" />
                            <div>
                                <div className="text-xs text-gray-500">Students</div>
                                <div className="font-bold text-gray-800 text-lg">48,000+</div>
                            </div>
                        </div>
                    </div>}
                    <h1 className="text-3xl text-[#4FF389] md:text-4xl lg:text-5xl font-extrabold  mb-4 leading-tight">
                        Learn Technologies From Top Experts
                    </h1>
                    {/* Subtext */}
                    <p className="text-white text-base md:text-lg mb-6">
                        Build skills with our courses and mentors from world-class companies.
                    </p>
                    {/* Search Bar */}
                    {/* <form
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
                    </form> */}
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
             
            </div>

            <div className="absolute top-[-30px] right-7 flex items-center justify-center gap-6 mt-10">
                <img src="/Students_Work/ibm.webp" alt="IBM" width={100}/>
                <img src="/Companies/microsoft_certification_acc.webp" alt="microsoft" width={100}/>
            </div>
        </main>
     </SwiperSlide>
       <SwiperSlide>
           <main className="w-full min-h-[480px] bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/Heroes/second.png)] bg-cover bg-center py-12 px-4 md:px-8 lg:px-16 shadow-sm ">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    {/* Badge */}
                    {/* <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-max shadow-sm">
                        Get 30% Off on First Enroll
                    </span> */}
                    {/* Headline */}

                     {width>550 &&     <div className="w-full lg:w-1/2 flex justify-start relative mb-8 gap-5 lg:mb-0">
                        <div className="bg-white rounded-xl shadow-md px-4 max-w-[200px] py-3 flex items-center gap-2">
                            <FaBookOpen className="text-blue-600 text-xl" />
                            <div>
                                <div className="text-xs text-gray-500">Courses</div>
                                <div className="font-bold text-gray-800 text-lg">100+</div>
                            </div>
                        </div>
                        <div className="bg-white max-w-[200px] rounded-xl shadow-md px-4 py-3 flex items-center gap-2">
                            <FaUserGraduate className="text-green-600 text-xl" />
                            <div>
                                <div className="text-xs text-gray-500">Students</div>
                                <div className="font-bold text-gray-800 text-lg">48,000+</div>
                            </div>
                        </div>
                    </div>}
                    <h1 className="text-3xl text-[#4FF389] md:text-4xl lg:text-5xl font-extrabold  mb-4 leading-tight">
                        Explore the World of Data & AI
                    </h1>
                    {/* Subtext */}
                    <p className="text-white text-base md:text-lg mb-6">
                      Learn data science, AI, and machine learning with expert mentors and real-world applications.
                    </p>
                    {/* Search Bar */}
                    {/* <form
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
                    </form> */}
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
             
            </div>
              <div className="absolute top-[-30px] right-7 flex items-center justify-center gap-6 mt-10">
                <img src="/Students_Work/ibm.webp" alt="IBM" width={100}/>
                <img src="/Companies/microsoft_certification_acc.webp" alt="microsoft" width={100}/>
            </div>
        </main>
     </SwiperSlide>
      <SwiperSlide>
           <main className="w-full min-h-[480px] bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/Heroes/third.png)] bg-cover bg-center py-12 px-4 md:px-8 lg:px-16 shadow-sm ">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    {/* Badge */}
                    {/* <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-max shadow-sm">
                        Get 30% Off on First Enroll
                    </span> */}
                    {/* Headline */}

                      {width>550 &&     <div className="w-full lg:w-1/2 flex justify-start relative mb-8 gap-5 lg:mb-0">
                        <div className="bg-white rounded-xl shadow-md px-4 max-w-[200px] py-3 flex items-center gap-2">
                            <FaBookOpen className="text-blue-600 text-xl" />
                            <div>
                                <div className="text-xs text-gray-500">Courses</div>
                                <div className="font-bold text-gray-800 text-lg">100+</div>
                            </div>
                        </div>
                        <div className="bg-white max-w-[200px] rounded-xl shadow-md px-4 py-3 flex items-center gap-2">
                            <FaUserGraduate className="text-green-600 text-xl" />
                            <div>
                                <div className="text-xs text-gray-500">Students</div>
                                <div className="font-bold text-gray-800 text-lg">48,000+</div>
                            </div>
                        </div>
                    </div>}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#4FF389] mb-4 leading-tight">
                       Master Software Development Skills
                    </h1>
                    {/* Subtext */}
                    <p className="text-white text-base md:text-lg mb-6">
                        Unlock your potential with hands-on projects, coding challenges, and industry-driven guidance.
                    </p>
                    {/* Search Bar */}
                    {/* <form
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
                    </form> */}
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
             
            </div>
           <div className="absolute top-[-30px] right-7 flex items-center justify-center gap-6 mt-10">
                <img src="/Students_Work/ibm.webp" alt="IBM" width={100}/>
                <img src="/Companies/microsoft_certification_acc.webp" alt="microsoft" width={100}/>
            </div>
        </main>
     </SwiperSlide>


        </Swiper>
    );
}