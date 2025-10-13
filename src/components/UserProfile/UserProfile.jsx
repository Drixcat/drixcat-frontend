import React, { useState } from "react";
import {

UserCircleIcon,
PencilSquareIcon,
AcademicCapIcon,
Cog6ToothIcon,
DocumentArrowDownIcon,
BookOpenIcon,
ArrowRightCircleIcon,
ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const TABS = [
{ name: "Overview", icon: AcademicCapIcon },
{ name: "Enrolled Courses", icon: BookOpenIcon },
{ name: "Certificates", icon: DocumentArrowDownIcon },
{ name: "Settings", icon: Cog6ToothIcon },
];

const mockUser = {
avatar:
    "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png",
name: "Alex Johnson",
email: "alex.johnson@email.com",
role: "Student",
stats: {
    enrolled: 8,
    completed: 5,
    certificates: 3,
    progress: 65,
},
courses: [
    {
        id: 1,
        image: "https://source.unsplash.com/400x200/?coding,course",
        title: "React for Beginners",
        mentor: "Jane Doe",
        totalClasses: 24,
        progress: 80,
    },
    {
        id: 2,
        image: "https://source.unsplash.com/400x200/?python,course",
        title: "Python Mastery",
        mentor: "John Smith",
        totalClasses: 30,
        progress: 45,
    },
    // Add more courses as needed
],
certificates: [
    {
        id: 1,
        title: "React for Beginners",
        date: "2024-03-10",
        file: "#",
    },
    {
        id: 2,
        title: "Python Mastery",
        date: "2024-05-01",
        file: "#",
    },
    // Add more certificates as needed
],
};

function classNames(...classes) {
return classes.filter(Boolean).join(" ");
}

export default function UserProfile() {
const [activeTab, setActiveTab] = useState("Overview");
const [editOpen, setEditOpen] = useState(false);
const [settings, setSettings] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@email.com",
    mobile: "",
    password: "",
    avatar: mockUser.avatar,
});
const [feedback, setFeedback] = useState({ subject: "", message: "" });

// Handlers
const handleSettingsChange = (e) => {
    const { name, value, files } = e.target;
    setSettings((prev) => ({
        ...prev,
        [name]: files ? URL.createObjectURL(files[0]) : value,
    }));
};

const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
};

// Main Render
return (
    <div className="bg-white min-h-screen py-8 px-2 sm:px-6 lg:px-16">
        {/* Profile Header */}
        <section className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="relative">
                <img
                    src={settings.avatar}
                    alt="User avatar"
                    className="w-28 h-28 rounded-full object-cover border-4 border-blue-600 shadow"
                />
                <button
                    aria-label="Edit profile"
                    onClick={() => setEditOpen(true)}
                    className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <PencilSquareIcon className="w-5 h-5" />
                </button>
            </div>
            <div className="flex-1 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-900">{mockUser.name}</h2>
                <p className="text-gray-600">{mockUser.email}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {mockUser.role}
                </span>
            </div>
            <button
                aria-label="Edit profile"
                onClick={() => setEditOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <PencilSquareIcon className="w-5 h-5" />
                Edit Profile
            </button>
        </section>

        {/* Tabs Navigation */}
        <nav
            className="max-w-4xl mx-auto mb-6 flex flex-col sm:flex-row gap-2 sm:gap-4"
            aria-label="Profile sections"
        >
            {TABS.map((tab) => (
                <button
                    key={tab.name}
                    aria-label={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={classNames(
                        "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400",
                        activeTab === tab.name
                            ? "bg-blue-600 text-white shadow"
                            : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                    )}
                >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.name}</span>
                </button>
            ))}
        </nav>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
            {activeTab === "Overview" && (
                <OverviewSection stats={mockUser.stats} />
            )}
            {activeTab === "Enrolled Courses" && (
                <CoursesSection courses={mockUser.courses} />
            )}
            {activeTab === "Certificates" && (
                <CertificatesSection certificates={mockUser.certificates} />
            )}
            {activeTab === "Settings" && (
                <SettingsSection
                    settings={settings}
                    onChange={handleSettingsChange}
                />
            )}
        </div>

        {/* Feedback & Support */}
        <div className="max-w-4xl mx-auto mt-10">
            <FeedbackSection
                feedback={feedback}
                onChange={handleFeedbackChange}
            />
        </div>

        {/* Edit Profile Modal */}
        {editOpen && (
            <EditProfileModal
                settings={settings}
                onClose={() => setEditOpen(false)}
                onChange={handleSettingsChange}
            />
        )}
    </div>
);
}

