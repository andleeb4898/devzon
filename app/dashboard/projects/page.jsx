"use client"; 
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const ProjectsPage = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch user's projects from the API
    const fetchProjects = async () => {
      const response = await fetch(`/api/projects?userId=${user.id}`);
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, [user.id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Your Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
