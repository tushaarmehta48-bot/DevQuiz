import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth.jsx";

const Navbar = () => {
  const { user, logoutUser, darkMode, toggleDarkMode } = useAuth();
  const nav = useNavigate();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-r from-white via-gray-50 to-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <Link
            to="/home"
            className="text-2xl font-extrabold text-primary hover:opacity-80 transition"
          >
            DevQuest
          </Link>
          <div className="hidden sm:flex items-center gap-4 font-medium">
            <Link
              to="/home"
              className="hover:text-primary transition duration-200"
            >
              Home
            </Link>
            {user && (
              <Link
                to="/dashboard"
                className="hover:text-primary transition duration-200"
              >
                Dashboard
              </Link>
            )}
            {user && (
              <Link
                to="/create"
                className="hover:text-primary transition duration-200"
              >
                Create Quiz
              </Link>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="text-2xl p-1 rounded hover:scale-110 transition-transform"
            title="Toggle theme"
          >
            {darkMode ? "🌞" : "🌜"}
          </button>

          {user ? (
            <>
              <span className="hidden sm:inline-block text-sm font-medium">
                {user.name || user.email}
              </span>
              <button
                onClick={() => {
                  logoutUser();
                  nav("/login");
                }}
                className="bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-400 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`px-3 py-1.5 rounded-md border ${
                  darkMode
                    ? "border-gray-700 hover:bg-gray-800"
                    : "border-gray-300 hover:bg-gray-100"
                } transition`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-3 py-1.5 rounded-md bg-green-600 text-white hover:bg-green-500 transition"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
