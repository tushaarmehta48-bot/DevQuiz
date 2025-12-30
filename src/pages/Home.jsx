import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { categories } from "../data/categories.js";
import CategoryCard from "../components/CategoryCard.jsx";
import { useQuiz } from "../context/QuizContext.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";


const Home = () => {
  const { darkMode, startQuiz } = useQuiz();
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);

  const handleStart = (category, difficulty) => {
    startQuiz(category, difficulty);
    navigate("/quiz");
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen`}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-28 pb-16 px-4">
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          DevQuest
        </motion.h1>
        <motion.p
          className="text-lg text-gray-500 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Learn, Play & Conquer your development journey 
        </motion.p>
        <motion.button
          onClick={() => setShowCategories(true)}
          className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
        >
          Let’s Begin
        </motion.button>
      </section>

      {/* Features Section */}
      {!showCategories && (
        <section className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16">
          {[
            {
              title: "Learn",
              desc: "Boost your knowledge with topic-based quizzes built by developers.",
              icon: "📘",
            },
            {
              title: "Play",
              desc: "Challenge yourself with timed quizzes and score streaks!",
              icon: "🎮",
            },
            {
              title: "Conquer",
              desc: "Track your progress, earn badges, and rise to the top!",
              icon: "🏆",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-2xl shadow-md ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </motion.div>
          ))}
        </section>
      )}

      {/* Categories Section */}
      {showCategories && (
        <motion.div
          className="max-w-6xl mx-auto p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Choose a Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                onStart={(category, difficulty) => handleStart(category, difficulty)}
              />
            ))}
          </div>

          <p className="text-sm text-gray-500 text-center">
            💡 Tip: Pick a category and difficulty. By default, it’s Beginner.
          </p>
        </motion.div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
