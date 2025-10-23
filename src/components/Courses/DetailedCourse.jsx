import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import courses from "./courses";

const DetailedCourse = () => {
  const { courseslug, subcourseslug } = useParams();
    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!courseslug) return <div className="text-center py-20">Course not found</div>;

  const deslug = subcourseslug.replace(/-/g, " ");
  const course = courses[courseslug]?.subcourses.find((sc) => sc.name === deslug);
  if (!course) return <div className="text-center py-20">Subcourse not found</div>;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-16 font-sans text-[#0c1818] flex flex-col lg:flex-row gap-10">
      
      {/* Left Content */}
      <section className="w-full lg:w-2/3 flex flex-col gap-8">
        
        {/* Header */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#099f4e]">{course.name}</h1>
          <p className="text-[#808098]">{course.overview}</p>
          <p><span className="font-semibold">Duration:</span> {course.duration}</p>
          <p><span className="font-semibold">Enrolled Students:</span> {course.enrolledStudents}</p>
        </motion.div>

        {/* Key Modules */}
        <section className="bg-[#f4f4fb] p-5 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#099f4e] mb-4">Key Modules</h2>
          <ul className="space-y-2 list-inside list-disc">
            {course.KeyModules?.map((mod, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <span className="text-[#099f4e] font-bold text-lg">•</span>
                <span>{mod}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="bg-[#f4f4fb] p-5 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#099f4e] mb-4">Skills You Will Gain</h2>
          <ul className="space-y-2 list-inside list-disc">
            {course.SkillsGained?.map((skill, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <span className="text-[#099f4e] font-bold text-lg">•</span>
                <span>{skill}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Career Benefits */}
        <section className="bg-[#f4f4fb] p-5 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#099f4e] mb-4">Career Benefits</h2>
          <ul className="space-y-2 list-inside list-disc">
            {course.CareerBenefits?.map((benefit, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <span className="text-[#099f4e] font-bold text-lg">•</span>
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section className="bg-[#f4f4fb] p-5 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#099f4e] mb-4">Projects</h2>
          <ul className="space-y-2 list-inside list-disc">
            {course.Projects?.map((project, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <span className="text-[#099f4e] font-bold text-lg">•</span>
                <span>{project}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Back Button */}
        <div className="text-center flex gap-5">
          <Link
            to={`/courses/${courseslug.toLowerCase()}`}
            className="inline-block bg-[#50f48a] hover:bg-[#099f4e] text-[#0c1818] font-semibold rounded-lg py-2 px-6 shadow-md transition-colors"
          >
            Back to Courses
          </Link>
          <Link
            to={`/contact`}
            state={{ course: deslug }}
            className="inline-block bg-[#50f48a] hover:bg-[#099f4e] text-[#0c1818] font-semibold rounded-lg py-2 px-6 shadow-md transition-colors"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Right Image */}
   {width>1030 &&    <section className="w-full lg:w-1/3 flex justify-center items-start">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={course.image}
            alt={course.name}
            className="w-full rounded-xl shadow-md hover:shadow-lg transition-shadow object-cover"
            style={{ objectPosition: course.position || "center" }}
          />
        </motion.div>
      </section>}

    </div>
  );
};

export default DetailedCourse;
