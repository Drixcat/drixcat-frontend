import { useParams,Link } from "react-router-dom";
import courses from "./courses";
import {motion} from 'framer-motion'

export default function SubCourses() {
  const { courseslug } = useParams();

  console.log(courseslug)

  // Convert slug back to course name format
  const courseName = Object.keys(courses).find(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === courseslug
  );

  if (!courseName) return <div>Course not found</div>;

  const course = courses[courseName];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-16">
     <div className="border-b border-gray-300">
         <h1 className="text-3xl font-bold mb-4 text-[#099f4e]">{courseName}</h1>
      <p className="text-[#808098] mb-6">{course.description}</p>
     </div>

     
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">
        {course.subcourses.map((sub, idx) => (
        <div
                key={""}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col overflow-hidden"
              >
                <img
                  src={sub.image}
                  alt={sub.name}
                  className={`w-full h-48 object-cover rounded-t-xl`}
                   style={{ objectPosition: sub.position ? sub.position : "center" }}
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col p-5">
                  <div className="text-lg font-semibold text-[#0c1818] mb-2">
                    {sub.name}
                  </div>
                  <div className="text-[#808098] mb-4 flex-1 whitespace-pre-line">
                    {sub.overview}
                  </div>
                  <div className="flex items-center justify-between mt-2 text-sm gap-3">
                    <Link to={`/courses/${courseName}/${sub.name.replace(/\s+/g,'-')}`} className="flex-1">
                      <motion.button
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                        className="bg-[#50f48a] w-full text-[#0c1818] font-semibold px-8 py-3 rounded-md shadow-lg  hover:bg-[#099f4e] cursor-pointer transition"
                      >
                       Explore
                      </motion.button>
                    </Link>
                    <span className="flex items-center gap-1 text-[#808098] shrink-0">
                      <svg
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
                      {sub.enrolledStudents}
   

                     

     

                    </span>
                    <span className="flex items-center gap-1 text-[#808098]">
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
                      {sub.duration}
                    </span>
                  </div>
                </div>
              </div>
        ))}
      </div>
    </div>
  );
}
