export default function SOSButton() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <button style={{
        background: "red",
        padding: "20px",
        borderRadius: "50%",
        width: "120px",
        height: "120px",
        fontSize: "22px",
        fontWeight: "bold",
        border: "none",
        color: "white"
      }}>
        SOS
      </button>
      <p>Instant Emergency Alert</p>
    </div>
  );
}
