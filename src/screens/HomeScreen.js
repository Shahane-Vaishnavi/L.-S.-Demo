import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to LegalSakhi</h1>

      <div className="grid grid-cols-2 gap-4">
        <div
          onClick={() => navigate("/advocates")}
          className="bg-purple-500 text-white p-6 rounded-xl text-center cursor-pointer"
        >
          👩‍⚖️ Advocates
        </div>

        <div
          onClick={() => navigate("/rights")}
          className="bg-pink-500 text-white p-6 rounded-xl text-center cursor-pointer"
        >
          ⚖️ Rights
        </div>

        <div
          onClick={() => navigate("/complaint")}
          className="bg-blue-500 text-white p-6 rounded-xl text-center cursor-pointer col-span-2"
        >
          📝 File Complaint
        </div>
      </div>
    </div>
  );
}
