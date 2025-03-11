"use client"; // 👈 Ensure it's a Client Component

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Navbar Component
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle

  return (
    <nav className="w-full p-4 flex justify-between items-center bg-transparent fixed top-0 left-0 right-0 z-50">
      <Link href="/" className="text-white text-2xl font-bold">
        Dev Zone
      </Link>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        <Link href="/sign-in">
          <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg">
            Sign In
          </button>
        </Link>
        <Link href="/sign-up">
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
            Sign Up
          </button>
        </Link>
        <Link href="/about">
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
            About
          </button>
        </Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/sign-in">
            <button className="w-3/4 py-2 bg-teal-600 text-white rounded-lg">
              Sign In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="w-3/4 py-2 bg-green-600 text-white rounded-lg">
              Sign Up
            </button>
          </Link>
          <Link href="/about">
            <button className="w-3/4 py-2 bg-gray-700 text-white rounded-lg">
              About
            </button>
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-3/4 py-2 bg-gray-500 text-white rounded-lg"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};  

// HomePage Component ( Responsive!)
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white px-4 sm:px-6 py-12">
      {/* Navbar */}
      <Navbar />  

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-24 px-2 sm:px-4"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">
          Welcome to <span className="text-white">Dev Zone</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          A space for mastering the art of coding through projects, challenges, and real-world applications.
        </p>
        <div className="mt-8">
          <Link href="/sign-up">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 hover:bg-teal-700 text-white text-lg font-bold rounded-full shadow-md transition transform hover:scale-105">
              Join Now 🚀
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Responsive Sections */}
      <motion.section
        className="py-12 sm:py-16 bg-gradient-to-r from-black to-gray-800 text-center text-white px-4 sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">Why Dev Zone?</h2>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto">
          Dev Zone is built to guide you through your development journey, with challenges that test your skills and projects that bring your ideas to life.
        </p>
      </motion.section>

      {/* Grid Section (Now Fully Responsive) */}
      <motion.section
        className="py-12 sm:py-16 bg-gradient-to-r from-teal-500 to-green-700 text-center text-white px-4 sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-8">DevZone Goals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4">
          <div className="bg-gray-700 p-4 sm:p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Personal Development</h3>
            <p className="text-sm sm:text-lg">
              Improve your coding skills through hands-on experience with live coding challenges and projects.
            </p>
          </div>
          <div className="bg-gray-700 p-4 sm:p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Career Growth</h3>
            <p className="text-sm sm:text-lg">
              Gain practical skills employers look for. Build a strong portfolio and prepare for job interviews.
            </p>
          </div>
          <div className="bg-gray-700 p-4 sm:p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Community Engagement</h3>
            <p className="text-sm sm:text-lg">
              Join a vibrant community of developers. Collaborate on projects, share knowledge, and get support.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="py-6 sm:py-8 bg-black text-center text-white">
        <p className="text-sm sm:text-base">&copy; 2025 Dev Zone. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Exporting HomePage (Everything Stays Intact!)
export default HomePage;
