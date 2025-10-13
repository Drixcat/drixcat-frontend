import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});

    // Basic validation for demonstration
    const validate = () => {
        const newErrors = {};
        if (!form.firstName) newErrors.firstName = "First name is required";
        if (!form.lastName) newErrors.lastName = "Last name is required";
        if (!form.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
        if (!form.password) newErrors.password = "Password is required";
        if (form.password !== form.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
        setErrors(validate());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            password: true,
            confirmPassword: true,
        });
        if (Object.keys(validationErrors).length === 0) {
            // Submit logic here
        }
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center py-8 px-4">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
                <img
                    src="/Logo_drixcat.png"
                    alt="Drixcat Logo"
                    className="h-14 mb-6"
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
                <form className="w-full space-y-5" onSubmit={handleSubmit} noValidate>
                    {/* First Name */}
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            First Name
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            placeholder="Enter your first name"
                            className={`w-full px-4 py-2 border ${
                                errors.firstName && touched.firstName
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                            value={form.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.firstName && touched.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>
                    {/* Last Name */}
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            placeholder="Enter your last name"
                            className={`w-full px-4 py-2 border ${
                                errors.lastName && touched.lastName
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                            value={form.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.lastName && touched.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                    </div>
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Enter your email"
                            className={`w-full px-4 py-2 border ${
                                errors.email && touched.email
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                            value={form.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>
                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
                                placeholder="Enter your password"
                                className={`w-full px-4 py-2 border ${
                                    errors.password && touched.password
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-10`}
                                value={form.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-describedby="togglePassword"
                            />
                            <button
                                type="button"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                aria-pressed={showPassword}
                                id="togglePassword"
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-600 focus:outline-none"
                                onClick={() => setShowPassword((prev) => !prev)}
                                tabIndex={0}
                            >
                                {showPassword ? (
                                    // Eye-off icon
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.336-3.233.938-4.675M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.062-4.675A9.956 9.956 0 0122 9c0 5.523-4.477 10-10 10a9.956 9.956 0 01-4.675-.938"
                                        />
                                    </svg>
                                ) : (
                                    // Eye icon
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && touched.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>
                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            autoComplete="new-password"
                            placeholder="Re-enter your password"
                            className={`w-full px-4 py-2 border ${
                                errors.confirmPassword && touched.confirmPassword
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                            value={form.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>
                    {/* Signup Button */}
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-6 text-gray-600 text-center">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-600 hover:text-blue-700 font-medium transition"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;