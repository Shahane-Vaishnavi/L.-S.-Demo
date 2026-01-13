import React, { useState } from "react";

export default function ComplaintScreen() {
  const [details, setDetails] = useState("");

  const handleSubmit = () => {
    alert("Complaint Submitted Successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">File a Complaint</h1>

      <textarea
        placeholder="Describe your issue..."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className="w-full h-40 border p-3 rounded"
      ></textarea>

      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg"
      >
        Submit
      </button>
    </div>
  );
}
