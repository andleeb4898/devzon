"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects from backend
  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch("/api/projects");  // API endpoint for projects
      const data = await res.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-blue-400">🚀 Dev Zone Projects</h1>
      <p className="text-gray-400">Work on real-world projects and level up!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <Link key={project.id} href={`/dashboard/projects/${project.id}`}>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
              <span className="text-blue-400 mt-2 block">View Project →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
