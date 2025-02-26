"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-blue-400">
          About <span className="text-white">Dev Zone</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Dev Zone is an interactive web application designed for aspiring developers to enhance their skills, collaborate, and grow.  
          From coding exercises to real-time feedback, we provide everything to sharpen your expertise.
        </p>
      </motion.div>

      {/* Feature Sections */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg border border-gray-700 text-center"
          >
            <div className="text-4xl">{feature.icon}</div>
            <h2 className="text-2xl font-bold text-blue-400 mt-3">{feature.title}</h2>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-white">Ready to Elevate Your Coding Skills?</h2>
        <p className="text-gray-400 mt-2">Join Dev Zone today and start building your future.</p>

        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/sign-up">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-lg font-bold rounded-lg shadow-md">
              Get Started 🚀
            </button>
          </Link>
          <Link href="/home">
            <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 transition text-lg font-bold rounded-lg shadow-md">
              Explore More
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// Feature Data
const features = [
  {
    icon: "📚",
    title: "Interactive Tutorials",
    description: "Learn by doing with hands-on coding challenges and exercises."
  },
  {
    icon: "⚡",
    title: "Real-Time Feedback",
    description: "Get instant feedback on your code to improve efficiency and accuracy."
  },
  {
    icon: "🤝",
    title: "Community & Networking",
    description: "Collaborate, connect, and grow with fellow developers worldwide."
  }
];
