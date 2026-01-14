import SOSButton from "./SOSButton";

export default function Dashboard({ setScreen }) {
  return (
    <div className="screen">
      <div>
        <h1>Hello, Vaishnavi ❤️</h1>
        <p>Your Women Safety & Legal Support Hub</p>

        <br />
        <button onClick={() => setScreen("advocate")}
                style={{ background: "#9b5cff" }}>
          Find Legal Advocate
        </button>

        <SOSButton />
      </div>
    </div>
  );
}
