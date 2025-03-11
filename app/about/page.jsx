"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaRocket, FaCode, FaUsers, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen`}>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-opacity-80 p-4 backdrop-blur-lg z-50 shadow-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <div className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
            DevZone
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/home" className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 px-4 rounded-full font-semibold hover:scale-105 transition-all">
              Home
            </Link>
            <Link href="/about" className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 px-4 rounded-full font-semibold hover:scale-105 transition-all">
              About
            </Link>
            <Link href="/sign-in" className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 px-4 rounded-full font-semibold hover:scale-105 transition-all">
              Sign In
            </Link>
            <Link href="/sign-up" className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 px-4 rounded-full font-semibold hover:scale-105 transition-all">
              Sign Up
            </Link>
            <button onClick={() => setDarkMode(!darkMode)} className="bg-gray-700 text-white p-2 rounded-full hover:scale-105 transition-all">
              {darkMode ? "🌙" : "🌞"}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-4 space-y-4 md:hidden">
            <Link href="/home" className="text-white py-2">Home</Link>
            <Link href="/about" className="text-white py-2">About</Link>
            <Link href="/sign-in" className="text-white py-2">Sign In</Link>
            <Link href="/sign-up" className="text-white py-2">Sign Up</Link>
            <button onClick={() => setDarkMode(!darkMode)} className="text-white py-2">{darkMode ? "🌙" : "🌞"}</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
            Welcome to DevZone
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            The ultimate platform for developers to grow, collaborate, and innovate.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: <FaRobot className="w-12 h-12 mx-auto" />, title: "AI-Powered Tools", text: "Smart coding assistance and automated workflows" },
              { icon: <FaCode className="w-12 h-12 mx-auto" />, title: "Real Projects", text: "Industry-standard projects with version control" },
              { icon: <FaUsers className="w-12 h-12 mx-auto" />, title: "Community", text: "Connect with developers worldwide" }
            ].map((feature, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-xl backdrop-blur-sm hover:bg-gray-700 transition-all">
                <div className="text-gray-400 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start Your Journey</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/sign-up" className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold hover:scale-105 transition-all">
              Join Now 🚀
            </Link>
            <Link href="/learn-more" className="border-2 border-gray-600 text-gray-300 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold hover:bg-gray-700 transition-all">
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
