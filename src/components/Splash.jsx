export default function Splash({ onFinish }) {
  return (
    <div className="screen">
      <div className="card">
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>Legal Sakhi</h1>
        <p>Your Personal Women Safety & Legal Assistance Companion</p>

        <button onClick={onFinish} style={{ marginTop: "20px" }}>
          Continue
        </button>
      </div>
    </div>
  );
}
