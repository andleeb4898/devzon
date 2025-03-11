"use client"; // Ensure it's a Client Component

import React, { useState } from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  const [darkMode, setDarkMode] = useState(true); // Default dark mode

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen`}>
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 w-full bg-opacity-80 p-4 backdrop-blur-lg z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
          {/* DevZone Logo */}
          <div className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
            DevZone
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white text-2xl" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌙" : "🌞"}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <a
              href="/"
              className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 px-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 px-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              About
            </a>
            <a
              href="/sign-in"
              className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 px-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              Sign In
            </a>
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-transparent border-2 p-2 rounded-full focus:outline-none transition-all duration-300"
            >
              {darkMode ? "🌙" : "🌞"}
            </button>
          </nav>
        </div>
      </header>

      {/* Sign-Up Page Content */}
      <main className="flex justify-center items-center min-h-screen px-4">
        <div className="p-6 sm:p-8 backdrop-blur-lg bg-white/10 shadow-xl rounded-2xl border border-white/20 max-w-md sm:max-w-lg w-full">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">Join DevZone 🚀</h2>
          <p className="text-gray-300 text-center mb-6">Create your account to get started with coding and growth</p>

          {/* Clerk SignUp */}
          <div className="flex justify-center">
            <SignUp
              appearance={{
                elements: {
                  card: "shadow-lg bg-white/80 border border-gray-300 p-4 sm:p-6 rounded-xl",
                },
              }}
              afterSignUpUrl="/dashboard" // Redirect after sign-up
              afterSignOutUrl="/sign-in"  // Redirect after sign-out
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
