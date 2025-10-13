import React, { useState, useMemo } from "react";
import {

ChevronDownIcon,
FunnelIcon,
XMarkIcon,
MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// Dummy data for demonstration
const COURSE_CATEGORIES = [
"Web Development",
"Data Science",
"AI & ML",
"Cloud Computing",
"Full Stack",
"Mobile Development",
];
const COURSE_LEVELS = ["Beginner", "Intermediate", "Advanced"];
const COURSE_DURATIONS = [
{ label: "< 3 Months", value: "<3" },
{ label: "3–6 Months", value: "3-6" },
{ label: "6+ Months", value: "6+" },
];
const SORT_OPTIONS = [
{ label: "Popularity", value: "popularity" },
{ label: "Price (Low–High)", value: "priceLow" },
{ label: "Price (High–Low)", value: "priceHigh" },
{ label: "Newest", value: "newest" },
];

// Example course data
const COURSES = [
{
    id: 1,
    title: "React for Beginners",
    category: "Web Development",
    level: "Beginner",
    duration: 2,
    price: 49,
    popularity: 90,
    createdAt: "2024-05-01",
    thumbnail:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    description: "Learn React from scratch and build interactive UIs.",
},
{
    id: 2,
    title: "Full Stack Bootcamp",
    category: "Full Stack",
    level: "Intermediate",
    duration: 6,
    price: 199,
    popularity: 120,
    createdAt: "2024-04-15",
    thumbnail:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    description: "Become a full stack developer with hands-on projects.",
},
{
    id: 3,
    title: "Data Science with Python",
    category: "Data Science",
    level: "Beginner",
    duration: 4,
    price: 99,
    popularity: 110,
    createdAt: "2024-03-20",
    thumbnail:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Analyze data and build models using Python.",
},
{
    id: 4,
    title: "AI & ML Advanced",
    category: "AI & ML",
    level: "Advanced",
    duration: 7,
    price: 299,
    popularity: 80,
    createdAt: "2024-06-01",
    thumbnail:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "Master advanced AI and machine learning techniques.",
},
{
    id: 5,
    title: "Cloud Computing Essentials",
    category: "Cloud Computing",
    level: "Beginner",
    duration: 3,
    price: 79,
    popularity: 70,
    createdAt: "2024-05-10",
    thumbnail:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description: "Understand the basics of cloud infrastructure.",
},
{
    id: 6,
    title: "Mobile App Development",
    category: "Mobile Development",
    level: "Intermediate",
    duration: 5,
    price: 149,
    popularity: 95,
    createdAt: "2024-04-25",
    thumbnail:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    description: "Build mobile apps for Android and iOS.",
},
// Add more courses as needed
];

// Skeleton loader for course cards
function CourseCardSkeleton() {
return (
    <div className="animate-pulse bg-white rounded-lg shadow p-4 flex flex-col gap-3">
        <div className="h-36 bg-gray-200 rounded" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
        <div className="h-3 bg-gray-100 rounded w-1/3" />
        <div className="h-3 bg-gray-100 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mt-2" />
        <div className="h-9 bg-gray-100 rounded mt-3" />
    </div>
);
}

// Course Card
function CourseCard({ course }) {
return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-200 flex flex-col overflow-hidden hover:-translate-y-1">
        <img
            src={course.thumbnail}
            alt={course.title}
            className="h-36 w-full object-cover"
        />
        <div className="p-4 flex flex-col flex-1">
            <div className="text-blue-600 text-xs font-semibold mb-1">
                {course.category}
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">{course.title}</h3>
            <p className="text-gray-500 text-sm flex-1">{course.description}</p>
            <div className="flex items-center justify-between mt-3">
                <span className="text-blue-700 font-semibold text-base">
                    ${course.price}
                </span>
                <span className="text-gray-400 text-xs">
                    {course.duration} month{course.duration > 1 ? "s" : ""}
                </span>
            </div>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors duration-150 shadow hover:shadow-md">
                View Details
            </button>
        </div>
    </div>
);
}

// Filter Sidebar
function FilterSidebar({
filters,
setFilters,
categories,
levels,
durations,
onClose,
showClose,
}) {
const handleCheckbox = (type, value) => {
    setFilters((prev) => {
        const arr = prev[type];
        return {
            ...prev,
            [type]: arr.includes(value)
                ? arr.filter((v) => v !== value)
                : [...arr, value],
        };
    });
};

const handleDuration = (value) => {
    setFilters((prev) => ({
        ...prev,
        duration: prev.duration === value ? "" : value,
    }));
};

return (
    <aside className="w-64 bg-white rounded-lg shadow p-6 flex flex-col gap-6 min-w-[220px]">
        {showClose && (
            <button
                className="ml-auto mb-2 text-gray-400 hover:text-gray-700"
                onClick={onClose}
            >
                <XMarkIcon className="h-6 w-6" />
            </button>
        )}
        <div>
            <h4 className="font-semibold text-gray-900 mb-2">Categories</h4>
            <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 text-gray-700">
                        <input
                            type="checkbox"
                            checked={filters.categories.includes(cat)}
                            onChange={() => handleCheckbox("categories", cat)}
                            className="accent-blue-600"
                        />
                        {cat}
                    </label>
                ))}
            </div>
        </div>
        <div>
            <h4 className="font-semibold text-gray-900 mb-2">Level</h4>
            <div className="flex flex-col gap-2">
                {levels.map((lvl) => (
                    <label key={lvl} className="flex items-center gap-2 text-gray-700">
                        <input
                            type="checkbox"
                            checked={filters.levels.includes(lvl)}
                            onChange={() => handleCheckbox("levels", lvl)}
                            className="accent-blue-600"
                        />
                        {lvl}
                    </label>
                ))}
            </div>
        </div>
        <div>
            <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
            <div className="flex flex-col gap-2">
                {durations.map((d) => (
                    <label
                        key={d.value}
                        className="flex items-center gap-2 text-gray-700"
                    >
                        <input
                            type="radio"
                            name="duration"
                            checked={filters.duration === d.value}
                            onChange={() => handleDuration(d.value)}
                            className="accent-blue-600"
                        />
                        {d.label}
                    </label>
                ))}
            </div>
        </div>
    </aside>
);
}

