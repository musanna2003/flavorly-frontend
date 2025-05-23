import React, { useState } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.init";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Please check your inbox.");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address.");
      } else {
        toast.error("Something went wrong. Try again.");
      }
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleReset} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        <input
          type="email"
          className="input w-full mb-4"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-neutral w-full">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
