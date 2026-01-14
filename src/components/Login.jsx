export default function Login({ onLogin }) {
  return (
    <div className="screen">
      <div className="card" style={{ width: "90%", maxWidth: "340px" }}>
        <h2>Welcome Back</h2>

        <input type="text" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
}
