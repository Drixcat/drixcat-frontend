import React, { useEffect } from 'react'
import API_BASE_URL from '../../config';
import { motion } from 'framer-motion';
import { FaTimes } from "react-icons/fa";
import axios from 'axios';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function PopUp({onClose,onSubmitSuccess}) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    trainingMode: '',
    currentProfile: '',
    course: '',
    query: ''
  });

  const selectMode = ["Online", "Offline"];
  const selectCurrentProfile = ["Student","Working Professional","Looking For Job"]

  const [sendSuccess, setSendSuccess] = React.useState(false);
  const [sendFailure, setSendFailure] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(true); // control popup visibility

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitQuery = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    

    try {
      const res = await axios.post(`${API_BASE_URL}/contact/corporateenquiry`, formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (res.data.success) {
        setSendSuccess(true);
      } else {
        setSendFailure(true);
      }

      setFormData({ name: '', email: '', phone: '', trainingMode: '', currentProfile:'', course: '', query: '' });
      setIsLoading(false);
      setTimeout(()=>{
        onSubmitSuccess()

      },[3000])

    } catch (err) {
      setSendFailure(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (sendSuccess || sendFailure) {
      setTimeout(() => {
        setSendSuccess(false);
        setSendFailure(false);
      }, 3000);
    }
  }, [sendSuccess, sendFailure]);

  if (!showPopup) return null; // hide if closed

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 overflow-y-auto p-4 sm:p-6 md:p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-[#f4f4fb] w-full sm:w-[80%] md:w-[60%] lg:w-[40%] p-6 sm:p-8 rounded-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        <FaTimes
          className="absolute right-5 top-5 text-xl cursor-pointer hover:text-red-500 transition"
          onClick={onClose}
        />

        <h2 className="text-2xl font-semibold mb-6 text-[#0c1818] text-center">
          Enquiry Now
        </h2>

        <form className="space-y-4 text-sm" onSubmit={handleSubmitQuery}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#808098] mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#50f48a] outline-none"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </div>
            <div>
              <label className="block text-[#808098] mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#50f48a] outline-none"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
            </div>
            <div>
              <label className="block text-[#808098] mb-1">Phone</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#50f48a] outline-none"
                placeholder="Enter Phone"
                pattern="[6-9][0-9]{9}"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
            </div>
            <div>
              <label className="block text-[#808098] mb-1">Training Mode</label>
              <select
                name="trainingMode"
                required
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#50f48a] outline-none w-full bg-transparent"
                value={formData.trainingMode}
                onChange={handleFormChange}
              >
                <option value="" disabled>Select a Mode</option>
                {selectMode.map((mode) => (
                  <option key={mode} value={mode}>{mode}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[#808098] mb-1">Course</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#50f48a] outline-none"
                placeholder="Enter Course"
                name="course"
                value={formData.course}
                onChange={handleFormChange}
                required
              />
            </div>
           <div>
              <label className="block text-[#808098] mb-1">Current Profile </label>
              <select
                name="currentProfile"
                required
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#50f48a] outline-none w-full bg-transparent"
                value={formData.currentProfile}
                onChange={handleFormChange}
              >
                <option value="" disabled>Select a Profile</option>
                {selectCurrentProfile.map((profile) => (
                  <option key={profile} value={profile}>{profile}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[#808098] mb-1">Any Query?</label>
            <textarea
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#50f48a] outline-none resize-none"
              placeholder="Write your message"
              rows="3"
              name="query"
              value={formData.query}
              onChange={handleFormChange}
            ></textarea>
          </div>

         {!sendSuccess ?  <div className="flex space-x-4 pt-2 justify-center">
            <button
              type="submit"
              className="bg-[#099f4e] cursor-pointer text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
            <button
              type="reset"
              className="bg-gray-400 cursor-pointer text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
            >
              Reset
            </button>
          </div> : <div className="">
            <p
              
              className="text-[#099f4e] text-center px-6 py-2 hover:opacity-90 transition"
            >
              {`Email sent! We’ll get back to you soon.`}
            </p>
          </div> }
        </form>
      </motion.div>
    </div>
  );
}

export default PopUp;
