import React, { useEffect, useState } from "react";
import courses from "../Courses/courses";
import axios from "axios";
import { HiCheckCircle, HiXCircle } from "react-icons/hi2";
import API_BASE_URL from "../../config";


const initialForm = {
    name: "",
    email: "",
    phone: "",
    course: "",
    mode:"",
    facultyName: "",
    drixcatID: "",
    startDate: "",
    endDate: "",
};



export default function ApplyCertification() {
    const [form, setForm] = useState(initialForm);
    const [courseOptions,setCourseOptions] = useState([])
    const [sendSuccess,setSendSuccess] = useState(false)
    const [sendFailure,setSendFailure] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleReset = () => setForm(initialForm);

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        setIsLoading(true)
        const res = await axios.post(`https://api.drixcat.com/contact/applycertificate`,form,{
            headers:{
                'Content-Type':'application/json'
            }
        })


       if(res.data.success){
      setSendSuccess(true)
        setForm(initialForm)
        setIsLoading(false)
    }else if(!res.success){
       setSendFailure(true)
         setForm(initialForm)
         setIsLoading(false)
     
     
    }

    };

    useEffect(()=>{
        document.title = "Apply for Certificate - Drixcat Tech"
 const allCourseNames = Object.values(courses)
  .flatMap(course => course.subcourses.map(sub => sub.name));

    setCourseOptions(allCourseNames)

    },[])

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

    return (
        <div className="min-h-screen bg-white flex items-center justify-center py-8 px-2">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
                {/* Left: Form */}
                <div className="md:w-1/2 bg-[#F4F7FB] p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-[#099F4E]">Apply for Certificate</h2>
                    <p className="text-[#808098] mb-6 mt-1">
                        Apply for your course certification today and showcase your expertise.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div>
                                <label className="text-sm font-medium text-[#808098] mb-1 block">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="text-sm font-medium text-[#808098] mb-1 block">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>
                            {/* Phone Number */}
                            <div>
                                <label className="text-sm font-medium text-[#808098] mb-1 block">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="9876543210"
                                    className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                    pattern="[6-9][0-9]{9}"
                                />
                            </div>
                            {/* Course Name */}
                            <div>
                                <label className="text-sm font-medium text-[#808098] mb-1 block">
                                    Course Name
                                </label>
                                <select
                                    name="course"
                                    value={form.course}
                                    onChange={handleChange}
                                    className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-transparent text-[#808098] "
                                    required
                                >
                                    <option value="" disabled>Select Course</option>
                                    {courseOptions.map((c) => (
                                        <option key={c} value={c}>
                                            {c}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* Center Name */}
                            <div>
                                <label className="text-sm font-medium text-[#808098] mb-1 block">
                                     Mode of Training
                                </label>
                                 <select
                                    name="mode"
                                    value={form.mode}
                                    onChange={handleChange}
                                    className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-transparent text-[#808098]"
                                    required
                                >
                                    <option value="" disabled>Select Mode</option>

                                    <option value="offline">Offline</option>
                                    <option value="online">Online</option>
                                   
                                </select>
                               
                            </div>
                            {/* Faculty Name */}
                            <div>
                                <label className="text-sm font-medium text-[#808098] mb-1 block">
                                    Faculty Name
                                </label>
                                <input
                                    type="text"
                                    name="facultyName"
                                    value={form.facultyName}
                                    onChange={handleChange}
                                    className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>
                        
                            {/* Start Date */}
                            <div>
                                <label className="text-sm font-medium text-[#808098] mb-1 block">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={form.startDate}
                                    onChange={handleChange}
                                    className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>
                            {/* End Date */}
                            <div>
                                <label className="text-sm font-medium text-[#808098] mb-1 block">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={form.endDate}
                                    onChange={handleChange}
                                    className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>
                        </div>

                            {/* Drixcat Student ID No. */}
                            <div>
                                <label className="text-sm font-medium text-[#808098] my-3 block">
                                    Drixcat Student ID No.
                                </label>
                                <input
                                    type="text"
                                    name="drixcatID"
                                    value={form.drixcatID}
                                    onChange={handleChange}
                                    className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>
                        {/* Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full md:w-auto bg-gradient-to-r from-[#50F48A] to-[#099F4E] 
                                cursor-pointer text-white font-bold rounded-lg px-6 py-2 transition hover:from-[#099F4E] hover:to-[#077C3A]"
                            >
                                {isLoading ? 'Sending...' : ' Send Request' }
                                
                            </button>
                            <button
                                type="button"
                                onClick={handleReset}
                                disabled={isLoading}
                                className="w-full md:w-auto
                                cursor-pointer bg-white border border-[#099F4E] text-[#099F4E] font-bold rounded-lg px-6 py-2 transition hover:bg-[#50F48A] hover:text-white"
                            >
                                Reset Form
                            </button>
                        </div>
                    </form>
                </div>
                {/* Right: Image */}
                <div className="md:w-1/2 relative min-h-[350px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#099F4E]/80 to-[#1A1A2E]/90 z-10 rounded-tr-2xl rounded-br-2xl" />
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                        alt="Certificate Illustration"
                        className="object-cover w-full h-full z-0"
                    />
                    {/* <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-6">
                        <svg
                            className="w-20 h-20 mb-4 opacity-80"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 48 48"
                        >
                            <rect x="8" y="8" width="32" height="32" rx="4" stroke="#fff" strokeWidth="3" />
                            <path d="M16 24h16M16 30h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="24" cy="18" r="3" fill="#fff" />
                        </svg>
                        <span className="text-lg font-semibold text-center drop-shadow-lg">
                            Earn your certificate and boost your career!
                        </span>
                    </div> */}

                     <div className="absolute z-10 flex flex-col items-center justify-center w-full px-6 py-10">
                     {/* https://d1csarkz8obe9u.cloudfront.net/posterpreviews/portrait-certificate-template-design-5f452092bb7cdc699d1536c1023e6025_screen.jpg?ts=1637050294 */}
                                      <img
  src="/Certificates/certificate.jpeg"
  alt="Certificate Preview"
className="block rounded-lg shadow-lg w-full max-w-3xl h-auto hover:scale-105 transition-transform duration-300"
/>
                        <span className="block mt-6 text-white text-base font-medium text-center opacity-90">
                            Your success deserves recognition.
                        </span>
                    </div>
                </div>
            </div>

            
                 {sendSuccess && (
                <div
              className={`fixed top-20 right-4 flex z-50 items-center gap-2 bg-green-500 text-white px-3 py-5 rounded shadow-lg transition-opacity ${
                sendSuccess ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <HiCheckCircle className="w-6 h-6" />
              <span>Applied Successfully</span>
            </div>
            
                 )}
            
                 {sendFailure && (
                <div
              className={`fixed top-20 right-4 flex z-60 items-center gap-2 bg-red-500 text-white px-3 py-5 rounded shadow-lg transition-opacity ${
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