"use client"; // 👈 Ensure it's a Client Component

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  const [projects] = useState([
    { title: "Project 1", description: "React advanced project.", link: "/projects/1" },
    { title: "Project 2", description: "Backend Node.js project.", link: "/projects/2" },
    { title: "Project 3", description: "Frontend web app with API integration.", link: "/projects/3" },
  ]);

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
          Welcome to <span className="text-white">Dev Zone</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Your ultimate platform for mastering coding with projects, challenges, and hands-on experience.
        </p>
      </motion.div>

      {/* Featured Projects Section */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-4xl font-semibold mb-8 text-blue-400">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="transform transition duration-300 hover:scale-105 hover:shadow-xl bg-gray-700 p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-lg mb-6">{project.description}</p>
              <Link href={project.link} className="text-blue-400 text-lg hover:text-blue-300">
                Explore Now
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Challenge Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-purple-600 to-indigo-800 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-4xl font-semibold mb-8">Join Our Coding Challenges</h2>
        <p className="text-xl mb-12">Take part in challenges, solve problems, and showcase your skills to the world.</p>
        <Link
          href="/challenges"
          className="bg-blue-500 hover:bg-blue-400 text-white text-lg px-8 py-4 rounded-full transition duration-300 transform hover:scale-105"
        >
          Start a Challenge
        </Link>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-4xl font-semibold mb-8 text-white">Ready to Elevate Your Coding Skills?</h2>
        <p className="text-lg mb-8 text-gray-400">Join Dev Zone today and start building your future with interactive projects, challenges, and more.</p>
        <div className="flex justify-center space-x-6">
          <Link href="/sign-up">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-bold rounded-lg shadow-md">
              Get Started 🚀
            </button>
          </Link>
          <Link href="/about">
            <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-lg font-bold rounded-lg shadow-md">
              Learn More
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="py-8 bg-black text-center text-white">
        <p>&copy; 2025 Dev Zone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
