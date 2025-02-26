"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ProjectDetailPage = ({ params }) => {
  const { id } = params;
  const [project, setProject] = useState(null);
  const [youtubeLinks, setYoutubeLinks] = useState(["", "", "", "", "", "", ""]);
  const [skills, setSkills] = useState("");
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    async function fetchProject() {
      const res = await fetch(`/api/projects/${id}`); // Fetch project by ID
      const data = await res.json();
      setProject(data);
    }
    fetchProject();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., POST data to the server or Firestore)
    const formData = { youtubeLinks, skills };

    const res = await fetch("/api/submit-project", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setFormStatus("Project submitted successfully!");
    } else {
      setFormStatus("Failed to submit the project. Try again later.");
    }
  };

  if (!project) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-blue-400">{project.title}</h1>
      <p className="text-gray-400">{project.description}</p>

      {/* Video Tutorials */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">🎥 Video Tutorials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {youtubeLinks.map((link, index) => (
            <div key={index}>
              <h4 className="text-xl text-blue-400">Tutorial {index + 1}</h4>
              <iframe
                className="w-full h-64 md:h-96 rounded-lg"
                src={link}
                title={`Tutorial ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* Submission Form */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold">🚀 Submit Your Project</h3>
        <form onSubmit={handleFormSubmit}>
          {/* YouTube Links */}
          {youtubeLinks.map((link, index) => (
            <div key={index} className="mt-4">
              <label className="block text-gray-300">YouTube Link {index + 1}:</label>
              <input
                type="text"
                value={link}
                onChange={(e) => {
                  const newLinks = [...youtubeLinks];
                  newLinks[index] = e.target.value;
                  setYoutubeLinks(newLinks);
                }}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
          ))}

          {/* Skills Used */}
          <div className="mt-4">
            <label className="block text-gray-300">Skills Used:</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400"
          >
            Submit Project
          </button>
        </form>

        {formStatus && (
          <p className={`mt-4 ${formStatus.includes("success") ? "text-green-500" : "text-red-500"}`}>
            {formStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
