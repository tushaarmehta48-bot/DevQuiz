// src/services/authService.js

// Signup (frontend only using localStorage)
export const signupUser = (email, password, name = "") => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find((u) => u.email === email)) return { success: false, message: "User exists" };
  users.push({ email, password, name });
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true };
};

// Login
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const found = users.find((u) => u.email === email && u.password === password);
  if (!found) return { success: false, message: "Invalid credentials" };
  return { success: true, user: found };
};
