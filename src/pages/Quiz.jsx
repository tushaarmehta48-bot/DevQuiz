import React, { useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext.jsx";
import Navbar from "../components/Navbar.jsx";
import { quizzes } from "../data/quizzes.js";
import Timer from "../components/Timer.jsx"; // ✅ Import Timer

const Quiz = () => {
  const { selectedCategory, selectedDifficulty } = useQuiz();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [badges, setBadges] = useState([]);
  const [timerDuration, setTimerDuration] = useState(10); // default timer

  // ✅ Set timer duration based on difficulty
  useEffect(() => {
    if (selectedDifficulty === "Beginner") setTimerDuration(5);
    else if (selectedDifficulty === "Intermediate") setTimerDuration(10);
    else setTimerDuration(15);
  }, [selectedDifficulty]);

  // ✅ Load quiz questions (built-in + custom)
  let questions = [];

  if (selectedCategory?.id === "custom" || selectedCategory?.name === "Custom Quiz") {
    const storedCustomQuizzes = JSON.parse(localStorage.getItem("customQuizzes") || "[]");

    const matchedCustomQuiz =
      storedCustomQuizzes.find(
        (quiz) =>
          quiz.category?.toLowerCase() ===
            (selectedCategory?.name?.toLowerCase() || "custom") &&
          quiz.difficulty?.toLowerCase() === selectedDifficulty?.toLowerCase()
      ) || storedCustomQuizzes[0];

    if (matchedCustomQuiz) {
      questions = matchedCustomQuiz.questions.map((q) => ({
        question: q.question,
        options: q.options.map((opt, i) => ({
          text: opt,
          correct: i === q.correctIndex,
          explanation: `The correct answer is "${q.options[q.correctIndex]}".`,
        })),
        hint: "This is your custom question.",
      }));
    }
  } else {
    const foundQuiz = quizzes.find(
      (q) =>
        q?.category?.toLowerCase?.() === selectedCategory?.name?.toLowerCase?.() &&
        q?.level?.toLowerCase?.() === selectedDifficulty?.toLowerCase?.()
    );
    questions = foundQuiz?.questions || [];
  }

  // ✅ Save progress to localStorage when quiz ends
  useEffect(() => {
    if (quizOver) {
      const previousData = JSON.parse(localStorage.getItem("quizProgress")) || [];
      const newRecord = {
        category: selectedCategory?.name,
        difficulty: selectedDifficulty,
        score,
        total: questions.length,
        streak,
        badges,
        date: new Date().toLocaleString(),
      };
      localStorage.setItem("quizProgress", JSON.stringify([...previousData, newRecord]));
    }
  }, [quizOver, selectedCategory?.name, selectedDifficulty, score, streak, badges, questions.length]);

  // 🧠 Handle no question case
  if (!questions || questions.length === 0) {
    return (
      <>
        <Navbar />
        <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center dark:bg-gray-900">
          <h2 className="text-2xl font-bold mb-4">No questions found!</h2>
          <p className="text-gray-500">Try selecting a different category or difficulty level.</p>
        </div>
      </>
    );
  }

  // ✅ Handle option click
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowExplanation(true);

    if (option.correct) {
      setScore((s) => s + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);

      if (newStreak === 3 && !badges.includes("3 Streak")) setBadges([...badges, "3 Streak"]);
      if (newStreak === 5 && !badges.includes("5 Streak")) setBadges([...badges, "5 Streak"]);
    } else {
      setStreak(0);
    }
  };

  // ✅ Next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((q) => q + 1);
      setSelectedOption(null);
      setShowHint(false);
      setShowExplanation(false);
    } else {
      setQuizOver(true);
    }
  };

  // ✅ Auto move to next question when timer ends
  const handleTimeUp = () => {
    if (!showExplanation) {
      setShowExplanation(true);
      setTimeout(() => handleNext(), 1500);
    }
  };

  // ✅ Improved Option Styling
  const getOptionClass = (option) => {
    if (!showExplanation)
      return `
        bg-gray-100 
        dark:bg-gray-800 
        hover:bg-gray-200 
        dark:hover:bg-gray-700 
        text-gray-900 
        dark:text-gray-100 
        transition-all 
        duration-200
      `;

    if (option.correct)
      return "bg-green-600 text-white dark:bg-green-500 dark:text-white";

    if (selectedOption === option && !option.correct)
      return "bg-red-600 text-white dark:bg-red-500 dark:text-white";

    return "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100";
  };

  // ✅ Quiz Over Screen (Dark Mode Fixed)
  if (quizOver)
    return (
      <>
        <Navbar />
        <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center dark:bg-gray-900">
          <div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 border dark:border-gray-700 rounded-xl p-8 shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-blue-500"> Quiz Completed!</h2>
            <p className="text-lg mb-2">
              <span className="font-semibold"> Your Score:</span> {score}/{questions.length}
            </p>
            <p className="text-lg mb-4">
              <span className="font-semibold">Longest Streak:</span> {streak}
            </p>

            {badges.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-yellow-400">Your Badges:</h3>
                <div className="flex justify-center gap-2 flex-wrap">
                  {badges.map((b, i) => (
                    <span key={i} className="bg-yellow-300 text-gray-800 px-3 py-1 rounded-full font-medium">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => {
                setQuizOver(false);
                setCurrentQuestion(0);
                setScore(0);
                setStreak(0);
                setBadges([]);
                setSelectedOption(null);
                setShowHint(false);
                setShowExplanation(false);
              }}
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 mt-4 transition"
            >
              Restart
            </button>
          </div>
        </div>
      </>
    );

  // ✅ Quiz UI
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen dark:bg-gray-900 flex flex-col items-center p-6">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl shadow-lg p-8 mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">
              {selectedCategory?.name} ({selectedDifficulty})
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Question {currentQuestion + 1}/{questions.length}
            </p>
          </div>

          {/* ⏱️ Timer Display */}
          <Timer key={currentQuestion} duration={timerDuration} onTimeUp={handleTimeUp} />

          <h2 className="text-xl font-semibold mb-4 text-primary">
            {questions[currentQuestion]?.question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion]?.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                className={`w-full text-left p-3 rounded-lg font-medium ${getOptionClass(option)}`}
                disabled={showExplanation}
              >
                {option.text}
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-sm bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              {showHint ? "Hide Hint" : "Show Hint"}
            </button>

            {showExplanation && (
              <button
                onClick={handleNext}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
              >
                Next
              </button>
            )}
          </div>

          {showHint && (
            <p className="mt-4 italic text-gray-700 dark:text-gray-300">
              Hint: {questions[currentQuestion]?.hint}
            </p>
          )}

          {showExplanation && selectedOption && (
            <p className="mt-4 text-sm text-gray-800 dark:text-gray-300">
              Explanation: {selectedOption.explanation}
            </p>
          )}

          <div className="mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">Current Streak: {streak}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
