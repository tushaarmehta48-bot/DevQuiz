import React from "react";
import { useAuth } from "../context/useAuth";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useAuth();
  return (
    <button
      onClick={toggleDarkMode}
      className="text-2xl"
      title="Toggle Dark/Light Mode"
    >
      {darkMode ? "🌞" : "🌜"}
    </button>
  );
};

export default DarkModeToggle;
