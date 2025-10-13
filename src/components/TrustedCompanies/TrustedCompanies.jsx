import React from "react";

// Example logo URLs (replace with your own in /public/logos or similar)
const logos1 = [
  "/Students_Work/accenture.webp",
  "/Students_Work/amazon.webp",
  "/Students_Work/aspire.webp",
  "/Students_Work/capgemini.webp",
  "/Students_Work/caratlane.webp",
   "/Students_Work/cartoon-mango.webp",
  "/Students_Work/cognizant.webp",
  "/Students_Work/comcast.webp",
    "/Students_Work/fiserv.webp"
];
const logos2 = [
  "/Students_Work/grappus.webp",
  "/Students_Work/hcl.webp",
  "/Students_Work/ibm.webp",
  "/Students_Work/infosys.webp",
  "/Students_Work/jll.webp",
   "/Students_Work/just-dial.webp",
  "/Students_Work/klenty.webp",
  "/Students_Work/larsen.webp",
  "/Students_Work/lenovo.webp",
];
const logos3 = [
  "/Students_Work/paypal.webp",
  "/Students_Work/siemens.webp",
  "/Students_Work/tcs.png",
  "/Students_Work/tech-mahindra.webp",
  "/Students_Work/thoughtworks.webp",
    "/Students_Work/virtusa.webp",
  "/Students_Work/wipro.png",
  "/Students_Work/zoho.webp",
  
];
export default function TrustedCompanies() {
  // Duplicate logos for seamless scrolling
  const marqueeLogos1 = [...logos1,...logos1];
   const marqueeLogos2 = [...logos2,...logos2];
    const marqueeLogos3 = [...logos3,...logos3];

  return (
    <section className="relative w-full py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-8">
        Where Our Students Are Making an Impact
      </h2>

      <div className="relative space-y-10">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Row 1 (left to right) */}
        <div className="overflow-hidden">
          <div
            className="flex items-center gap-16 animate-marquee-left"
            style={{
              width: "max-content",
              animation: "marquee-left 30s linear infinite",
            }}
          >
            {marqueeLogos1.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt=""
                className="max-h-12 md:max-h-16 w-auto transition-all duration-300 hover:scale-105"
                draggable={false}
              />
            ))}
          </div>
        </div>

        {/* Row 2 (right to left, offset visually) */}
        <div className="overflow-hidden">
          <div
            className="flex items-center gap-16 animate-marquee-right"
            style={{
              width: "max-content",
              animation: "marquee-right 28s linear infinite",
            }}
          >
            {marqueeLogos2.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt=""
                className="max-h-12 md:max-h-16 w-auto  transition-all duration-300 hover:scale-105"
                draggable={false}
              />
            ))}
          </div>
        </div>

        {/* Row 3 (left to right again) */}
        <div className="overflow-hidden">
          <div
            className="flex items-center gap-16 animate-marquee-left"
            style={{
              width: "max-content",
              animation: "marquee-left 32s linear infinite",
            }}
          >
            {marqueeLogos3.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt=""
                className="max-h-12 md:max-h-16 w-auto  transition-all duration-300 hover:scale-105"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom keyframes for alternating marquee directions */}
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left,
          .animate-marquee-right {
            display: flex;
            will-change: transform;
          }
        `}
      </style>
    </section>
  );
}