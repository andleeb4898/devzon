"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const ProjectDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const [project, setProject] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [skills, setSkills] = useState("");
  const [repositoryLink, setRepositoryLink] = useState("");
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      const res = await fetch(`http://localhost:4002/api/v1/projects/all-projects/${id}`);
      if (!res.ok) throw new Error("Failed to fetch project details");
      const data = await res.json();
      setProject(data);
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = { repositoryLink, youtubeLink, skills };

    try {
      const res = await fetch("/api/submit-project", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setFormStatus("✅ Project submitted successfully!");
        fetchProject();
      } else {
        const errorData = await res.json();
        setFormStatus(`❌ Failed: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error submitting project:", error);
      setFormStatus("❌ Failed to submit the project. Try again.");
    }
  };

  if (!project) return <p className="text-center text-white mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Project Title & Description */}
        <h1 className="text-4xl font-bold text-teal-300 mb-4">{project.title}</h1>
        <p className="text-lg text-gray-300">{project.description}</p>

        {/* Video Tutorials Section */}
        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-blue-400">🎥 Video Tutorials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {project.videoLinks.map((link, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <h4 className="text-xl text-teal-400 text-center py-2 bg-gray-800">Tutorial {index + 1}</h4>
                {link ? (
                  <iframe
                    className="w-full h-56 sm:h-64 md:h-80"
                    src={`https://www.youtube.com/embed/${link.split("v=")[1]}`}
                    title={`Tutorial ${index + 1}`}
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p className="text-center text-gray-400">No video available</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Features Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-yellow-400">🔧 Advanced Features</h3>
          <p className="text-lg text-gray-300 mt-4">{project.advancedFeatures}</p>
        </div>

        {/* Submission Form */}
        <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-teal-300 text-center">🚀 Submit Your Project</h3>
          <form onSubmit={handleFormSubmit} className="mt-6 space-y-6">
            {/* YouTube Link Input */}
            <div>
              <label className="block text-gray-300 mb-1">🎥 YouTube Link</label>
              <input
                type="text"
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Paste YouTube link here..."
              />
            </div>

            {/* Repository Link Input */}
            <div>
              <label className="block text-gray-300 mb-1">💾 Repository Link</label>
              <input
                type="text"
                value={repositoryLink}
                onChange={(e) => setRepositoryLink(e.target.value)}
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Paste GitHub repo link here..."
              />
            </div>

            {/* Skills Input */}
            <div>
              <label className="block text-gray-300 mb-1">🛠 Skills Used</label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter skills (e.g. React, Node.js)..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 py-3 rounded-lg font-bold text-lg transition-all"
            >
              🚀 Submit Project
            </button>
          </form>

          {/* Form Status Message */}
          {formStatus && (
            <p
              className={`mt-4 text-center ${
                formStatus.includes("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {formStatus}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
