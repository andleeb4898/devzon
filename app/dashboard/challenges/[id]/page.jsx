"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ProjectDetailPage = ({ params }) => {
  const { id } = params;
  const [project, setProject] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [skills, setSkills] = useState("");

  useEffect(() => {
    async function fetchProject() {
      const res = await fetch(`/api/projects/${id}`);  // Fetch project by ID
      const data = await res.json();
      setProject(data);
    }
    fetchProject();
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-blue-400">{project.title}</h1>
      <p className="text-gray-400">{project.description}</p>

      {/* Video Tutorial */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">🎥 Video Tutorial</h3>
        <iframe
          className="w-full h-64 md:h-96 rounded-lg"
          src={project.videoUrl}
          title={project.title}
          allowFullScreen
        ></iframe>
      </div>

      {/* Submission Form */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold">🚀 Submit Your Project</h3>
        <form method="POST" action="/api/submit-project">
          <input
            type="hidden"
            name="projectId"
            value={project.id}
          />
          <label className="block mt-2 text-gray-300">YouTube Link:</label>
          <input
            type="text"
            name="youtubeLink"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />

          <label className="block mt-2 text-gray-300">Skills Used:</label>
          <input
            type="text"
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400"
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
