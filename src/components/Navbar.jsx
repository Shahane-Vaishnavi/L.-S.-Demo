export default function Navbar({ setScreen }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-around",
      padding: "15px",
      background: "#ffffff22",
      backdropFilter: "blur(15px)",
      borderRadius: "0 0 15px 15px"
    }}>
      <button onClick={() => setScreen("dashboard")}>Home</button>
      <button onClick={() => setScreen("advocate")}>Find Advocate</button>
      <button>SOS</button>
    </nav>
  );
}
