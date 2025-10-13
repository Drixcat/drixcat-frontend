import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const categories = [
    "All",
    "AI & Robotics",
    "Tech News",
    "Productivity",
    "Career",
    "Events",
];

const blogs = [
    {
        id: 1,
        title: "How AI is Transforming the Modern Workplace",
        description:
            "Explore the latest advancements in AI and how they're reshaping office productivity, collaboration, and innovation.",
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
        category: "AI & Robotics",
    },
    {
        id: 2,
        title: "Top 5 Tech Trends to Watch in 2024",
        description:
            "Stay ahead of the curve with these emerging technologies set to revolutionize industries this year.",
        image:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
        category: "Tech News",
    },
    {
        id: 3,
        title: "Boost Your Productivity with These Simple Tools",
        description:
            "Discover easy-to-use apps and strategies to help you get more done in less time.",
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        category: "Productivity",
    },
    {
        id: 4,
        title: "Navigating Your Tech Career: Tips from Industry Experts",
        description:
            "Get advice on building a successful career in technology from those who’ve done it.",
        image:
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
        category: "Career",
    },
    {
        id: 5,
        title: "Upcoming Tech Events You Can't Miss",
        description:
            "Mark your calendar for these must-attend conferences and workshops in the tech world.",
        image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        category: "Events",
    },
    {
        id: 6,
        title: "Robots in the Office: Friend or Foe?",
        description:
            "A deep dive into the pros and cons of automation in the workplace.",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
        category: "AI & Robotics",
    },
];

export default function Blog() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredBlogs = blogs.filter((blog) => {
        const matchesCategory =
            selectedCategory === "All" || blog.category === selectedCategory;
        const matchesSearch =
            blog.title.toLowerCase().includes(search.toLowerCase()) ||
            blog.description.toLowerCase().includes(search.toLowerCase()) ||
            blog.category.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <div className="relative w-full h-[200px] md:h-[250px] flex items-center justify-center">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/054/477/228/non_2x/ai-and-robots-are-coming-to-your-office-photo.jpg"
                    alt="Blog Hero"
                    className="absolute inset-0 w-full h-full object-cover rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 rounded-none" />
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center tracking-tight drop-shadow-lg">
                        OUR BLOG
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar */}
                <aside className="md:col-span-1">
                    {/* Search Bar */}
                    <div className="mb-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by keyword or category"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#808098] focus:ring-2 focus:ring-[#099f4e] w-full pr-10 transition"
                            />
                            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[#808098] text-lg pointer-events-none" />
                        </div>
                    </div>
                    {/* Categories */}
                    <div>
                        <div className="text-[#099f4e] font-semibold text-lg mb-3">
                            Categories
                        </div>
                        <div>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`rounded-md bg-white hover:bg-[#50f48a]/20 text-[#808098] py-2 px-3 mb-2 w-full text-left transition-all duration-200 ${
                                        selectedCategory === cat
                                            ? "bg-[#50f48a]/20 font-semibold text-[#099f4e]"
                                            : ""
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Blog Cards */}
                <main className="md:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBlogs.length === 0 ? (
                            <div className="col-span-full text-center text-[#808098] py-12">
                                No blog posts found.
                            </div>
                        ) : (
                            filteredBlogs.map((blog) => (
                                <div
                                    key={blog.id}
                                    className="bg-[#f4f4fb] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
                                >
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-40 object-cover rounded-t-xl"
                                    />
                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="font-semibold text-lg text-[#0c1818] mb-1">
                                            {blog.title}
                                        </div>
                                        <div className="text-sm text-[#808098] mt-1 mb-3 flex-1">
                                            {blog.description}
                                        </div>
                                        <a
                                            href="#"
                                            className="text-[#099f4e] font-semibold hover:underline transition"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}