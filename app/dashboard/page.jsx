"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import WeeklyTutorial from "../components/WeeklyTutorial";
import TeamManagement from "../components/TeamManagement";

const DashboardPage = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <div>Please sign in to access your dashboard.</div>; 
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Welcome to Your Dashboard, {user.firstName}!</h1>
      <WeeklyTutorial />
      <TeamManagement />
    </div>
  );
};

export default DashboardPage;
