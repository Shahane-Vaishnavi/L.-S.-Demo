import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/onboarding");
    }, 1500);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white text-4xl font-bold">
      LegalSakhi
    </div>
  );
}
