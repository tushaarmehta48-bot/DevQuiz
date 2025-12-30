import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";

const CustomQuiz = () => {
  const [q, setQ] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [customQuestions, setCustomQuestions] = useState([]);

  const addQuestion = () => {
    if (!q || options.some((opt) => !opt)) return alert("Please fill all fields!");

    const newQuestion = { question: q, options, correctIndex };
    setCustomQuestions([...customQuestions, newQuestion]);

    // Reset fields
    setQ("");
    setOptions(["", ""]);
    setCorrectIndex(0);
  };

  const handleSave = () => {
    if (customQuestions.length === 0) return alert("Add at least one question!");

    const stored = JSON.parse(localStorage.getItem("customQuizzes")) || [];
    stored.push({
      category: category || "Custom",
      difficulty,
      questions: customQuestions,
    });

    localStorage.setItem("customQuizzes", JSON.stringify(stored));
    alert("✅ Custom quiz saved locally!");

    // Reset form
    setCategory("");
    setCustomQuestions([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Create Your Custom Quiz
        </h1>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Enter your question"
          className="w-full p-2 mb-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
        />

        {options.map((opt, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              value={opt}
              onChange={(e) => {
                const newOpts = [...options];
                newOpts[i] = e.target.value;
                setOptions(newOpts);
              }}
              placeholder={`Option ${i + 1}`}
              className="flex-1 p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
            />
            <label className="flex items-center gap-1">
              <input
                type="radio"
                checked={correctIndex === i}
                onChange={() => setCorrectIndex(i)}
              />
              Correct
            </label>
          </div>
        ))}

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setOptions([...options, ""])}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Option
          </button>

          <button
            onClick={addQuestion}
            className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Add Question
          </button>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="flex-1 p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save Quiz
        </button>
      </div>
    </div>
  );
};

export default CustomQuiz;