// Overview Section
function OverviewSection({ stats }) {
return (
    <section className="bg-white rounded-xl shadow p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <AcademicCapIcon className="w-6 h-6 text-blue-600" />
            Overview
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <StatCard label="Enrolled Courses" value={stats.enrolled} />
            <StatCard label="Completed Courses" value={stats.completed} />
            <StatCard label="Certificates" value={stats.certificates} />
        </div>
        <div>
            <label
                htmlFor="progress"
                className="block text-sm font-medium text-gray-700 mb-2"
            >
                Learning Progress
            </label>
            <div className="flex items-center gap-3">
                <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                        className="bg-blue-600 h-4 rounded-full transition-all"
                        style={{ width: `${stats.progress}%` }}
                        aria-valuenow={stats.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        role="progressbar"
                    ></div>
                </div>
                <span className="text-sm font-semibold text-blue-700">
                    {stats.progress}%
                </span>
            </div>
        </div>
    </section>
);
}

function StatCard({ label, value }) {
return (
    <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center shadow-sm">
        <span className="text-2xl font-bold text-blue-700">{value}</span>
        <span className="text-sm text-gray-600">{label}</span>
    </div>
);
}

// Courses Section
function CoursesSection({ courses }) {
return (
    <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <BookOpenIcon className="w-6 h-6 text-blue-600" />
            Enrolled Courses
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
                <div
                    key={course.id}
                    className="bg-white rounded-xl shadow p-4 flex flex-col"
                >
                    <img
                        src={course.image}
                        alt={course.title}
                        className="rounded-lg h-32 w-full object-cover mb-3"
                    />
                    <h4 className="font-semibold text-gray-900">{course.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">
                        Mentor: <span className="font-medium">{course.mentor}</span>
                    </p>
                    <p className="text-xs text-gray-500 mb-2">
                        Total Classes: {course.totalClasses}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${course.progress}%` }}
                                aria-valuenow={course.progress}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                role="progressbar"
                            ></div>
                        </div>
                        <span className="text-xs font-semibold text-blue-700">
                            {course.progress}%
                        </span>
                    </div>
                    <div className="mt-auto flex gap-2">
                        <button
                            aria-label="Continue course"
                            className="flex-1 flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <ArrowRightCircleIcon className="w-4 h-4" />
                            Continue
                        </button>
                        <button
                            aria-label="View course details"
                            className="flex-1 flex items-center justify-center gap-1 bg-gray-100 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Details
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
}

// Certificates Section
function CertificatesSection({ certificates }) {
return (
    <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <DocumentArrowDownIcon className="w-6 h-6 text-blue-600" />
            Certificates
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
                <div
                    key={cert.id}
                    className="bg-white rounded-xl shadow p-4 flex flex-col items-start"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <AcademicCapIcon className="w-6 h-6 text-blue-600" />
                        <span className="font-semibold text-gray-900">{cert.title}</span>
                    </div>
                    <span className="text-xs text-gray-500 mb-4">
                        Earned: {cert.date}
                    </span>
                    <button
                        aria-label={`Download certificate for ${cert.title}`}
                        className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <DocumentArrowDownIcon className="w-4 h-4" />
                        Download
                    </button>
                </div>
            ))}
        </div>
    </section>
);
}

// Settings Section
function SettingsSection({ settings, onChange }) {
return (
    <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <Cog6ToothIcon className="w-6 h-6 text-blue-600" />
            Settings
        </h3>
        <form className="bg-white rounded-xl shadow p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    First Name
                </label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={settings.firstName}
                    onChange={onChange}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                    aria-label="First Name"
                />
            </div>
            <div>
                <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Last Name
                </label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={settings.lastName}
                    onChange={onChange}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                    aria-label="Last Name"
                />
            </div>
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={settings.email}
                    onChange={onChange}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                    aria-label="Email"
                />
            </div>
            <div>
                <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Mobile Number
                </label>
                <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={settings.mobile}
                    onChange={onChange}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                    aria-label="Mobile Number"
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={settings.password}
                    onChange={onChange}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                    aria-label="Password"
                    autoComplete="new-password"
                />
            </div>
            <div>
                <label
                    htmlFor="avatar"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Profile Picture
                </label>
                <input
                    id="avatar"
                    name="avatar"
                    type="file"
                    accept="image/*"
                    onChange={onChange}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                    aria-label="Profile Picture"
                />
            </div>
            <div className="sm:col-span-2">
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Save changes"
                >
                    Save Changes
                </button>
            </div>
        </form>
    </section>
);
}

// Feedback Section
function FeedbackSection({ feedback, onChange }) {
return (
    <section className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600" />
            Feedback & Support
        </h3>
        <form className="grid grid-cols-1 gap-4">
            <div>
                <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Subject
                </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={feedback.subject}
                    onChange={onChange}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                    aria-label="Subject"
                />
            </div>
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={feedback.message}
                    onChange={onChange}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                    aria-label="Message"
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Submit feedback"
                >
                    Submit
                </button>
            </div>
        </form>
    </section>
);
}

// Edit Profile Modal
function EditProfileModal({ settings, onClose, onChange }) {
return (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
        role="dialog"
        aria-modal="true"
        aria-label="Edit Profile"
    >
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
                onClick={onClose}
                aria-label="Close edit profile"
                className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Edit Profile
            </h4>
            <form className="grid grid-cols-1 gap-4">
                <div>
                    <label
                        htmlFor="editFirstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        First Name
                    </label>
                    <input
                        id="editFirstName"
                        name="firstName"
                        type="text"
                        value={settings.firstName}
                        onChange={onChange}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                        aria-label="First Name"
                    />
                </div>
                <div>
                    <label
                        htmlFor="editLastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Last Name
                    </label>
                    <input
                        id="editLastName"
                        name="lastName"
                        type="text"
                        value={settings.lastName}
                        onChange={onChange}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                        aria-label="Last Name"
                    />
                </div>
                <div>
                    <label
                        htmlFor="editEmail"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email
                    </label>
                    <input
                        id="editEmail"
                        name="email"
                        type="email"
                        value={settings.email}
                        onChange={onChange}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                        aria-label="Email"
                    />
                </div>
                <div>
                    <label
                        htmlFor="editAvatar"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Profile Picture
                    </label>
                    <input
                        id="editAvatar"
                        name="avatar"
                        type="file"
                        accept="image/*"
                        onChange={onChange}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                        aria-label="Profile Picture"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Save profile changes"
                >
                    Save Changes
                </button>
            </form>
        </div>
    </div>
);
}