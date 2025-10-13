import React from "react";
const courses = [
  "Web Development",
  "Data Science",
  "AI/ML",
  "Business Management",
];



const centers = [
  {
    name: "Registered office address",
    phone: "+91-9953366262",
    whatsapp: "+91-9953366262",
    email: "drixcatofficial@gmail.com",
    address: "9/1 261, Vashundhra, Ghaziabad, Uttar Pradesh - 201012",
  },
  {
    name: "Noida office address",
    phone: "+91-9953366262",
    whatsapp: "+91-9953366262",
    email: "drixcatofficial@gmail.com",
    address: "1ST & 3RD FLOOR, BLOCK-B-40/B-3,SECTOR-1,NEAR LEMON TREE HOTEL, NOIDA - 201301",
  },
];

export default function ContactUs() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 space-y-12">
        {/* Form Section */}
        <div className="bg-[#f4f4fb] p-4 sm:p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-[#099f4e] mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            We’d love to hear from you! Get in touch with us.
          </p>
          <form className="space-y-4 ">
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <label className="block text-[#808098] font-medium  mb-1 ">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0999f4] outline-none w-full bg-transparent"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-[#808098] font-medium mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0999f4] outline-none w-full bg-transparent"
                />
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-1/3">
                <label className="block text-[#808098] font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0999f4] outline-none w-full bg-transparent"
                />
              </div>
              <div className="w-1/3">
                <label className="block text-[#808098] font-medium mb-1">
                  Center
                </label>
                <input
                  type="text"
                  placeholder="Enter center name"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0999f4] outline-none w-full bg-transparent"
                />
              </div>
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
            </div>

            <div>
              <label className="block text-[#808098] font-medium mb-1">
                How can we help you?
              </label>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0999f4] outline-none w-full resize-none bg-transparent"
              />
            </div>
            <button
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#50F48A] to-[#099F4E] text-white font-bold rounded-lg w-full py-3 shadow transition-all duration-300 hover:from-[#43d97a] hover:to-[#077d3b] focus:outline-none cursor-pointer"
              
            >
              
              Send Message
            </button>
          </form>
        </div>

        {/* Our Presence Section */}
        <div>
          <h2 className="text-3xl font-semibold text-[#099f4e] mb-6 text-center">
            Our Presence
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {centers.map((center, idx) => (
              <div
                key={idx}
                className="bg-[#f4f4fb] p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex-1"
              >
                <div className="mb-2 text-lg text-center font-semibold text-gray-800">
                  {center.name}
                </div>
                <div className="text-[#808098] mb-1">
                  <span className="font-medium text-[#0c1818]">Phone:</span> {center.phone}
                </div>
                <div className="text-[#808098] mb-1">
                  <span className="font-medium text-[#0c1818]">WhatsApp:</span>{" "}
                  {center.whatsapp}
                </div>
                <div className="text-[#808098] mb-1">
                  <span className="font-medium text-[#0c1818]">Email:</span> {center.email}
                </div>
                <div className="text-[#808098]">
                  <span className="font-medium text-[#0c1818]">Address:</span> {center.address}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
