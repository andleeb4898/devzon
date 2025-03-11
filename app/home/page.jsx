"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaCode, FaRocket, FaUsers, FaTerminal, FaBars, FaTimes } from "react-icons/fa";
import Marquee from "react-fast-marquee";

export default function LandingPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 relative overflow-hidden">
      <style jsx global>{`
        @keyframes gradient-pan {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animated-gradient {
          animation: gradient-pan 20s linear infinite;
          background: radial-gradient(circle at center, 
            rgba(59, 130, 246, 0.2) 0%, 
            rgba(59, 130, 246, 0) 70%);
        }
      `}</style>

      {/* Single Responsive Navigation */}
      <nav className="fixed w-full top-0 left-0 z-50 bg-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-200">
              DevZone
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                Learn More
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-white" />
              ) : (
                <FaBars className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`md:hidden mt-2 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col gap-2">
              <Link 
                href="/about" 
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl w-full mt-24 md:mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
            style={{
              background: "linear-gradient(to right,  #00897B, #00796B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Welcome to Dev Zone 🚀
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Dev Zone is an interactive web application for code crafting, learning, and collaboration. 
            Start your coding journey today!
          </motion.p>

          {/* Responsive Action Button */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link href="/get-started">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-teal-600 rounded-xl text-lg font-bold hover:bg-teal-700 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Feature cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[
            { icon: <FaCode className="w-12 h-12 mx-auto" />, title: "Code Editor", text: "Real-time coding environment" },
            { icon: <FaUsers className="w-12 h-12 mx-auto" />, title: "Collaboration", text: "Team programming features" },
            { icon: <FaTerminal className="w-12 h-12 mx-auto" />, title: "Terminal", text: "Integrated CLI support" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-800 rounded-2xl backdrop-blur-sm hover:bg-gray-700 transition-all"
            >
              <div className="text-blue-400 mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* News ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Marquee speed={40} className="py-4 bg-gray-800 rounded-xl">
            {["New Feature: AI Code Assistant 🧠", "Latest Update: Collaboration ✨", "Hackathon Soon! 🚀"].map((text, i) => (
              <div key={i} className="flex items-center mx-8">
                <span className="text-blue-400">{text}</span>
                <FaRocket className="ml-4 text-yellow-400" />
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none animated-gradient"
        style={{ 
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          width: '200%',
          height: '200%'
        }}
      />
    </div>
  );
}