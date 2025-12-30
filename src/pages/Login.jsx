import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Login = () => {
  const { loginUser, darkMode } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const res = loginUser(form.email, form.password);
    if (!res.success) {
      setError(res.message);
      return;
    }
    nav("/home");
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen flex flex-col`}
    >
      <Navbar />

      {/* 👇 Added pt-28 to avoid navbar overlap */}
      <main className="flex-grow flex items-center justify-center pt-28 pb-12 px-4">
        <form
          onSubmit={handleSubmit}
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } w-full max-w-md rounded-lg p-8 shadow-lg`}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <label className="block text-sm mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded mb-3 bg-gray-50 dark:bg-gray-700 focus:outline-none"
          />

          <label className="block text-sm mb-1">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded mb-3 bg-gray-50 dark:bg-gray-700 focus:outline-none"
          />

          {error && <div className="text-red-400 mb-3">{error}</div>}

          <button className="w-full bg-primary text-white py-3 rounded hover:scale-105 transition">
            Login
          </button>

          <p className="text-sm mt-4 text-center text-gray-500 dark:text-gray-400">
            Don’t have an account?{" "}
            <a href="/signup" className="text-primary font-medium hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
