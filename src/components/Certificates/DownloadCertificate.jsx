import React, { useState } from "react";
import { FaFileAlt, FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DownloadCertificate = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();
  const handleApply = () => {
  

    navigate("/applycertification");
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-10 px-5 flex items-center justify-center">
      <div className="max-w-5xl mx-auto shadow-xl rounded-2xl overflow-hidden bg-white flex flex-col lg:flex-row">
        {/* Left Side: Actions */}
        <div className="w-full lg:w-1/2 bg-[#F4F7FB] flex flex-col justify-center px-8 py-10">
          <h2 className="text-2xl font-bold text-[#099F4E] mb-2">
            Download Certificate
          </h2>
          <p className="text-[#808098] mb-8">
            Enter your Drixcat Student ID to download your course completion
            certificate.
          </p>
          <div>
            <label className="text-sm font-medium text-[#808098] mb-1 block">
              Drixcat ID
            </label>
            <input
              type="text"
              name="studentId"
              value={""}
              // onChange={handleChange}
              className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none my-1"
              required
              placeholder="Enter Drixcat ID to Download Certificate"
            />
          </div>
          <p className="text-xs text-[#808098] my-2">
            Ensure You have applied before Downloading.
          </p>

          <div className="">
            <button
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#50F48A] to-[#099F4E] text-white font-bold rounded-lg w-full py-3 shadow transition-all duration-300 hover:from-[#43d97a] hover:to-[#077d3b] focus:outline-none cursor-pointer"
           
            >
              <FaFileAlt className="text-lg" />
              View Certificate
            </button>
          </div>
        </div>

        {/* Right Side: Certificate Preview */}
        <div className="md:w-1/2 relative min-h-[650px] flex items-center justify-center">
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
            <img
              src="/Certificates/certificate.jpeg"
              alt="Certificate Preview"
              className=" w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
            />
            <span className="block mt-6 text-white text-base font-medium text-center opacity-90">
              Your success deserves recognition.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCertificate;
