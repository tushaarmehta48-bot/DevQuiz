import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
/**
 * Central app context: theme, auth, and light quiz state.
 * Auth is stored in localStorage (frontend-only).
 */

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // Auth / user
  const [user, setUser] = useState(null);

  // Theme (true = dark)
  const [darkMode, setDarkMode] = useState(() => {
    const v = localStorage.getItem("theme");
    return v ? v === "dark" : true;
  });

  // Simple quiz-related state (used across pages if needed)
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  // load persisted current user (if any)
  useEffect(() => {
    const cu = JSON.parse(localStorage.getItem("currentUser"));
    if (cu) setUser(cu);
  }, []);

  // apply theme class to document
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // -- Auth helpers (localStorage-backed) --
  // signupUser: returns { success, message }
  const signupUser = (email, password, name = "") => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      return { success: false, message: "User already exists" };
    }
    const newUser = { email, password, name };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true, user: newUser };
  };

  // loginUser: returns { success, message }
  const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find((u) => u.email === email && u.password === password);
    if (!found) return { success: false, message: "Invalid credentials" };
    localStorage.setItem("currentUser", JSON.stringify(found));
    setUser(found);
    return { success: true, user: found };
  };

  const logoutUser = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    // clear selected quiz state if desired
    setSelectedCategory(null);
    setSelectedDifficulty(null);
  };

  // theme toggle
  const toggleDarkMode = () => setDarkMode((d) => !d);

  // helper to set selected category/difficulty (used by Home & Quiz pages)
  const startQuiz = (categoryObj, difficultyStr) => {
    setSelectedCategory(categoryObj);
    setSelectedDifficulty(difficultyStr);
  };

  return (
    <QuizContext.Provider
      value={{
        user,
        signupUser,
        loginUser,
        logoutUser,
        darkMode,
        toggleDarkMode,
        selectedCategory,
        selectedDifficulty,
        startQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};



export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

