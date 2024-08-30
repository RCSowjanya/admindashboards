"use client";
import React, { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Renamed to password for consistency
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Corrected to use setPassword
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (password.trim() === "") {
      setErrorMessage("Please enter the password.");
      return;
    }

    // Handle successful login
    setErrorMessage(""); // Clear error messages
    // Proceed with your login logic here
  };

  return (
    <div className="login-bg h-screen w-full flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/Images/cusp-logo.webp"
            className="w-24 mb-4"
            alt="cusp-logo"
          />
          <h1 className="font-[700] text-[#153060] text-[40px] mb-2 ad">
            Login
          </h1>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="mb-2 text-[14px] font-[400] text-[#153060]"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleInputChange}
            className="mb-4 p-2 text-[14px] font-[400] border border-gray-300 rounded placeholder-[#9BADCA] focus:outline-none"
            required
          />
          <label
            htmlFor="password"
            className="mb-2 text-[14px] font-[400] text-[#153060]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            className="mb-4 p-2 text-[14px] font-[400] border border-gray-300 rounded placeholder-[#9BADCA] focus:outline-none"
            required
          />

          {errorMessage && (
            <p className="text-red-500 text-center text-sm mb-4">
              {errorMessage}
            </p>
          )}

          <div className="w-full">
            <button
              type="submit"
              className="bg-[#0BB68D] text-white py-2 text-[14px] rounded uppercase w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
