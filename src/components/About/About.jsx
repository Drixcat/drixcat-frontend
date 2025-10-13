import React from "react";
import {

FaUserGraduate,
FaChalkboardTeacher,
FaBookOpen,
FaAward,
FaLightbulb,
FaStar,
FaUniversalAccess,
FaUsers,
FaLinkedin,
FaTwitter,
} from "react-icons/fa";

// Dummy data for team and partners
const teamMembers = [
{
    name: "Aarav Sharma",
    role: "CEO & Co-Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "#",
    twitter: "#",
},
{
    name: "Priya Verma",
    role: "Head of Education",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "#",
    twitter: "#",
},
{
    name: "Rahul Mehta",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    linkedin: "#",
    twitter: "#",
},
{
    name: "Sneha Kapoor",
    role: "Mentorship Lead",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    linkedin: "#",
    twitter: "#",
},
];

const partners = [
{
    name: "NSDC",
    logo: "nsdc-logo-ss.jpg",
},
{
    name: "NASSCOM",
    logo: "nasscom.png",
},
{
    name: "ISO",
    logo: "iso.jpg",
},
{
    name: "MCA",
    logo: "mca.png",
},
];

const values = [
{
    icon: <FaLightbulb className="text-blue-600 text-3xl mb-2" aria-hidden="true" />,
    title: "Innovation",
    desc: "We embrace new ideas and technologies to enhance learning experiences.",
},
{
    icon: <FaStar className="text-blue-600 text-3xl mb-2" aria-hidden="true" />,
    title: "Excellence",
    desc: "We strive for the highest standards in education and mentorship.",
},
{
    icon: <FaUniversalAccess className="text-blue-600 text-3xl mb-2" aria-hidden="true" />,
    title: "Accessibility",
    desc: "We believe quality education should be accessible to everyone.",
},
{
    icon: <FaUsers className="text-blue-600 text-3xl mb-2" aria-hidden="true" />,
    title: "Community",
    desc: "We foster a supportive and collaborative learning environment.",
},
];

const stats = [
{
    icon: <FaUserGraduate className="text-blue-600 text-4xl mb-2" aria-hidden="true" />,
    label: "10,000+",
    desc: "Learners",
},
{
    icon: <FaChalkboardTeacher className="text-blue-600 text-4xl mb-2" aria-hidden="true" />,
    label: "500+",
    desc: "Mentors",
},
{
    icon: <FaBookOpen className="text-blue-600 text-4xl mb-2" aria-hidden="true" />,
    label: "100+",
    desc: "Courses",
},
{
    icon: <FaAward className="text-blue-600 text-4xl mb-2" aria-hidden="true" />,
    label: "95%",
    desc: "Success Rate",
},
];

const About = () => {
return (
    <main className="bg-gray-100 text-gray-800">
        {/* Hero Section */}
        <section
            className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400"
            aria-label="About Us Hero"
        >
            <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80"
                alt="Students learning together"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
                    About Us
                </h1>
                <p className="text-lg md:text-2xl text-blue-100 mb-6">
                    Empowering learners through technology and mentorship
                </p>
                <a
                    href="/courses"
                    className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition"
                    aria-label="Explore Courses"
                >
                    Explore Courses
                </a>
            </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 md:px-8 bg-gray-100" aria-label="Our Story">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2 w-full mb-8 md:mb-0">
                    <img
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=700&q=80"
                        alt="Team working together"
                        className="rounded-xl shadow-lg w-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 w-full">
                    <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Story</h2>
                    <p className="mb-4">
                        Founded by passionate educators and technologists, our platform was born from the belief that everyone deserves access to quality education and mentorship. We started as a small community and have grown into a thriving ecosystem of learners and mentors.
                    </p>
                    <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Our Mission</h3>
                    <p className="mb-4">
                        To empower individuals by providing accessible, high-quality education and personalized mentorship, leveraging the power of technology.
                    </p>
                    <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Our Vision</h3>
                    <p>
                        To become the leading platform for lifelong learning, fostering a global community of innovators, leaders, and changemakers.
                    </p>
                </div>
            </div>
        </section>

        {/* Key Highlights / Achievements */}
        <section className="py-16 bg-white" aria-label="Key Highlights">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center"
                        >
                            {stat.icon}
                            <div className="text-2xl font-bold text-blue-700">{stat.label}</div>
                            <div className="text-gray-600">{stat.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-4 bg-gray-100" aria-label="Core Values">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">Our Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {values.map((value, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition p-6 flex flex-col items-center text-center"
                        >
                            {value.icon}
                            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                            <p className="text-gray-600">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Team / Leadership */}
        <section className="py-16 px-4 bg-white" aria-label="Meet Our Team">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 rounded-xl shadow hover:shadow-lg hover:scale-105 transition p-6 flex flex-col items-center text-center"
                        >
                            <img
                                src={member.image}
                                alt={`Profile of ${member.name}`}
                                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100"
                            />
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-blue-600 mb-2">{member.role}</p>
                            <div className="flex gap-3 justify-center">
                                <a
                                    href={member.linkedin}
                                    aria-label={`LinkedIn profile of ${member.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 hover:text-blue-900 transition"
                                >
                                    <FaLinkedin size={22} />
                                </a>
                                <a
                                    href={member.twitter}
                                    aria-label={`Twitter profile of ${member.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 transition"
                                >
                                    <FaTwitter size={22} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 bg-gray-100" aria-label="Trusted By">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-blue-700 text-center mb-8">Trusted By</h2>
                <div className="overflow-hidden">
                    <div
                        className="flex gap-12 animate-scroll-x items-center"
                        style={{
                            animation: "scroll-x 20s linear infinite",
                        }}
                        aria-label="Partner logos carousel"
                    >
                        {partners.concat(partners).map((partner, idx) => (
                            <img
                                key={idx}
                                src={partner.logo}
                                alt={partner.name + " logo"}
                                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
                                style={{ minWidth: "120px" }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* Carousel animation keyframes */}
            <style>
                {`
                    @keyframes scroll-x {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}
            </style>
        </section>

        {/* Call-to-Action Banner */}
        <section
            className="py-12 px-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 text-white text-center"
            aria-label="Call to Action"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Join us on our mission to make quality education accessible for everyone.
            </h2>
            <a
                href="/courses"
                className="inline-block mt-4 bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-50 transition"
                aria-label="Get Started"
            >
                Get Started
            </a>
        </section>
    </main>
);
};

export default About;