import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

      <input type="email" placeholder="Email" className="w-full border p-2 mb-4 rounded" />
      <input type="password" placeholder="Password" className="w-full border p-2 mb-4 rounded" />

      <button
        onClick={() => navigate("/home")}
        className="w-full bg-purple-500 text-white py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
