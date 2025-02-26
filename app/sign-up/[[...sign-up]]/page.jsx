"use client"; // Ensure it's a Client Component

import React from "react";
import { SignUp } from "@clerk/nextjs";
import { motion } from "framer-motion";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-8 backdrop-blur-lg bg-white/10 shadow-xl rounded-2xl border border-white/20 max-w-lg w-full"
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-4">
          Join DevZone 🚀
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Create your account to get started
        </p>

        {/* Clerk SignUp with Forced Custom Styling */}
        <div className="flex justify-center">
          <SignUp
            appearance={{
              elements: {
                card: "shadow-lg bg-white/80 border border-gray-300 p-6 rounded-xl",
              },
            }}
            afterSignUpUrl="/dashboard" // Ensure redirection after sign-up
            afterSignOutUrl="/sign-in"  // Redirects to styled SignIn page
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
