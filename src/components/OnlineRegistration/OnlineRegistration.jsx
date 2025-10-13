import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const courses = [
  "Web Development",
  "Data Science",
  "AI/ML",
  "Business Management",
];

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
];

export default function OnlineRegistration() {
  return (
    <div className="min-h-screen flex items-center justify-center  py-8">
      <div className="max-w-5xl w-full flex flex-col md:flex-row shadow-xl rounded-2xl overflow-hidden ">
        {/* Left: Form */}
        <div className="flex-1 p-8 bg-[#F4F7FB]">
          <h2 className="text-2xl font-bold text-[#099F4E] ">
            Online Registration
          </h2>
          <p className="mb-6 text-[#808098]">
            Register online today and take the first step towards success!
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-300 p-4 rounded-lg">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-[#808098] mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  autoComplete="name"
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#808098] mb-1"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  autoComplete="email"
                />
              </div>
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#808098] mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+91-9876543210"
                  className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  autoComplete="tel"
                />
              </div>
              {/* Course */}
              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-[#808098] mb-1"
                >
                  Course Applied For
                </label>
                <select
                  id="course"
                  name="course"
                  required
                  className="block w-full border border-gray-300 
                                    text-[#808098] rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-transparent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
              {/* Current Address */}
              <div className="md:col-span-2">
                <label
                  htmlFor="currentAddress"
                  className="block text-sm font-medium text-[#808098] mb-1"
                >
                  Current Address
                </label>
                <textarea
                  id="currentAddress"
                  name="currentAddress"
                  required
                  rows={2}
                  className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                ></textarea>
              </div>
              {/* Permanent Address */}
              <div className="md:col-span-2">
                <label
                  htmlFor="permanentAddress"
                  className="block text-sm font-medium text-[#808098] mb-1"
                >
                  Permanent Address
                </label>
                <textarea
                  id="permanentAddress"
                  name="permanentAddress"
                  required
                  rows={2}
                  className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                ></textarea>
              </div>
              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-[#808098] mb-1"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  className="block w-full border border-gray-300 
                                    text-[#808098] rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-transparent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select country
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              {/* Amount / Fees Paid */}
              <div>
                <label
                  htmlFor="fees"
                  className="block text-sm font-medium text-[#808098] mb-1"
                >
                  Amount / Fees Paid
                </label>
                <input
                  type="number"
                  id="fees"
                  name="fees"
                  required
                  min="0"
                  className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Enter amount"
                />
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#50F48A] hover:bg-[#099F4E] cursor-pointer text-[#0C1818] font-semibold py-2 px-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-[#50F48A] focus:ring-offset-2"
            >
              Submit Registration
            </button>
            {/* Note */}
            <p className="text-xs text-gray-500 text-center mt-2">
              By submitting this form, you agree to our{" "}
              <a
                href="#"
                className="underline text-blue-600 hover:text-blue-800"
                tabIndex={-1}
              >
                Terms &amp; Conditions
              </a>
              .
            </p>
            {/* Online Fee Payment Info */}
            <p className="text-md text-[#0c1818] font-semibold text-center mt-4">
              Online fee payment
              <div className="flex items-center justify-center space-x-2 text-[#808098] m-2 gap-4">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#50f48a]" />
                  Secure
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#50f48a]" /> Safe{" "}
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#50f48a]" />
                  Saral
                </div>
              </div>
            </p>
          </form>
        </div>
        {/* Right: Logo / Branding */}
        <div className="md:w-1/2 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#099F4E]/80 to-[#1A1A2E]/90 z-10 rounded-tr-2xl rounded-br-2xl" />
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Certificate Illustration"
            className="object-cover w-full h-full z-0"
          />

          <div className="absolute z-10 flex flex-col items-center justify-center w-full px-6 py-10">
            <img
              src="Logo_drixcat.png"
              alt="Certificate Preview"
              className="rounded-lg w-3/5 max-w-xs min-w-[180px] hover:scale-105 transition-transform duration-300 "
            />
            <span className="block mt-6 text-white text-base font-medium text-center opacity-90">
              Empowering Learners,
              <br />
              Building Futures
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
