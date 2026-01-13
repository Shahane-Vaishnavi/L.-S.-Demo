import React from "react";
import { advocates } from "../data/advocatesData";

export default function AdvocatesScreen() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Find Advocates</h1>

      {advocates.map((adv, index) => (
        <div key={index} className="p-4 border rounded-lg mb-4 flex items-center">
          <div className="text-4xl mr-4">{adv.photo}</div>

          <div>
            <h2 className="font-bold text-lg">{adv.name}</h2>
            <p>{adv.experience} experience</p>
            <p>{adv.cases}</p>
            <p>{adv.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
