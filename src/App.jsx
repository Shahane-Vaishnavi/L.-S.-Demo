import { useState } from "react";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AdvocateFinder from "./components/AdvocateFinder";

export default function App() {
  const [screen, setScreen] = useState("splash");

  return (
    <>
      {screen === "splash" && <Splash onFinish={() => setScreen("login")} />}
      {screen === "login" && <Login onLogin={() => setScreen("dashboard")} />}
      {screen === "dashboard" && <Dashboard setScreen={setScreen} />}
      {screen === "advocate" && <AdvocateFinder />}
    </>
  );
}
