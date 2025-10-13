import React from "react";

const GetInTouch = () => {
    return (
        <section className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-16 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a237e] mb-8 tracking-tight">
                    Get in Touch
                </h2>
                <form className="space-y-6">
                    <div className="md:flex md:space-x-6">
                        <div className="flex-1 mb-6 md:mb-0">
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium text-[#1a237e] mb-2"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                autoComplete="given-name"
                                className="w-full rounded-lg border border-gray-300 focus:border-[#3949ab] focus:ring-2 focus:ring-[#c5cae9] px-4 py-3 text-gray-900 bg-gray-50 transition"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium text-[#1a237e] mb-2"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                autoComplete="family-name"
                                className="w-full rounded-lg border border-gray-300 focus:border-[#3949ab] focus:ring-2 focus:ring-[#c5cae9] px-4 py-3 text-gray-900 bg-gray-50 transition"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[#1a237e] mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            className="w-full rounded-lg border border-gray-300 focus:border-[#3949ab] focus:ring-2 focus:ring-[#c5cae9] px-4 py-3 text-gray-900 bg-gray-50 transition"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="mobile"
                            className="block text-sm font-medium text-[#1a237e] mb-2"
                        >
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            autoComplete="tel"
                            className="w-full rounded-lg border border-gray-300 focus:border-[#3949ab] focus:ring-2 focus:ring-[#c5cae9] px-4 py-3 text-gray-900 bg-gray-50 transition"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-[#1a237e] mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="w-full rounded-lg border border-gray-300 focus:border-[#3949ab] focus:ring-2 focus:ring-[#c5cae9] px-4 py-3 text-gray-900 bg-gray-50 transition resize-none"
                            required
                        ></textarea>
                    </div>
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-[#3949ab] hover:bg-[#283593] text-white font-semibold rounded-lg px-8 py-3 shadow-md transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default GetInTouch;