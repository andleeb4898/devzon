"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-4 text-center"
      >
        Welcome to Dev Zone 🚀
      </motion.h1>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl">
        Dev Zone is an interactive web application for code crafting, learning, and collaboration. 
        Start your coding journey today!
      </p>

      <div className="flex space-x-4">
        <Link href="/sign-up">
          <button className="px-6 py-3 bg-blue-600 rounded-lg text-lg font-bold hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
        <Link href="/about">
          <button className="px-6 py-3 bg-gray-700 rounded-lg text-lg font-bold hover:bg-gray-600 transition">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
