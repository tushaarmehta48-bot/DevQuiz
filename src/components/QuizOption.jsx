import React from "react";

const QuizOption = ({ text, className = "", onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-left p-3 rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default QuizOption;
