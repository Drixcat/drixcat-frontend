import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import subcourses from "../Courses/courses"
import { useEffect } from "react";
import axios from "axios";



const mode = [
  "Online",
  "Offline"
];

export default function OnlineRegistration() {

 

  const [form, setForm] = React.useState({
    name:"",
    email:"",
    phone:"",
    course:"",
    currentAddress:"",
    permanentAddress:"",
    mode:"",
    fees:"",
    qrscreenshot:""

  })
  const [courses,setCourses] = React.useState([])
  const {course} = location.state || '' ;

  const [next,setNext] = React.useState(false)
  const [isLoading,setIsLoading] = React.useState(false)
  const [sendSuccess,setSendSuccess] = useState(false)
 



   useEffect(()=>{
     
   const allSubNames = Object.values(subcourses)
    .flatMap(course => course.subcourses.map(sub => sub.name));
  
   setCourses(allSubNames)
  
   setForm({...form,course:course?course:''})
  
  
  
    },[])

    const handleChange = (e)=>{
      const {name,value} = e.target;
     const file = e.target.files ? e.target.files[0] : null;

     if(file){
      setForm({...form,[name]:file})
      return;
     }


 

      setForm({...form,[name]:value})

    }


    


const handleSubmit = async (e) => {
  e.preventDefault();

  // Step 1: On first click move to next page (no loading here)

 if(
  !form.name ||
  !form.email ||
  !form.phone ||
  !form.course ||
  !form.currentAddress ||
  !form.permanentAddress ||
  !form.mode ||
  !form.fees
){
  alert("Please fill all the fields");
  return;
}


  if (!next) {
    if (form.fees < 2000) {
      alert("Minimum fees should be 2000");
      return;
    }
    setNext(true);
    return;
  }

  
  setIsLoading(true);

  try {
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    let res = await axios.post(
      "https://api.drixcat.com/contact/onlineregistration",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );


    
    if (res.status === 200) {
      setSendSuccess(true);
       const audio = new Audio("/mixkit-positive-notification-951.wav");
  audio.play();
      setForm({
        name: "",
        email: "",
        phone: "",
        course: "",
        currentAddress: "",
        permanentAddress: "",
        mode: "",
        fees: "",
        qrscreenshot: ""
      });
    }
  } catch (err) {
    alert("Error submitting the form. Please try again.");
  } finally {
    setIsLoading(false);
  }
};


useEffect(()=>{

  
  if(sendSuccess)
  {
    setTimeout(()=>{
      setSendSuccess(false)
       setNext(prev=>!prev)
    },10000)
  }

},[sendSuccess])





  

  return (
    <div className="min-h-screen flex items-center justify-center  py-8 ">
      <div className="max-w-5xl w-full flex flex-col md:flex-row shadow-xl rounded-2xl overflow-hidden ">
        {/* Left: Form */}
        <div className="flex-1 p-8 bg-[#F4F7FB] border-t border-l border-b border-gray-300 rounded-tl-2xl rounded-bl-2xl overflow-hidden">
          <h2 className="text-2xl font-bold text-[#099F4E] ">
            Online Registration
          </h2>
          <p className="mb-6 text-[#808098]">
            Register online today and take the first step towards success!
          </p>
          <form className="space-y-6" encType="multipart/form-data">
         {!next ? (
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
                  name="name"
                  required
                  className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
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
                  value={form.email}
                  onChange={handleChange}
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
                  pattern="[6-9][0-9]{9}"
                  placeholder="+91-9876543210"
                  className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
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
                 value={form.course}
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
                  value={form.currentAddress}
                  onChange={handleChange}
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
                  value={form.permanentAddress}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                ></textarea>
              </div>
              {/* Training Mode */}
              <div>
                <label
                  htmlFor="mode"
                  className="block text-sm font-medium text-[#808098] mb-1"
                >
                  Training Mode
                </label>
                <select
                  id="mode"
                  name="mode"
                  required
                  value={form.mode}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 
                                    text-[#808098] rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-transparent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Mode
                  </option>
                  {mode.map((mode) => (
                    <option key={mode} value={mode}>
                      {mode}
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
                  min="2000"
                  value={form.fees}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Enter amount"
                />
              </div>
            </div>) : !sendSuccess ? (
              <div className="text-center font-semibold">

                <img src="/QR/QR.jpg" alt="QR Code For Online Registration" style={{height:"500px",width:"100%",objectFit:"contain"}} />



<label
  htmlFor="qrscreenshot"
  className="w-full mt-4 cursor-pointer flex flex-col items-center justify-center 
  border-2 border-dashed border-[#099F4E] bg-white/60 rounded-xl p-6 
  hover:bg-[#E8FFF0] hover:border-[#50F48A] transition duration-200 shadow-sm"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#099F4E"
    className="w-14 h-14 mb-3"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16.5V3.75m0 12.75l3.75-3.75M12 16.5l-3.75-3.75M3.75 18.75h16.5"
    />
  </svg>

  <p className="text-[#0C1818] font-medium">
    Upload Payment Screenshot
  </p>
  <span className="text-sm text-[#808098]">
    (JPG Only)
  </span>

  <input
    type="file"
    id="qrscreenshot"
    name="qrscreenshot"
    accept="image/jpeg"
    className="hidden"
    required
    onChange={handleChange}
  />
</label>

              </div>
            ): (<div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 border border-green-300 max-w-lg mx-auto mt-6">
  <div className="bg-green-100 p-4 rounded-full mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="green"
      className="w-12 h-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  </div>

  <h2 className="text-2xl font-semibold text-green-700 text-center">
    Registration Request Submitted Successfully!
  </h2>

  <p className="text-gray-600 text-center mt-3">
    Thank you for registering. We have received your request and our team
    will review it shortly. You’ll receive a confirmation message soon.
  </p>
</div>
)}
            {/* Submit Button */}
          {!sendSuccess&&(
              <button
              type="submit"
              className="w-full bg-[#50F48A] hover:bg-[#099F4E] cursor-pointer text-[#0C1818] font-semibold py-2 px-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-[#50F48A] focus:ring-offset-2"
              
              onClick={handleSubmit}
            >
              {isLoading ? "Submitting..." : next ? "Submit Registration":  "Next"}
            </button>
          )}
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
            <div className="text-md text-[#0c1818] font-semibold text-center mt-4">
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
            </div>
          </form>
        </div>
        {/* Right: Logo / Branding */}
      <div className="hidden md:block md:w-1/2 border-t border-r border-b border-gray-300 rounded-tr-2xl rounded-br-2xl overflow-hidden">
  <img
    src="/online-registration-right-image.jpeg"
    alt="Certificate Preview"
    className="w-full h-full object-cover rounded-tr-2xl rounded-br-2xl"
  />
</div>
      </div>
    </div>
  );
}
