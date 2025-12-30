import React from "react";
import { useAuth } from "../context/useAuth.jsx"; // 👈 to access darkMode

const DifficultySelector = ({ selected, setSelected }) => {
  const { darkMode } = useAuth();
  const levels = ["Beginner", "Intermediate", "Advanced"];

  const getColors = (level) => {
    if (darkMode) {
      return {
        base:
          level === "Beginner"
            ? "bg-green-600 hover:bg-green-500"
            : level === "Intermediate"
            ? "bg-yellow-600 hover:bg-yellow-500"
            : "bg-red-600 hover:bg-red-500",
        text: "text-white",
      };
    } else {
      return {
        base:
          level === "Beginner"
            ? "bg-green-200 hover:bg-green-300"
            : level === "Intermediate"
            ? "bg-yellow-200 hover:bg-yellow-300"
            : "bg-red-200 hover:bg-red-300",
        text: "text-gray-900",
      };
    }
  };

  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {levels.map((level) => {
        const { base, text } = getColors(level);
        const isSelected = selected === level;

        return (
          <button
            key={level}
            onClick={() => setSelected(level)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 
              ${base} ${text} 
              ${isSelected ? "ring-2 ring-primary scale-105" : "opacity-90 hover:opacity-100"}
            `}
          >
            {level}
          </button>
        );
      })}
    </div>
  );
};

export default DifficultySelector;
