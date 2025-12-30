import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth.jsx";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useAuth();

  return (
    <footer
      className={`mt-12 border-t ${
        darkMode
          ? "bg-gray-900 border-gray-700 text-gray-300"
          : "bg-white border-gray-200 text-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">DevQuest</h2>
          <p className="text-sm leading-relaxed">
            Level up your development journey through fun and interactive quizzes.  
            Learn, play, and conquer 
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="text-lg font-semibold mb-2 text-primary">Quick Links</h3>
          <Link to="/home" className="hover:text-primary transition">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-primary transition">
            Dashboard
          </Link>
          <Link to="/create" className="hover:text-primary transition">
            Create Quiz
          </Link>
          <Link to="/about" className="hover:text-primary transition">
            About
          </Link>
        </div>

        {/* Connect Section */}
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="text-lg font-semibold mb-2 text-primary">Connect</h3>
          <p>Follow my journey and stay inspired:</p>
          <div className="flex gap-5 mt-2 text-2xl">
            <a
              href="mailto:bantichouhan610@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/banti-chouhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/chouhanjibanti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub />
            </a>
        
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`border-t ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
      />

      {/* Bottom Note */}
      <div className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-primary">DevQuest</span>.  
        Built with ❤️ by <span className="text-primary font-semibold">Banti Chouhan</span>.
      </div>
    </footer>
  );
};

export default Footer;
