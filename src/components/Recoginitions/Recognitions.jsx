import React from "react";

// List of logo objects
const logos = [
  {
    src: "/Companies/aicte_acc.webp",
    alt: "aicte Logo",
  },
  {
    src: "/Companies/anna_university_chennai_acc.webp",
    alt: "anna_university_chennai Logo",
  },
  {
    src: "/Companies/autodesk.webp",
    alt: "autodesk Logo",
  },
  {
    src: "/Companies/Google_Acc.webp",
    alt: "Google Logo",
  },
    {
    src: "/Companies/google_analysis_acc.webp",
    alt: "google analysis Logo",
  },
  {
    src: "/Companies/iaf_acc.webp",
    alt: "iaf Logo",
  },
  {
    src: "/Companies/IBM_Acc.webp",
    alt: "IBM Logo",
  },
  {
    src: "/Companies/iit_delhi_acc.webp",
    alt: "IIT Delhi Logo",
  },
    {
    src: "/Companies/iit_kanpur_acc.webp",
    alt: "IIT Kanpur Logo",
  },
  {
    src: "/Companies/iit_ropar_acc.webp",
    alt: "IIT Ropar Logo",
  },
    {
    src: "/Companies/iitm_pravartak_acc.webp",
    alt: "IITM Pravartak Logo",
  },
  {
    src: "/Companies/ISO_acc.jfif",
    alt: "ISO Logo",
  },
  {
    src: "/Companies/itt_gandhinagar_acc.webp",
    alt: "ITT Gandhinagar Logo",
  },
  {
    src: "/Companies/mca_acc.png",
    alt: "MCA Logo",
  },
  {
    src: "/Companies/microsoft_certification_acc.webp",
    alt: "Microsoft Certification Logo",
  },
    {
    src: "/Companies/msde.png",
    alt: "MSDE Logo",
  },
  {
    src: "/Companies/nasscom_acc.webp",
    alt: "nasscom Logo",
  },
  {
    src: "/Companies/nsdc_acc.webp",
    alt: "nsdc Logo",
  },
  {
    src: "/Companies/otabu.webp",
    alt: "otabu Logo",
  },
    {
    src: "/Companies/skill_development_acc.webp",
    alt: "skill development Logo",
  },
  {
    src: "/Companies/Skill_India_Acc.png",
    alt: "Skill India Logo",
  },
  {
    src: "/Companies/swayam_plus.webp",
    alt: "swayam plus Logo",
  }
];

// Marquee animation keyframes (Tailwind doesn't support custom keyframes inline)
const marqueeStyles = `
@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
`;

const Recoginitions = () => {
  return (
    <section className="py-12 bg-gray-50">
      {/* Inject marquee keyframes */}
      <style>{marqueeStyles}</style>
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3">
         Our Accreditations & Partnerships
        </h2>
        <p className="text-center text-gray-500 mb-8">
          We are proudly associated and recognized by leading organizations.
        </p>
        <div className="relative overflow-hidden">
          {/* Marquee container */}
          <div
            className="flex items-center"
            style={{
              // Hide scrollbar for horizontal scroll
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div
              className="flex items-center gap-8 animate-marquee group/marquee"
              style={{
                animation: "marquee 25s linear infinite",
                // Pause on hover
                animationPlayState: "running",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.animationPlayState = "paused")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.animationPlayState = "running")
              }
            >
              {/* Repeat logos twice for seamless loop */}
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="hover:transition-shadow transform hover:scale-105 duration-200 flex items-center justify-center h-40 w-80 min-w-[10rem] mx-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 object-contain mx-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Responsive adjustments */}
      <style>{`
                @media (max-width: 768px) {
                    .animate-marquee {
                        gap: 1.5rem;
                    }
                }
                .animate-marquee {
                    min-width: 200%;
                }
            `}</style>
    </section>
  );
};

export default Recoginitions;
