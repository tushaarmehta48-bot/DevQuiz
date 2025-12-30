import React, { useState } from "react";
import DifficultySelector from "./DifficultySelector.jsx";

const CategoryCard = ({ category, onStart }) => {
  const [open, setOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("Beginner"); // only once

  const handleStartClick = () => {
    // Always pass both category and difficulty correctly
    onStart(category, difficulty);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-start">
      <div className="flex items-center gap-3 w-full">
        <img
          src={category.icon}
          alt={category.name}
          className="w-12 h-12 object-contain"
        />
        <div className="flex-1">
          <h3 className="font-semibold">{category.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {category.description}
          </p>
        </div>
        <button
          onClick={() => setOpen((s) => !s)}
          className="px-3 py-1 rounded bg-primary text-white"
        >
          Start
        </button>
      </div>

      {open && (
        <div className="mt-4 w-full">
          <DifficultySelector
            selected={difficulty}
            setSelected={setDifficulty}
          />
          <div className="mt-3 flex gap-2">
            <button
              onClick={handleStartClick}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Start Quiz 
            </button>
            <button
              onClick={() => setOpen(false)}
              className="px-3 py-1 rounded border"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
