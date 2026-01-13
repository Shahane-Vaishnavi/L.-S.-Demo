import React, { useState } from "react";
import { onboardingData } from "../data/onboardingData";
import { useNavigate } from "react-router-dom";

export default function OnboardingScreen() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const item = onboardingData[step];

  const next = () => {
    if (step < onboardingData.length - 1) setStep(step + 1);
    else navigate("/login");
  };

  return (
    <div className="p-8 text-center">
      <div className={`mx-auto text-6xl bg-gradient-to-br ${item.gradient} text-white p-10 rounded-full w-32 h-32 flex items-center justify-center`}>
        {item.icon}
      </div>

      <h1 className="text-3xl font-bold mt-8">{item.title}</h1>
      <p className="text-gray-600 mt-3">{item.description}</p>

      <button
        onClick={next}
        className="mt-10 bg-purple-500 text-white px-6 py-2 rounded-lg"
      >
        {step === onboardingData.length - 1 ? "Get Started" : "Next"}
      </button>
    </div>
  );
}
