"use client"; // 👈 Ensure this is a Client Component
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          DevZone 🚀
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-blue-400 transition duration-300">Home</Link>
          <Link href="/dashboard" className="hover:text-blue-400 transition duration-300">Dashboard</Link>
          <Link href="/about" className="hover:text-blue-400 transition duration-300">About</Link>
        </nav>

        {/* Profile & Authentication */}
        {isSignedIn ? (
          <div className="flex items-center space-x-4">
            <Link href="/profile" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition">
              Profile
            </Link>
            <UserButton />
          </div>
        ) : (
          <div className="space-x-4">
            <Link href="/sign-in" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
              Sign In
            </Link>
            <Link href="/sign-up" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
