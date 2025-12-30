// src/components/Timer.jsx
import React, { useEffect, useState } from "react";

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = ((duration - timeLeft) / duration) * circumference;

  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <div className="relative w-24 h-24">
        {/* Background Circle */}
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            className="text-gray-300 dark:text-gray-700"
            fill="none"
          />
          {/* Animated Progress Circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            className={`${
              timeLeft <= 5
                ? "text-red-500"
                : timeLeft <= 5
                ? "text-yellow-400"
                : "text-green-400"
            } transition-all duration-1000`}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
          />
        </svg>

        {/* Time Text */}
        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-800 dark:text-gray-100">
          {timeLeft}s
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
        Time Remaining
      </p>
    </div>
  );
};

export default Timer;
