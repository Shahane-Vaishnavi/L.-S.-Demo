import React from "react";
import { legalRights } from "../data/legalRightsData";

export default function RightsScreen() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Women's Legal Rights</h1>

      {legalRights.map((right, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg mb-4 text-white bg-gradient-to-r ${right.color}`}
        >
          <div className="flex items-center text-xl">
            <span className="mr-4 text-3xl">{right.icon}</span>
            {right.title}
          </div>
        </div>
      ))}
    </div>
  );
}
