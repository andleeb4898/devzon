"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MonacoEditor from "@monaco-editor/react";
import Link from "next/link";

// Mock data for challenges, languages, and sample test cases
const challengesData = [
  { id: 1, title: "JavaScript Debugging", difficulty: "Easy", description: "Fix common JS bugs.", language: "JavaScript" },
  { id: 2, title: "Python Basics", difficulty: "Medium", description: "Solve basic algorithm problems in Python.", language: "Python" },
  { id: 3, title: "Data Structures in Java", difficulty: "Hard", description: "Implement common data structures in Java.", language: "Java" },
  { id: 4, title: "C++ Algorithm Optimization", difficulty: "Medium", description: "Optimize sorting algorithms in C++.", language: "C++" },
  { id: 5, title: "React Component Optimization", difficulty: "Medium", description: "Improve React component performance.", language: "JavaScript" },
  { id: 6, title: "SQL Query Challenges", difficulty: "Hard", description: "Write optimized SQL queries.", language: "SQL" },
  { id: 7, title: "Machine Learning in Python", difficulty: "Hard", description: "Implement a basic ML model in Python.", language: "Python" },
  { id: 8, title: "Java Basic Syntax", difficulty: "Easy", description: "Solve basic problems using Java syntax.", language: "Java" },
  { id: 9, title: "HTML & CSS Layout", difficulty: "Easy", description: "Build a responsive layout.", language: "HTML/CSS" },
  { id: 10, title: "React State Management", difficulty: "Medium", description: "Implement state management in React.", language: "JavaScript" },
];

const languages = [
  "JavaScript", "Python", "Java", "C++", "Ruby", "Go", "C", "Swift", "Kotlin", "HTML/CSS",
];

const ChallengesPage = () => {
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState(""); // Monaco code editor content
  const [feedback, setFeedback] = useState(null); // Feedback after code submission

  const filteredChallenges = challengesData.filter(
    (challenge) => difficultyFilter === "All" || challenge.difficulty === difficultyFilter
  );

  // Simulate code execution using Judge0 or a similar API
  const executeCode = async (code, language) => {
    try {
      // Mock API call to execute code
      const mockFeedback = simulateCodeExecution(code, language);
      setFeedback(mockFeedback);
    } catch (error) {
      setFeedback({ success: false, message: "Error executing the code." });
    }
  };

  const simulateCodeExecution = (code, language) => {
    // Mock simulation of code execution and feedback
    if (language === "JavaScript" && code.includes("console.log")) {
      return { success: true, message: "Code is correct! Well done!" };
    }
    return { success: false, message: "Code has errors or fails to meet requirements." };
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-blue-400">💡 Coding Challenges</h1>

      {/* Filter Buttons */}
      <div className="mt-4 flex space-x-4">
        {["All", "Easy", "Medium", "Hard"].map((level) => (
          <button
            key={level}
            onClick={() => setDifficultyFilter(level)}
            className={`px-4 py-2 rounded-lg ${
              difficultyFilter === level ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Challenge List */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {filteredChallenges.map((challenge) => (
          <motion.div
            key={challenge.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
          >
            <h2 className="text-xl font-bold">{challenge.title}</h2>
            <p className="text-gray-400">{challenge.description}</p>
            <span
              className={`mt-2 inline-block px-3 py-1 text-sm rounded-lg ${
                challenge.difficulty === "Easy" ? "bg-green-600"
                : challenge.difficulty === "Medium" ? "bg-yellow-600"
                : "bg-red-600"
              }`}
            >
              {challenge.difficulty}
            </span>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
              onClick={() => setSelectedChallenge(challenge)}
            >
              Start Challenge 🚀
            </button>
          </motion.div>
        ))}
      </div>

      {/* Language Selection */}
      {selectedChallenge && (
        <div className="mt-8 bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">{selectedChallenge.title}</h3>
          <div className="mb-4">
            <label htmlFor="language" className="text-gray-400">Select Language</label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          {/* Code Editor */}
          <MonacoEditor
            height="400px"
            language={language.toLowerCase()}
            value={code}
            onChange={(newValue) => setCode(newValue)}
            theme="vs-dark"
            options={{
              selectOnLineNumbers: true,
            }}
          />

          {/* Submit Button */}
          <button
            onClick={() => executeCode(code, language)}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            Submit Code 🚀
          </button>

          {/* Feedback */}
          {feedback && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg">
              <h4 className="text-lg font-semibold">{feedback.success ? "Success!" : "Error!"}</h4>
              <p>{feedback.message}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChallengesPage;
