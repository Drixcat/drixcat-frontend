import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiCheckCircle, HiXCircle } from "react-icons/hi2";

import subcourses from '../Courses/courses'
import { useLocation } from "react-router-dom";







const centers = [
  {
    name: "Registered office address",
    phone: "+91-9953366262",
    whatsapp: "+91-9953366262",
    email: "info@drixcat.com",
    address: "9/1 261, Vashundhra, Ghaziabad, Uttar Pradesh - 201012",
  },
  {
    name: "Noida office address",
    phone: "+91-9953366262",
    whatsapp: "+91-9953366262",
    email: "info@drixcat.com",
    address: "1ST & 3RD FLOOR, BLOCK-B-40/B-3,SECTOR-1,NEAR LEMON TREE HOTEL, NOIDA - 201301",
  },
];

const selectCenters = ["Ghaziabad", "Noida"];



export default function ContactUs() {

  const location = useLocation();
  const {course} = location.state || '' ;
  console.log(course)
  const [formData,setFormData] = useState({name:'',email:'',phone:'',center:'',course:'',message:''})
  const [sendSuccess,setSendSuccess] = useState(false)
  const [sendFailure,setSendFailure] = useState(false)
  const [courses,setCourses] = useState([])
  const [isLoading,setIsLoading] = useState(false)
 

  useEffect(()=>{
    document.title = "Contact Us - Drixca Tech"
 const allSubNames = Object.values(subcourses)
  .flatMap(course => course.subcourses.map(sub => sub.name));

 setCourses(allSubNames)

 setFormData({...formData,course:course?course:''})



  },[])

  const sendMail = async (e) => {
    e.preventDefault();
    // Implement mail sending logic here

    setIsLoading(true);
 
    const res = await axios.post('http://localhost:3000/contact/mail',formData,{
      headers:{
        'Content-Type':'application/json'
      }
    })

    

    if(res.data.success){
      setSendSuccess(true)
      
      setFormData({name:'',email:'',phone:'',center:'',course:'',message:''})
      setIsLoading(false)
    }else if(!res.success){
       setSendFailure(true)
       setFormData({name:'',email:'',phone:'',center:'',course:'',message:''})
       setIsLoading(false);
     
    }






  }


  useEffect(()=>{


    if(sendSuccess)
    {
   setTimeout(() => {
      setSendSuccess(false)
    }, 3000);
    }else if(sendFailure)
    {
   setTimeout(() => {
      setSendFailure(false)
    }, 3000);
    }
    
  
   

  

  },[sendSuccess,sendFailure])

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }



  return (
    <div className="bg-white min-h-screen relative">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 space-y-12">
        {/* Form Section */}
        <div className="bg-[#f4f4fb] p-4 sm:p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-[#099f4e] mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            We’d love to hear from you! Get in touch with us.
          </p>
         <form className="space-y-4" onSubmit={sendMail}>
  <div className="flex flex-wrap gap-4">
    <div className="flex-1 min-w-[250px]">
      <label className="block text-[#808098] font-medium mb-1">Full Name</label>
      <input
        type="text"
        required
        placeholder="Enter your full name"
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0999f4] outline-none w-full bg-transparent"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
    </div>
    <div className="flex-1 min-w-[250px]">
      <label className="block text-[#808098] font-medium mb-1">Email ID</label>
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0999f4] outline-none w-full bg-transparent"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </div>
  </div>

  <div className="flex flex-wrap gap-4">
    <div className="flex-1 min-w-[200px]">
      <label className="block text-[#808098] font-medium mb-1">Phone Number</label>
      <input
        type="tel"
        required
        placeholder="Enter your phone number"
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0999f4] outline-none w-full bg-transparent"
        pattern="[6-9][0-9]{9}"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
    </div>
    <div className="flex-1 min-w-[200px]">
      <label className="block text-[#808098] font-medium mb-1">Center</label>
        <select
        name="center"
        required
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0999f4] outline-none w-full bg-transparent"
        value={formData.center}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select a Center
        </option>
        {selectCenters.map((center) => (
          <option key={center} value={center}>
            {center}
          </option>
        ))}
      </select>
    </div>
    <div className="flex-1 min-w-[200px]">
      <label className="block text-[#808098] font-medium mb-1">Course Applied For</label>
      <select
        name="course"
        required
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0999f4] outline-none w-full bg-transparent"
        value={formData.course}
        onChange={handleChange}
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
    <label className="block text-[#808098] font-medium mb-1">How can we help you?</label>
    <textarea
      rows={4}
      required
      placeholder="Type your message"
      className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0999f4] outline-none w-full resize-none bg-transparent"
      name="message"
      value={formData.message}
      onChange={handleChange}
    />
  </div>

  <button
    type="submit"
    disabled={isLoading}
    className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#50F48A] to-[#099F4E] text-white font-bold rounded-lg w-full py-3 shadow transition-all duration-300 hover:from-[#43d97a] hover:to-[#077d3b] focus:outline-none cursor-pointer"
  >
    {isLoading ?"Sending...":"Send Message"}
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

     {sendSuccess && (
    <div
  className={`absolute top-4 right-4 flex items-center gap-2 bg-green-500 text-white px-3 py-5 rounded shadow-lg transition-opacity ${
    sendSuccess ? 'opacity-100' : 'opacity-0'
  }`}
>
  <HiCheckCircle className="w-6 h-6" />
  <span>Email Sent Successfully</span>
</div>

     )}

     {sendFailure && (
    <div
  className={`absolute top-4 right-4 flex items-center gap-2 bg-red-500 text-white px-3 py-5 rounded shadow-lg transition-opacity ${
    sendFailure ? 'opacity-100' : 'opacity-0'
  }`}
>
  <HiXCircle className="w-6 h-6" />
  <span>Something went wrong</span>
</div>

     )}
    </div>
  );
}
