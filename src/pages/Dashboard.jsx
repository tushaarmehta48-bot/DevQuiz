import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Navbar from "../components/Navbar.jsx";
import { useAuth } from "../context/useAuth.jsx";

const COLORS = ["#00C49F", "#FF8042", "#0088FE", "#FFBB28", "#FF4444"];

const Dashboard = () => {
  const { user } = useAuth();
  const [progressData, setProgressData] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [badges, setBadges] = useState([]);

  // ✅ Load quiz progress from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("quizProgress")) || [];
    setProgressData(stored);

    let scoreSum = 0;
    let questionSum = 0;
    let allBadges = new Set();
    let maxStreak = 0;

    stored.forEach((entry) => {
      scoreSum += entry.score;
      questionSum += entry.total;
      if (entry.streak > maxStreak) maxStreak = entry.streak;
      entry.badges.forEach((b) => allBadges.add(b));
    });

    setTotalScore(scoreSum);
    setTotalQuestions(questionSum);
    setLongestStreak(maxStreak);
    setBadges([...allBadges]);
  }, []);

  // ✅ Prepare Pie Chart data
  const pieData = progressData.map((entry, index) => ({
    name: `${entry.category} (${entry.difficulty})`,
    value: entry.score,
    color: COLORS[index % COLORS.length],
  }));

  // ✅ Handle reset button
  const handleReset = () => {
    localStorage.removeItem("quizProgress");
    setProgressData([]);
    setTotalScore(0);
    setTotalQuestions(0);
    setLongestStreak(0);
    setBadges([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-10">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Welcome, {user?.name || user?.email}! 🎯
        </p>

        {/* 📊 Pie Chart Section */}
        {pieData.length > 0 ? (
          <>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <div className="flex-1 text-center">
                <h2 className="text-xl font-semibold mb-2">Your Quiz Performance</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Shows score distribution across all categories & difficulties
                </p>
                <PieChart width={320} height={320}>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={110}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>

              {/* 📈 Stats Summary */}
              <div className="flex-1 flex flex-col items-center md:items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-xl mb-3 w-60 text-center">
                  <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                    Total Score
                  </h3>
                  <p className="text-2xl font-bold">{totalScore}</p>
                </div>

                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-xl mb-3 w-60 text-center">
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                    Questions Attempted
                  </h3>
                  <p className="text-2xl font-bold">{totalQuestions}</p>
                </div>

                <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-xl w-60 text-center">
                  <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">
                    Longest Streak
                  </h3>
                  <p className="text-2xl font-bold">{longestStreak}</p>
                </div>
              </div>
            </div>

            {/* 🧹 Reset Button */}
            <div className="text-center mt-8">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition duration-300"
              >
                Reset Dashboard
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Clears only your quiz history — doesn’t affect your account.
              </p>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-12">
            No quiz data yet. Take your first quiz to see your progress!
          </div>
        )}

        {/* 🏅 Badge Display */}
        {badges.length > 0 && (
          <div className="mt-10 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">Your Achievements 🏆</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-white font-semibold shadow"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
