import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

// Create the context
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  // Load initial state from localStorage (if available)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    return storedLoginStatus === "true";
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Sign Up function
  const signUp = (userData) => {
    try {
      setUser(userData); // Save user data
      setIsLoggedIn(true); // Set login status to true
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
      toast.success("Sign up successful!");
    } catch (error) {
      toast.error("Error during sign-up. Please try again.");
      console.error("Sign-up error:", error);
    }
  };

  // Login function
  const login = (credentials) => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.username === credentials.username &&
        storedUser.password === credentials.password
      ) {
        setUser(storedUser); // Save user data in state
        setIsLoggedIn(true); // Set login status to true
        localStorage.setItem("isLoggedIn", "true"); // Persist login status
        toast.success("Login successful!");
      } else {
        toast.error("Username or password is incorrect. Please try again.");
      }
    } catch (error) {
      toast.error("Error during login. Please try again.");
      console.error("Login error:", error);
    }
  };

  // Logout function
  const logout = () => {
    try {
      setUser(null); // Clear user data from state
      setIsLoggedIn(false); // Set login status to false
      localStorage.setItem("isLoggedIn", "false"); // Mark user as logged out
      // Note: We do NOT remove user data from local storage
      toast.info("You have been logged out.");
    } catch (error) {
      toast.error("Error during logout. Please try again.");
      console.error("Logout error:", error);
    }
  };

  // Effect to load user data from localStorage on mount
  useEffect(() => {
    try {
      const storedLoginStatus = localStorage.getItem("isLoggedIn");
      if (storedLoginStatus === "true") {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
