import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const mentors = [
  {
    id: 1,
    name: "John Smith",
    expertise: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "https://www.linkedin.com/in/johnsmith/",
  },
  {
    id: 2,
    name: "Sophia Lee",
    expertise: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    linkedin: "https://www.linkedin.com/in/sophialee/",
  },
  {
    id: 3,
    name: "David Kim",
    expertise: "AI Engineer",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    linkedin: "https://www.linkedin.com/in/davidkim/",
  },
  {
    id: 4,
    name: "Emma Brown",
    expertise: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    linkedin: "https://www.linkedin.com/in/emmabrown/",
  },
  {
    id: 5,
    name: "Michael Chen",
    expertise: "Cybersecurity Specialist",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    linkedin: "https://www.linkedin.com/in/michaelchen/",
  },
];

const MentorsCarousel = () => {
  return (
    <section className="w-full py-16 bg-sky-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Meet Our Expert Mentors
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={1}
       
          loop={true} // disables looping so no empty pages
          className="pb-12"
           autoplay={{
    delay: 2500, // time in ms between slides
    disableOnInteraction: true, // continue autoplay after user interaction
  }}
        >
          {mentors.map((mentor) => (
            <SwiperSlide key={mentor.id} className="flex py-2">
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center text-center h-full">
               <div className="relative">
    <img
      src={mentor.image}
      alt={mentor.name}
      className="w-50 h-50 object-cover rounded-full mb-4"
    />
    {/* LinkedIn icon overlay */}
    <div className="absolute -bottom-1 -right-2 bg-white rounded-full p-5 shadow-lg hover:shadow-xl transition z-10">
      <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5"/>
    </div>
  </div>
               
                  <h3 className="text-lg font-semibold text-gray-900">
                    {mentor.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{mentor.expertise}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MentorsCarousel;
