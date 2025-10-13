import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center py-8 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col">
                <div className="flex justify-center mb-6">
                    <img
                        src="/Logo_drixcat.png"
                        alt="Drixcat Logo"
                        className="h-12 w-auto"
                    />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                    Sign in to your account
                </h2>
                <form className="mt-6 space-y-5" aria-label="Login form">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="you@example.com"
                            className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                            aria-label="Email address"
                        />
                    </div>
                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                placeholder="Enter your password"
                                className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition pr-10"
                                aria-label="Password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                                tabIndex={0}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? (
                                    // Eye Off Icon
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.403-3.221 1.125-4.575M6.343 6.343A7.963 7.963 0 004 9c0 4.418 3.582 8 8 8 1.657 0 3.221-.403 4.575-1.125M17.657 17.657A7.963 7.963 0 0020 15c0-4.418-3.582-8-8-8-1.657 0-3.221.403-4.575 1.125M3 3l18 18"
                                        />
                                    </svg>
                                ) : (
                                    // Eye Icon
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 5-4.03 9-9 9s-9-4-9-9 4.03-9 9-9 9 4 9 9z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    {/* Remember me & Forgot password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember"
                                name="remember"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition"
                                aria-checked="false"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 block text-sm text-gray-700"
                            >
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <Link
                                to="/forgot-password"
                                className="font-medium text-blue-600 hover:text-blue-700 transition"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </div>
                    {/* Login Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 text-white transition"
                        >
                            Login
                        </button>
                    </div>
                </form>
                {/* Signup Link */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link
                        to="/signup"
                        className="font-medium text-blue-600 hover:text-blue-700 transition"
                    >
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;