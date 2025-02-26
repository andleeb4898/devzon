"use client"; // 👈 Ensure it's a Client Component

import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-900 tracking-wide">
          Your Profile
        </h2>
        <div className="border-t-4 border-blue-500 shadow-lg rounded-xl bg-gray-50 flex justify-center p-6">
          <div className="w-full max-w-lg">
            <UserProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