export default function CoursesPage() {
// State
const [search, setSearch] = useState("");
const [filters, setFilters] = useState({
    categories: [],
    levels: [],
    duration: "",
});
const [sort, setSort] = useState("popularity");
const [sidebarOpen, setSidebarOpen] = useState(false);
const [loading, setLoading] = useState(false);

// Filtering logic
const filteredCourses = useMemo(() => {
    let data = [...COURSES];

    // Search
    if (search.trim()) {
        const s = search.trim().toLowerCase();
        data = data.filter(
            (c) =>
                c.title.toLowerCase().includes(s) ||
                c.category.toLowerCase().includes(s) ||
                c.description.toLowerCase().includes(s)
        );
    }

    // Categories
    if (filters.categories.length) {
        data = data.filter((c) => filters.categories.includes(c.category));
    }

    // Levels
    if (filters.levels.length) {
        data = data.filter((c) => filters.levels.includes(c.level));
    }

    // Duration
    if (filters.duration) {
        if (filters.duration === "<3") data = data.filter((c) => c.duration < 3);
        else if (filters.duration === "3-6")
            data = data.filter((c) => c.duration >= 3 && c.duration <= 6);
        else if (filters.duration === "6+")
            data = data.filter((c) => c.duration > 6);
    }

    // Sorting
    switch (sort) {
        case "popularity":
            data.sort((a, b) => b.popularity - a.popularity);
            break;
        case "priceLow":
            data.sort((a, b) => a.price - b.price);
            break;
        case "priceHigh":
            data.sort((a, b) => b.price - a.price);
            break;
        case "newest":
            data.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
            break;
        default:
            break;
    }

    return data;
}, [search, filters, sort]);

// Simulate loading (for skeletons)
React.useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
}, [search, filters, sort]);

// Responsive: show sidebar or drawer
return (
    <div className="bg-gray-50 min-h-screen py-8 px-2 md:px-6">
        <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Our Courses
                </h1>
                <p className="text-gray-500 max-w-2xl">
                    Explore our curated selection of courses in web development, data science, AI, cloud computing, and more. Find the right course for your learning journey!
                </p>
            </div>

            {/* Top Controls: Search, Sort, Filter (mobile) */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                {/* Search Bar */}
                <div className="flex-1 flex items-center bg-white rounded shadow px-3 py-2">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full outline-none bg-transparent text-gray-700"
                    />
                </div>
                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm hidden md:inline">
                        Sort by:
                    </span>
                    <div className="relative">
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="appearance-none bg-white border border-gray-200 rounded px-3 py-2 pr-8 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                            {SORT_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                        <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute right-2 top-2 pointer-events-none" />
                    </div>
                    {/* Mobile: Filter Button */}
                    <button
                        className="md:hidden flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded shadow ml-2"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <FunnelIcon className="h-5 w-5" />
                        Filters
                    </button>
                </div>
            </div>

            <div className="flex gap-6">
                {/* Sidebar (desktop) */}
                <div className="hidden md:block">
                    <FilterSidebar
                        filters={filters}
                        setFilters={setFilters}
                        categories={COURSE_CATEGORIES}
                        levels={COURSE_LEVELS}
                        durations={COURSE_DURATIONS}
                    />
                </div>
                {/* Drawer (mobile) */}
                {sidebarOpen && (
                    <div className="fixed inset-0 z-40 flex md:hidden">
                        <div
                            className="fixed inset-0 bg-black bg-opacity-30"
                            onClick={() => setSidebarOpen(false)}
                        />
                        <div className="relative z-50 w-72 max-w-full">
                            <FilterSidebar
                                filters={filters}
                                setFilters={setFilters}
                                categories={COURSE_CATEGORIES}
                                levels={COURSE_LEVELS}
                                durations={COURSE_DURATIONS}
                                onClose={() => setSidebarOpen(false)}
                                showClose
                            />
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-1">
                    {/* Courses Grid */}
                    {loading ? (
                        <div
                            className="grid gap-6"
                            style={{
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(270px, 1fr))",
                            }}
                        >
                            {Array.from({ length: 4 }).map((_, i) => (
                                <CourseCardSkeleton key={i} />
                            ))}
                        </div>
                    ) : filteredCourses.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16">
                            <img
                                src="https://www.svgrepo.com/show/327408/empty-box.svg"
                                alt="No courses"
                                className="h-32 mb-4 opacity-70"
                            />
                            <p className="text-gray-500 text-lg">
                                No courses found matching your filters.
                            </p>
                        </div>
                    ) : (
                        <div
                            className="grid gap-6"
                            style={{
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(270px, 1fr))",
                            }}
                        >
                            {filteredCourses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    </div>
);
}