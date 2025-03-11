"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useUser, SignOutButton } from "@clerk/nextjs"; // Import Clerk authentication
import { Menu, X } from "lucide-react"; // Icons for mobile menu toggle

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const { isSignedIn } = useUser(); // Check if user is signed in
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <header className="fixed w-full z-50 bg-opacity-80 backdrop-blur-lg p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600"
        >
          DevZone
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 absolute md:static top-16 left-0 right-0 bg-gray-900 md:bg-transparent p-4 md:p-0 rounded-md md:rounded-none`}
        >
          <Link
            href="/"
            className="text-white p-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 hover:scale-105 transition-all"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white p-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 hover:scale-105 transition-all"
          >
            About
          </Link>
          {isSignedIn ? (
            <>
              <Link
                href="/profile"
                className="text-white p-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 hover:scale-105 transition-all"
              >
                Profile
              </Link>
              <Link
                href="/dashboard"
                className="text-white p-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 hover:scale-105 transition-all"
              >
                Dashboard
              </Link>
              <SignOutButton>
                <button className="text-white p-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 hover:scale-105 transition-all">
                  Sign Out
                </button>
              </SignOutButton>
            </>
          ) : (
            <>
              <Link
                href="/sign-up"
                className="text-white p-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 hover:scale-105 transition-all"
              >
                Sign Up
              </Link>
              <Link
                href="/sign-in"
                className="text-white p-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 hover:scale-105 transition-all"
              >
                Sign In
              </Link>
            </>
          )}


          {/* Sign Out Button (Only when signed in) */}
          {isSignedIn && (
            <SignOutButton>
              <button className="text-white p-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 hover:scale-105 transition-all">
                Sign Out
              </button>
            </SignOutButton>
          )}
        </nav>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:block bg-gradient-to-r from-gray-600 to-gray-800 text-white p-2 rounded-full hover:scale-105 transition-all"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
